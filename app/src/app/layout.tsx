import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Techkareer",
  description: "The only app you need for hiring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Head>
     <link rel='icon' href='/favicon.ico' />
    </Head>
    <html lang="en">
      <body className={inter.className}>
      <img src="./og.png" alt="Techkareer" />
      {children}</body>
    </html>
    </>
  );
}
