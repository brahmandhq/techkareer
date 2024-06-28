import type { Metadata } from "next"
import Head from "next/head"
import "./globals.css"
import Providers from "./Providers"
import { GoogleAnalytics } from "@next/third-parties/google"

export const metadata: Metadata = {
  title: "Techkareer | The only app you need for hiring",
  description: "The only app you need for hiring",

  openGraph: {
    title: "Techkareer",
    description: "The only app you need for hiring",
    siteName: "Techkareer",
    images: [
      {
        url: "https://www.techkareer.com/og.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@techkareer",
    creator: "@itsharshag",
    images: ["https://www.techkareer.com/og.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body>
        <Providers>{children}</Providers>
      </body>
      <GoogleAnalytics gaId="G-89FV5R6QSB" />
    </html>
  )
}
