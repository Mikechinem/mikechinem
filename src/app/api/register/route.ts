import { createHash, randomUUID } from "node:crypto";
import { NextResponse } from "next/server";

const WHATSAPP_INVITE_LINK =
  "https://chat.whatsapp.com/G6VKYjgTMZGBMo66s91cX9";

const BUSINESS_TYPES = [
  "ecommerce",
  "retailer",
  "network_marketer",
  "beginner",
] as const;

function sha256(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") ?? undefined;
}

async function sendMetaRegistrationEvent({
  request,
  eventId,
  email,
  phone,
  firstName,
  lastName,
}: {
  request: Request;
  eventId: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
}) {
  const pixelId =
    process.env.META_PIXEL_ID ?? process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    console.error("Meta CAPI environment variables are missing.");
    return;
  }

  const userData: Record<string, string | string[]> = {
    em: [sha256(email.trim().toLowerCase())],
    ph: [sha256(phone.replace(/\D/g, ""))],
    fn: [sha256(firstName.trim().toLowerCase())],
  };

  if (lastName.trim()) {
    userData.ln = [sha256(lastName.trim().toLowerCase())];
  }

  const clientIp = getClientIp(request);
  const userAgent = request.headers.get("user-agent");
  const referer = request.headers.get("referer");

  if (clientIp) userData.client_ip_address = clientIp;
  if (userAgent) userData.client_user_agent = userAgent;

  let eventSourceUrl: string | undefined;
  if (referer) {
    try {
      eventSourceUrl = new URL(referer).toString();
    } catch {
      eventSourceUrl = undefined;
    }
  }

  const graphApiVersion =
    process.env.META_GRAPH_API_VERSION ?? "v25.0";

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: "CompleteRegistration",
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: "website",
        user_data: userData,
        ...(eventSourceUrl ? { event_source_url: eventSourceUrl } : {}),
      },
    ],
  };

  const testEventCode = process.env.META_CAPI_TEST_EVENT_CODE;
  if (testEventCode) {
    payload.test_event_code = testEventCode;
  }

  const query = new URLSearchParams({ access_token: accessToken });

  try {
    const response = await fetch(
      `https://graph.facebook.com/${graphApiVersion}/${pixelId}/events?${query}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-store",
        signal: AbortSignal.timeout(5000),
      }
    );

    if (!response.ok) {
      const details = await response.text();
      console.error("Meta CAPI event failed:", response.status, details);
    }
  } catch (error) {
    // Tracking failure should not undo a successful registration.
    console.error("Meta CAPI request error:", error);
  }
}

function getCookieValue(cookieHeader: string | null, name: string) {
  if (!cookieHeader) return undefined;

  const cookie = cookieHeader
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`));

    if (!cookie) return undefined;

  const value = cookie.slice(name.length + 1);

  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function normalizeNigerianPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");

  if (!digits) return "";

  if (phone.trim().startsWith("+")) return `+${digits}`;
  if (digits.startsWith("234")) return `+${digits}`;
  if (digits.startsWith("0")) return `+234${digits.slice(1)}`;

  return `+234${digits}`;
}

