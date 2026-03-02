export interface Tool {
  id: string
  name: string
  description: string
  icon: string
  category: ToolCategory
  path: string
  popular?: boolean
  new?: boolean
}

export type ToolCategory = 
  | 'social-media'
  | 'ai-content'
  | 'youtube'
  | 'resume-bio'
  | 'utility'

export interface ToolCategoryInfo {
  id: ToolCategory
  name: string
  description: string
  icon: string
}

export interface SEOMetadata {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonicalUrl?: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  publishedAt: string
  updatedAt?: string
  author: string
  tags: string[]
  readTime: number
}

export interface FAQItem {
  question: string
  answer: string
}

export interface ToolPageContent {
  title: string
  description: string
  howToUse: string[]
  benefits: string[]
  faq: FAQItem[]
  relatedTools: string[]
}

export interface ContactInfo {
  name: string
  phone: string
  email: string
}
