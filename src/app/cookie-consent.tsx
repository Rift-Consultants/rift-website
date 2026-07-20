"use client";

import { useEffect, useState } from "react";
import styles from "./cookie-consent.module.css";

const CONSENT_COOKIE = "cookie-consent";
const CONSENT_MAX_AGE = 60 * 60 * 24 * 365;

function loadScript(id: string, src: string) {
  if (document.getElementById(id)) return;

  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function loadTrackingScripts() {
  loadScript(
    "hyros",
    `https://210780.t.hyros.com/v1/lst/universal-script?ph=a47f2bfb0e5a26c767deb05356ac15fdcc8291351ab6451184d174c4bfa1af68&tag=!clicked&ref_url=${encodeURIComponent(document.URL)}`,
  );
  loadScript("meta-pixel", "https://connect.facebook.net/en_US/fbevents.js");
  loadScript("hubspot-form", "https://js-na2.hsforms.net/forms/embed/39849130.js");
  loadScript("hs-script-loader", "/hs/scriptloader/39849130.js");

  const fbq = window.fbq ?? Object.assign(
    function (...args: unknown[]) {
      fbq.queue.push(args);
    },
    { queue: [] as unknown[][] },
  );
  window.fbq = fbq;
  fbq("init", "946156424710981");
  fbq("track", "PageView");
}

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & { queue: unknown[][] };
  }
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith(`${CONSENT_COOKIE}=`))
      ?.split("=")[1];

    if (consent === "accepted") {
      loadTrackingScripts();
    } else if (consent !== "rejected") {
      const showBanner = window.setTimeout(() => setIsVisible(true), 0);
      return () => window.clearTimeout(showBanner);
    }
  }, []);

  function saveConsent(value: "accepted" | "rejected") {
    document.cookie = `${CONSENT_COOKIE}=${value}; Max-Age=${CONSENT_MAX_AGE}; Path=/; SameSite=Lax`;
    setIsVisible(false);
    if (value === "accepted") loadTrackingScripts();
  }

  if (!isVisible) return null;

  return (
    <aside className={styles.banner} aria-labelledby="cookie-consent-title" role="dialog">
      <div>
        <p className={styles.eyebrow}>Your privacy preferences</p>
        <h2 id="cookie-consent-title">We use cookies</h2>
        <p className={styles.copy}>
          We use cookies to enhance your experience and analyze site traffic to optimize performance.
          Click “Accept All Cookies” to agree to store cookies and keep things running smoothly.
        </p>
      </div>
      <div className={styles.actions}>
        <button className={styles.reject} type="button" onClick={() => saveConsent("rejected")}>
          Reject All Cookies
        </button>
        <button className={styles.accept} type="button" onClick={() => saveConsent("accepted")}>
          Accept All Cookies
        </button>
      </div>
    </aside>
  );
}
