"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    ttq?: {
      track: (
        eventName: string,
        properties?: Record<string, unknown>,
        options?: { event_id: string }
      ) => void;
    };
  }
}

const PIXEL_ID = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID;

export default function TikTokPixel() {
  useEffect(() => {
    function handleRegistration(event: Event) {
      const eventId = (
        event as CustomEvent<{ eventId?: string }>
      ).detail?.eventId;

      if (!eventId) return;

      window.ttq?.track("Lead", {}, { event_id: eventId });
    }

    window.addEventListener(
      "bootcamp-registration-success",
      handleRegistration
    );

    return () => {
      window.removeEventListener(
        "bootcamp-registration-success",
        handleRegistration
      );
    };
  }, []);

  if (!PIXEL_ID) return null;

  return (
    <Script id="tiktok-pixel" strategy="afterInteractive">
      {`
        (function (w, d, t) {
          w.TiktokAnalyticsObject = t;
          var ttq = (w[t] = w[t] || []);
          ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"];
          ttq.setAndDefer = function (t, e) {
            t[e] = function () {
              t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
            };
          };
          for (var i = 0; i < ttq.methods.length; i++) {
            ttq.setAndDefer(ttq, ttq.methods[i]);
          }
          ttq.load = function (e) {
            var s = d.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=" + e + "&lib=" + t;
            var firstScript = d.getElementsByTagName("script")[0];
            firstScript.parentNode.insertBefore(s, firstScript);
          };
          ttq.load("${PIXEL_ID}");
          ttq.page();
        })(window, document, "ttq");
      `}
    </Script>
  );
}