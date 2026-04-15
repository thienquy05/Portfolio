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

export const metadata: Metadata = {
  title: "Thien Quy Pham | Portfolio",
  description: "Computer Science Portfolio for Thien Quy Pham",
  openGraph: {
    title: "Thien Quy Pham | Portfolio",
    description: "Computer Science Portfolio for Thien Quy Pham",
    url: "https://thienquy05.github.io",
    siteName: "Thien Quy Pham Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thien Quy Pham | Portfolio",
    description: "Computer Science Portfolio for Thien Quy Pham",
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
