import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "./components/layout/Header"
import { Footer } from "./components/layout/Footer"
import { BRAND_NAME, BRAND_DESCRIPTION } from "@/lib/constants"
import { generateOrganizationSchema } from "@/lib/seo"

const inter = Inter({ subsets: ["latin"] })

const BRAND_TAGLINE = "AI-Powered Tools for Creators & Professionals"

export const metadata: Metadata = {
  title: {
    default: `${BRAND_NAME} - ${BRAND_TAGLINE}`,
    template: `%s | ${BRAND_NAME}`,
  },
  description: BRAND_DESCRIPTION,
  keywords: ["AI tools", "free tools", "Instagram bio generator", "YouTube title generator", "hashtag generator", "caption generator"],
  authors: [{ name: BRAND_NAME }],
  creator: BRAND_NAME,
  metadataBase: new URL("https://instaspark.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: BRAND_NAME,
    title: `${BRAND_NAME} - ${BRAND_TAGLINE}`,
    description: BRAND_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: BRAND_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} - ${BRAND_TAGLINE}`,
    description: BRAND_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateOrganizationSchema(),
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
