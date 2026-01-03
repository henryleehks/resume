import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Background } from "@/components/Background";
import { MusicToggle } from "@/components/MusicToggle";
import { Navbar } from "@/components/Navbar";
import { AudioProvider } from "@/hooks/AudioContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hein Kyaw Soe | Aspiring Software Engineer",
  description: "Portfolio of Hein Kyaw Soe, an Aspiring Software Engineer specializing in Business Analytics & Digital Cloud Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white selection:bg-purple-500/30`}
      >
        <AudioProvider>
          <Background />
          <Navbar />
          <MusicToggle />
          <main className="relative z-0">
            {children}
          </main>
        </AudioProvider>
      </body>
    </html>
  );
}