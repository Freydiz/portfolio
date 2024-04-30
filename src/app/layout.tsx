import type { Metadata } from "next";
import { Nanum_Pen_Script, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const nanum_pen_script = Nanum_Pen_Script({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nanum-pen-script",
});

export const metadata: Metadata = {
  title: "Henriette Riis Steinbach",
  description: "Frontend developer that loves to create beautiful and functional applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${nanum_pen_script.variable}`}>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
