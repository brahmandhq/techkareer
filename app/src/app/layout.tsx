import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: "https://localhost:3000/app/og",
        width: 1200,
        height: 630,
        alt: "Techkareer",
      },
    ],
  },
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
      {children}</body>
    </html>
    </>
  );
}
