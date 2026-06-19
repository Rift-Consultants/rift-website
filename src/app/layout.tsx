import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "OMNI Live Call | COMMUNE Capital",
  description: "Live Call Registration",
  metadataBase: new URL("https://invest.communecapital.com"),
  alternates: { canonical: "/livecall" },
  openGraph: { title: "Live Call Registration", description: "", url: "https://invest.communecapital.com/livecall", type: "website" },
  twitter: { card: "summary", title: "Live Call Registration", description: "" },
  generator: "HubSpot",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#EDEEE9", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body data-state="form" data-screen-label="OMNI Live Call · Form-First">
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
        <Script id="hyros" strategy="afterInteractive">{`var head=document.head;var script=document.createElement('script');script.type='text/javascript';script.src='https://210780.t.hyros.com/v1/lst/universal-script?ph=a47f2bfb0e5a26c767deb05356ac15fdcc8291351ab6451184d174c4bfa1af68&tag=!clicked&ref_url='+encodeURI(document.URL);head.appendChild(script);`}</Script>
        <Script id="meta-pixel" strategy="afterInteractive">{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','946156424710981');fbq('track','PageView');`}</Script>
        <Script id="hubspot-form" strategy="afterInteractive" src="https://js-na2.hsforms.net/forms/embed/39849130.js" />
        <Script id="hs-script-loader" strategy="afterInteractive" src="/hs/scriptloader/39849130.js" />
      </body>
    </html>
  );
}
