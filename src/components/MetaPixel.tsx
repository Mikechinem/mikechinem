"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function MetaPixel() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  useEffect(() => {
    function handleRegistrationSuccess(event: Event) {
      const detail = (
        event as CustomEvent<{ eventId?: string }>
      ).detail;

      if (!detail?.eventId || typeof window.fbq !== "function") {
        return;
      }

      window.fbq("track", "CompleteRegistration", {}, {
        eventID: detail.eventId,
      });
    }

    window.addEventListener(
      "bootcamp-registration-success",
      handleRegistrationSuccess
    );

    return () => {
      window.removeEventListener(
        "bootcamp-registration-success",
        handleRegistrationSuccess
      );
    };
  }, []);

  if (!pixelId) {
    return null;
  }

  const pixelScript = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
    s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
    (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', ${JSON.stringify(pixelId)});
    fbq('track', 'PageView');
  `;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {pixelScript}
    </Script>
  );
}