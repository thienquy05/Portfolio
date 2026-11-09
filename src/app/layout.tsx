import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import dynamic from "next/dynamic";

const ChatWidget = dynamic(() => import("@/components/ChatWidget"));

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Thien Quy Pham: Computer Science student focused on cybersecurity and AI security. Prompt-injection defense, phishing detection, and network security projects. Seeking a Summer 2027 cybersecurity internship.";

export const metadata: Metadata = {
  metadataBase: new URL("https://thienquypham.vercel.app"),
  alternates: { canonical: "/" },
  title: "Thien Quy Pham | Cybersecurity & AI Security Portfolio",
  description,
  openGraph: {
    title: "Thien Quy Pham | Cybersecurity & AI Security Portfolio",
    description,
    url: "https://thienquypham.vercel.app",
    siteName: "Thien Quy Pham Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thien Quy Pham | Cybersecurity & AI Security Portfolio",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <ChatWidget />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
