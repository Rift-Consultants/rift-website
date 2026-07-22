import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentHappy | Practical AI Systems",
  description: "AgentHappy helps leadership teams turn AI possibilities into durable workflows.",
  openGraph: {
    title: "AgentHappy | Practical AI Systems",
    description: "AI systems that move your business forward.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AgentHappy | Practical AI Systems",
    description: "AI systems that move your business forward.",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0A0A0A", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body data-screen-label="AgentHappy · Practical AI Systems">
        {children}
      </body>
    </html>
  );
}
