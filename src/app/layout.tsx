import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import SpotlightEffect from "@/components/SpotlightEffect";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mukesh Nehete | Fullstack + AI Developer",
  description:
    "B.Tech IT student and aspiring Fullstack + AI Software Developer with a strong foundation in MERN Stack, Python and AI Integration.",
  openGraph: {
    title: "Mukesh Nehete | Fullstack + AI Developer",
    description:
      "B.Tech IT student and aspiring Fullstack + AI Software Developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#050505] font-body text-white antialiased">
        <LenisProvider>
          <CustomCursor />
          <SpotlightEffect />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
