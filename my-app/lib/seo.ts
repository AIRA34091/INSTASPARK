import { Metadata } from "next"
import { SEOMetadata } from "@/types"
import { BRAND_NAME, BRAND_DESCRIPTION } from "./constants"

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  ogImage = "/og-image.jpg",
  canonicalUrl,
}: SEOMetadata): Metadata {
  const fullTitle = title.includes(BRAND_NAME) ? title : `${title} | ${BRAND_NAME}`
  
  return {
    title: fullTitle,
    description,
    keywords: [...keywords, "AI tools", "free tools", "content generator", "social media tools"],
    authors: [{ name: BRAND_NAME }],
    creator: BRAND_NAME,
    publisher: BRAND_NAME,
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
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: BRAND_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@instaspark",
    },
    alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
  }
}

export function generateToolSEOMetadata(
  toolName: string,
  toolDescription: string,
  keywords: string[] = []
): Metadata {
  return generateSEOMetadata({
    title: `${toolName} - Free AI Tool`,
    description: toolDescription,
    keywords: [...keywords, toolName.toLowerCase(), "free tool", "AI generator"],
  })
}

export function generateStructuredData(type: string, data: Record<string, unknown>) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }
  return JSON.stringify(baseSchema)
}

export function generateSoftwareApplicationSchema(
  name: string,
  description: string,
  category: string,
  rating?: { ratingValue: number; reviewCount: number }
) {
  return generateStructuredData("SoftwareApplication", {
    name,
    description,
    applicationCategory: category,
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: rating
      ? {
          "@type": "AggregateRating",
          ratingValue: rating.ratingValue,
          reviewCount: rating.reviewCount,
        }
      : undefined,
  })
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return generateStructuredData("FAQPage", {
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  })
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; item: string }>
) {
  return generateStructuredData("BreadcrumbList", {
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  })
}

export function generateOrganizationSchema() {
  return generateStructuredData("Organization", {
    name: BRAND_NAME,
    description: BRAND_DESCRIPTION,
    url: "https://instaspark.com",
    logo: "https://instaspark.com/logo.png",
    sameAs: [
      "https://twitter.com/instaspark",
      "https://facebook.com/instaspark",
      "https://instagram.com/instaspark",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "instaspark@gmail.com",
    },
  })
}
