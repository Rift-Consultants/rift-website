import type { Metadata, Viewport } from "next";
import Script from "next/script";
import CookieConsent from "./cookie-consent";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentHappy | AI Training & Implementation",
  description: "AgentHappy helps leadership and management teams design, deploy, and govern practical AI agent workflows.",
  openGraph: {
    title: "AgentHappy | AI Training & Implementation",
    description: "Practical AI training and implementation for teams building durable, production-ready workflows.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AgentHappy | AI Training & Implementation",
    description: "Practical AI training and implementation for teams building durable, production-ready workflows.",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0A0A0A", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body data-state="form" data-screen-label="AgentHappy · AI Training & Implementation">
        {children}
        <Script id="commune-interactions" strategy="afterInteractive">{`
          window.addEventListener('message', function (e) {
            if (e.data && e.data.type === 'hsFormCallback' && e.data.eventName === 'onFormSubmitted') {
              document.body.setAttribute('data-state', 'confirmed');
              document.body.classList.remove('show-sticky');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          });
          (function () {
            var form = document.querySelector('.formstrip');
            var mq = window.matchMedia('(max-width: 860px)');
            if (!form || !('IntersectionObserver' in window)) return;
            var io = new IntersectionObserver(function (entries) {
              var visible = entries[0].isIntersecting;
              if (mq.matches && !visible) document.body.classList.add('show-sticky');
              else document.body.classList.remove('show-sticky');
            }, { threshold: 0 });
            io.observe(form);
          })();
        `}</Script>
        <CookieConsent />
      </body>
    </html>
  );
}
