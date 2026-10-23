
"use client";

import { FormEvent, useState } from "react";

const BUSINESS_TYPES = [
  { value: "ecommerce", label: "E-commerce / product seller" },
  { value: "retailer", label: "Retailer / direct seller" },
  { value: "network_marketer", label: "Network marketer" },
  { value: "beginner", label: "Planning to start selling" },
];

function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M16.02 3.2A12.68 12.68 0 0 0 5.1 22.32L3.4 28.55l6.4-1.68a12.75 12.75 0 0 0 6.2 1.6h.01A12.64 12.64 0 0 0 16.02 3.2Zm0 23.16h-.01a10.56 10.56 0 0 1-5.38-1.47l-.39-.23-3.8 1 1.02-3.7-.25-.4a10.48 10.48 0 1 1 8.81 4.8Zm5.76-7.86c-.32-.16-1.89-.93-2.18-1.04-.29-.1-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58-.95-.84-1.59-1.88-1.78-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.36-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.07 1.3 3.28c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.53 1.81.68.76.24 1.45.21 1.99.13.61-.09 1.89-.77 2.15-1.51.27-.74.27-1.37.19-1.51-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export default function RegistrationForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);

    const payload = {
      fullName: String(formData.get("fullName") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      businessType: String(formData.get("businessType") ?? ""),
    };

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || "Registration failed. Please try again."
        );
      }

      window.dispatchEvent(
        new CustomEvent("bootcamp-registration-success", {
          detail: { eventId: result.eventId },
        })
      );

      window.location.assign(result.whatsappUrl);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
      setLoading(false);
    }
  }

  const inputClass =
  "mt-2 min-h-14 w-full rounded-xl border border-[#dedbd3] bg-white px-4 py-3 text-base text-[#171717] outline-none transition duration-200 placeholder:text-[#99958d] hover:border-[#c9bda5] focus:border-[#c18a20] focus:ring-4 focus:ring-[#e8a32d]/15";

  return (
    <section
      id="register"
      className="relative isolate scroll-mt-6 overflow-hidden bg-[#f5f3ee] px-5 py-16 text-[#171717] sm:px-8 sm:py-24"
    >
      {/* Soft background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-[#e8a32d]/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#25D366]/10 blur-[100px]"
      />

      <div className="mx-auto max-w-2xl">
        {/* Section introduction */}
        <div className="mb-9 text-center sm:mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e8a32d]/40 bg-[#e8a32d]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#805400] sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#e8a32d]" />
            YOUR FREE TRAINING STARTS HERE
          </span>

          <h2 className="mt-6 text-4xl leading-[1.08] font-black tracking-tight sm:text-5xl lg:text-6xl">
            Take Your First Step
            <span className="mt-2 block text-[#b47a0b]">
              Towards Selling Crazily Online
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-[#55514a] sm:text-lg sm:leading-8">
            Complete the form to register for the free 3-day Mikechinem
            Sales Growth Bootcamp. You’ll be directed to WhatsApp after
            submitting your details.
          </p>
        </div>

        {/* Light registration card */}
        <div className="rounded-[26px] border border-[#e8a32d]/40 bg-white p-5 shadow-[0_20px_70px_rgba(36,29,15,0.10)] sm:rounded-[32px] sm:p-9">
          {/* Card header */}
          <div className="mb-7 flex items-center gap-4 border-b border-[#e9e5dc] pb-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e8a32d]/15 text-[#805400]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8-1v6m3-3h-6"
                />
              </svg>
            </div>

            <div>
              <h3 className="text-xl font-black tracking-tight sm:text-2xl">
                Registration Form
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#777168]">
                Fill in your details to reserve your free spot.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="fullName"
                className="text-sm font-bold text-[#24211d] sm:text-base"
              >
                Full name <span className="text-[#b47a0b]">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                maxLength={100}
                placeholder="Enter your full name"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-sm font-bold text-[#24211d] sm:text-base"
              >
                Email address <span className="text-[#b47a0b]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="text-sm font-bold text-[#24211d] sm:text-base"
              >
                Phone / WhatsApp number{" "}
                <span className="text-[#b47a0b]">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                maxLength={25}
                placeholder="e.g. 08012345678"
                className={inputClass}
              />
              <p className="mt-2 text-xs leading-5 text-[#777168]">
                Use a number you can access on WhatsApp.
              </p>
            </div>

            <div>
              <label
                htmlFor="businessType"
                className="text-sm font-bold text-[#24211d] sm:text-base"
              >
                What best describes you?{" "}
                <span className="text-[#b47a0b]">*</span>
              </label>
              <select
                id="businessType"
                name="businessType"
                required
                defaultValue=""
                className={`${inputClass} appearance-none`}
              >
                <option value="" disabled>
                  Select your business type
                </option>
                {BUSINESS_TYPES.map((item) => (
                  <option
                    key={item.value}
                    value={item.value}
                    className="bg-white text-[#171717]"
                  >
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Privacy note */}
            <div className="flex items-start gap-3 rounded-xl border border-[#e9e5dc] bg-[#faf9f6] p-4">
              <span className="mt-0.5 text-[#a66c00]" aria-hidden="true">
                🔒
              </span>
              <p className="text-xs leading-5 text-[#6e685e] sm:text-sm sm:leading-6">
                Your details will be used to manage your training
                registration. Please review the privacy notice before
                submitting.
              </p>
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm leading-6 text-red-800"
              >
                {error}
              </p>
            )}

            {/* WhatsApp-green CTA */}
            <button
              type="submit"
              disabled={loading}
              className="group flex min-h-16 w-full items-center justify-center gap-3 rounded-xl border border-[#86efac]/50 bg-[#25D366] px-5 py-4 text-center text-base leading-6 font-black text-[#062b14] shadow-[0_5px_0_#137b3b,0_12px_30px_rgba(37,211,102,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#39e477] hover:shadow-[0_6px_0_#137b3b,0_16px_35px_rgba(37,211,102,0.24)] active:translate-y-1 active:shadow-none disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:text-lg"
            >
              {loading ? (
                <>
                  <span
                    className="h-5 w-5 animate-spin rounded-full border-2 border-[#062b14]/30 border-t-[#062b14]"
                    aria-hidden="true"
                  />
                  SUBMITTING YOUR REGISTRATION...
                </>
              ) : (
                <>
                  <WhatsAppIcon className="h-6 w-6 shrink-0" />
                  <span>REGISTER & JOIN WHATSAPP</span>
                  <span
                    aria-hidden="true"
                    className="text-xl transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </>
              )}
            </button>

            <p className="text-center text-xs leading-5 text-[#777168] sm:text-sm">
              Free to join · 3 days of practical training
            </p>
          </form>
        </div>

        <p className="mt-6 text-center text-xs leading-5 text-[#777168]">
          After successful registration, you’ll be redirected to WhatsApp
          to join the training group.
        </p>
      </div>
    </section>
  );
}
