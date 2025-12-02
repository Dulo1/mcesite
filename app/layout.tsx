import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EdilCostruzioni",
  description: "Costruzioni e Ristrutturazioni Edili",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning={true}>
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased font-body bg-brand-concrete-light text-brand-black`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