async function sendTikTokRegistrationEvent({
  request,
  eventId,
  email,
  phone,
  firstName,
  lastName,
}: {
  request: Request;
  eventId: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
}) {
  const pixelId =
    process.env.TIKTOK_PIXEL_ID ??
    process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID;
  const accessToken = process.env.TIKTOK_EVENTS_API_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    console.error("TikTok Events API environment variables are missing.");
    return;
  }

  const referer = request.headers.get("referer");
  const userAgent = request.headers.get("user-agent");
  const clientIp = getClientIp(request);
  const ttp = getCookieValue(request.headers.get("cookie"), "_ttp");

  let ttclid: string | undefined;
  if (referer) {
    try {
      ttclid = new URL(referer).searchParams.get("ttclid") ?? undefined;
    } catch {
      ttclid = undefined;
    }
  }

  const user: Record<string, string> = {
    email: sha256(email.trim().toLowerCase()),
    phone: sha256(normalizeNigerianPhone(phone)),
    first_name: sha256(firstName.trim().toLowerCase()),
  };

  if (lastName.trim()) {
    user.last_name = sha256(lastName.trim().toLowerCase());
  }
  if (clientIp) user.ip = clientIp;
  if (userAgent) user.user_agent = userAgent;
  if (ttp) user.ttp = ttp;
  if (ttclid) user.ttclid = ttclid;

  const eventUrl = referer || request.url;

  const payload: Record<string, unknown> = {
    event_source: "web",
    event_source_id: pixelId,
    data: [
      {
        event: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        user,
        page: { url: eventUrl },
      },
    ],
  };

  const testEventCode = process.env.TIKTOK_TEST_EVENT_CODE;
  if (testEventCode) payload.test_event_code = testEventCode;

  try {
    const response = await fetch(
      "https://business-api.tiktok.com/open_api/v1.3/event/track/",
      {
        method: "POST",
        headers: {
          "Access-Token": accessToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
        signal: AbortSignal.timeout(5000),
      }
    );

    const result = (await response.json()) as {
      code?: number;
      message?: string;
    };

    if (!response.ok || result.code !== 0) {
      console.error(
        "TikTok Events API event failed:",
        response.status,
        result.message ?? "Unknown TikTok API error"
      );
    }
  } catch (error) {
    // Tracking failure should not undo a successful registration.
    console.error("TikTok Events API request error:", error);
  }
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.MAILERLITE_API_KEY;
    const groupId = process.env.MAILERLITE_GROUP_ID;

    if (!apiKey || !groupId) {
      console.error("MailerLite environment variables are missing.");

      return NextResponse.json(
        {
          success: false,
          error: "Registration is temporarily unavailable.",
        },
        { status: 500 }
      );
    }

    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid request." },
        { status: 400 }
      );
    }

    if (typeof body !== "object" || body === null || Array.isArray(body)) {
      return NextResponse.json(
        { success: false, error: "Invalid request." },
        { status: 400 }
      );
    }

    const data = body as Record<string, unknown>;

    const fullName =
      typeof data.fullName === "string" ? data.fullName.trim() : "";
    const email =
      typeof data.email === "string"
        ? data.email.trim().toLowerCase()
        : "";
    const phone =
      typeof data.phone === "string" ? data.phone.trim() : "";
    const businessType =
      typeof data.businessType === "string" ? data.businessType : "";

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validBusinessType = BUSINESS_TYPES.some(
      (type) => type === businessType
    );

    if (
      !fullName ||
      fullName.length > 100 ||
      !validEmail ||
      email.length > 254 ||
      !phone ||
      phone.length > 25 ||
      !validBusinessType
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Please check your details and try again.",
        },
        { status: 400 }
      );
    }

    const nameParts = fullName.split(/\s+/);
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ");

    const mailerLiteResponse = await fetch(
      "https://connect.mailerlite.com/api/subscribers",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          fields: {
            name: firstName,
            last_name: lastName || "",
            phone,
            business_type: businessType,
          },
          groups: [groupId],
        }),
        cache: "no-store",
      }
    );

    if (!mailerLiteResponse.ok) {
      console.error(
        "MailerLite registration failed:",
        mailerLiteResponse.status
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "We couldn't complete your registration. Please try again shortly.",
        },
        { status: 502 }
      );
    }

    const eventId = randomUUID();

   await Promise.all([
  sendMetaRegistrationEvent({
    request,
    eventId,
    email,
    phone,
    firstName,
    lastName,
  }),
  sendTikTokRegistrationEvent({
    request,
    eventId,
    email,
    phone,
    firstName,
    lastName,
  }),
]);


    return NextResponse.json({
      success: true,
      eventId,
      whatsappUrl: WHATSAPP_INVITE_LINK,
    });
  } catch (error) {
    console.error("Registration route error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}