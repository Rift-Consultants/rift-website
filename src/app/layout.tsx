import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rift Consultants | AI Training & Agentic Workflows for SMBs",
  description:
    "Rift Consultants helps SMB management teams turn AI hype into practical results through AI training, workflow automation, and agentic business systems.",
  keywords: [
    "AI consulting",
    "AI training",
    "agentic workflows",
    "workflow automation",
    "SMB consulting",
    "Rift Consultants",
  ],
  authors: [{ name: "Rift Consultants" }],
  creator: "Rift Consultants",
  metadataBase: new URL("https://riftconsultants.com"),
  openGraph: {
    title: "Rift Consultants | Empower Your Team with AI",
    description:
      "AI training and agentic workflows that help SMB management teams move from experimentation to measurable business results.",
    url: "https://riftconsultants.com",
    siteName: "Rift Consultants",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rift Consultants | AI Training & Agentic Workflows",
    description:
      "Turn AI hype into practical, repeatable business results with Rift Consultants.",
  },
};

export const viewport: Viewport = {
  themeColor: "#07182f",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
