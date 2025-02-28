import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

const geistSans = Assistant({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bonkelinks",
  description: "",
  icons: {
    icon: "/bonkelinks.svg",
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
        className={`${geistSans.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
