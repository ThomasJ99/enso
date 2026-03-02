import type { Metadata } from "next";
import { Geist, Geist_Mono, Dongle } from "next/font/google";
import MainNavigation from "@/components/navigation/main-navigation";
import Footer from "@/components/ui/footer";
import "./globals.css";

const _geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const _geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const _dongle = Dongle({
  variable: "--font-dongle",
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Thomas Dojo",
  description:
    "A minimalist training space. Exercises, meditation, yoga, and mindful practice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${_geistSans.variable} ${_geistMono.variable} ${_dongle.variable} antialiased flex flex-col min-h-screen`}
      >
        <MainNavigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
