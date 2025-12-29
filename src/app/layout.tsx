import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { freigeistConsSans } from "@/lib/fonts";
import Navigation from "@/components/shared/Navigation";
import Cursor from "@/components/Cursor";
import LenisProvider from "@/components/LenisProvider";

const interSans = Inter({
  variable: "--font-inter-sans",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creative Design and Development Agency",
  description: "Using data-science and best UX design and product design practices we deliver measurable business results and solutions that meet user needs and company goals",
  icons: {
    icon: "./favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body
        className={`${interSans.variable} ${plusJakartaSans.variable} ${freigeistConsSans.variable} antialiased`}
      >
        <LenisProvider>
          <Navigation />
          {children}

          {/* Extra Components */}
          <Cursor />
        </LenisProvider>
      </body>
    </html>
  );
}
