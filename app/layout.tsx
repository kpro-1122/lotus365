import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "lotus365",
  description:
    "Bet with the most trusted online betting exchange in India.Get the best odds, instant withdrawals & deposits,24/7 customer service and refer bonus. Enjoy safe and secure betting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased `}>{children}</body>
    </html>
  );
}
