import { Tool, ToolCategoryInfo, ContactInfo } from "@/types"

export const BRAND_NAME = "InstaSpark"
export const BRAND_TAGLINE = "AI-Powered Tools for Creators & Professionals"
export const BRAND_DESCRIPTION = "Free AI-powered tools for Instagram, YouTube, resumes, and more. No login required. Generate bios, captions, hashtags, titles, and utility outputs instantly."

export const CONTACT_INFO: ContactInfo = {
  name: "Dilshad Ahmed",
  phone: "0345-6784432",
  email: "instaspark@gmail.com",
}

export const TOOL_CATEGORIES: ToolCategoryInfo[] = [
  {
    id: "social-media",
    name: "Social Media Tools",
    description: "Boost your social media presence with AI-powered tools for Instagram and more.",
    icon: "Share2",
  },
  {
    id: "ai-content",
    name: "AI Content Generators",
    description: "Create engaging content with our AI writing assistants.",
    icon: "Sparkles",
  },
  {
    id: "youtube",
    name: "YouTube Tools",
    description: "Optimize your YouTube channel with title, description, and tag generators.",
    icon: "Youtube",
  },
  {
    id: "resume-bio",
    name: "Resume & Bio Tools",
    description: "Craft professional resumes and compelling bios for LinkedIn and job applications.",
    icon: "FileText",
  },
  {
    id: "utility",
    name: "Utility Tools",
    description: "Handy utilities for everyday tasks including counters, converters, and generators.",
    icon: "Wrench",
  },
]

export const TOOLS: Tool[] = [
  // Social Media Tools
  {
    id: "instagram-bio",
    name: "Instagram Bio Generator",
    description: "Create catchy, professional Instagram bios in seconds. Perfect for influencers, businesses, and personal brands.",
    icon: "Instagram",
    category: "social-media",
    path: "/tools/social-media/instagram-bio/",
    popular: true,
  },
  {
    id: "hashtag-generator",
    name: "Hashtag Generator",
    description: "Generate trending, niche-specific hashtags to increase your post reach and engagement.",
    icon: "Hash",
    category: "social-media",
    path: "/tools/social-media/hashtag-generator/",
    popular: true,
  },
  {
    id: "username-generator",
    name: "Username Generator",
    description: "Find unique, available username ideas for any platform based on your niche or interests.",
    icon: "User",
    category: "social-media",
    path: "/tools/social-media/username-generator/",
  },
  {
    id: "font-generator",
    name: "Stylish Font Generator",
    description: "Convert your text into stylish, decorative fonts for bios, captions, and comments.",
    icon: "Type",
    category: "social-media",
    path: "/tools/social-media/font-generator/",
  },
  {
    id: "emoji-picker",
    name: "Emoji Picker for Bios",
    description: "Browse and copy the perfect emojis to enhance your social media bios and posts.",
    icon: "Smile",
    category: "social-media",
    path: "/tools/social-media/emoji-picker/",
  },
  // AI Content Tools
  {
    id: "caption-generator",
    name: "Instagram Caption Generator",
    description: "Generate engaging, creative captions for your Instagram posts with AI.",
    icon: "PenTool",
    category: "ai-content",
    path: "/tools/ai-content/caption-generator/",
    popular: true,
  },
  {
    id: "hooks-generator",
    name: "Reels/Shorts Hook Generator",
    description: "Create attention-grabbing hooks for your short-form video content.",
    icon: "Zap",
    category: "ai-content",
    path: "/tools/ai-content/hooks-generator/",
  },
  {
    id: "cta-generator",
    name: "CTA Generator",
    description: "Generate compelling call-to-action phrases that drive clicks and conversions.",
    icon: "MousePointer",
    category: "ai-content",
    path: "/tools/ai-content/cta-generator/",
  },
  {
    id: "viral-ideas",
    name: "Viral Post Idea Generator",
    description: "Get creative, trending content ideas that can help your posts go viral.",
    icon: "TrendingUp",
    category: "ai-content",
    path: "/tools/ai-content/viral-ideas/",
    new: true,
  },
  // YouTube Tools
  {
    id: "title-generator",
    name: "YouTube Title Generator",
    description: "Create click-worthy, SEO-optimized YouTube video titles that get more views.",
    icon: "Video",
    category: "youtube",
    path: "/tools/youtube/title-generator/",
    popular: true,
  },
  {
    id: "description-generator",
    name: "Description Generator",
    description: "Generate comprehensive, SEO-friendly video descriptions with timestamps and links.",
    icon: "AlignLeft",
    category: "youtube",
    path: "/tools/youtube/description-generator/",
  },
  {
    id: "tag-generator",
    name: "YouTube Tag Generator",
    description: "Find the best tags to help your videos rank higher in YouTube search.",
    icon: "Tags",
    category: "youtube",
    path: "/tools/youtube/tag-generator/",
  },
  {
    id: "seo-checker",
    name: "SEO Score Checker",
    description: "Analyze your video title, description, and tags for YouTube SEO optimization.",
    icon: "Search",
    category: "youtube",
    path: "/tools/youtube/seo-checker/",
    new: true,
  },
  // Resume & Bio Tools
  {
    id: "resume-headline",
    name: "Resume Headline Generator",
    description: "Create powerful resume headlines that grab recruiters' attention instantly.",
    icon: "Heading",
    category: "resume-bio",
    path: "/tools/resume-bio/resume-headline/",
  },
  {
    id: "professional-summary",
    name: "Professional Summary Generator",
    description: "Write compelling professional summaries for your resume or LinkedIn profile.",
    icon: "FileText",
    category: "resume-bio",
    path: "/tools/resume-bio/professional-summary/",
  },
  {
    id: "linkedin-bio",
    name: "LinkedIn Bio Generator",
    description: "Craft a professional LinkedIn bio that showcases your expertise and attracts opportunities.",
    icon: "Linkedin",
    category: "resume-bio",
    path: "/tools/resume-bio/linkedin-bio/",
  },
  {
    id: "fresher-bio",
    name: "Fresher Bio Generator",
    description: "Create impressive bios for fresh graduates with no work experience.",
    icon: "GraduationCap",
    category: "resume-bio",
    path: "/tools/resume-bio/fresher-bio/",
  },
  // Utility Tools
  {
    id: "word-counter",
    name: "Word & Character Counter",
    description: "Count words, characters, sentences, and paragraphs in your text instantly.",
    icon: "Calculator",
    category: "utility",
    path: "/tools/utility/word-counter/",
  },
  {
    id: "case-converter",
    name: "Case Converter",
    description: "Convert text between uppercase, lowercase, title case, and more.",
    icon: "ArrowUpDown",
    category: "utility",
    path: "/tools/utility/case-converter/",
  },
  {
    id: "password-generator",
    name: "Password Generator",
    description: "Generate strong, secure passwords with customizable length and complexity.",
    icon: "Lock",
    category: "utility",
    path: "/tools/utility/password-generator/",
  },
  {
    id: "qr-generator",
    name: "QR Code Generator",
    description: "Create QR codes for URLs, text, contact info, and more.",
    icon: "QrCode",
    category: "utility",
    path: "/tools/utility/qr-generator/",
    new: true,
  },
]

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Social Media Tools", href: "/tools/social-media/" },
  { name: "AI Content Tools", href: "/tools/ai-content/" },
  { name: "YouTube Tools", href: "/tools/youtube/" },
  { name: "Resume & Bio Tools", href: "/tools/resume-bio/" },
  { name: "Utility Tools", href: "/tools/utility/" },
  { name: "Blog", href: "/blog/" },
  { name: "Contact Us", href: "/contact/" },
]

export const FOOTER_LINKS = {
  tools: [
    { name: "Instagram Bio Generator", href: "/tools/social-media/instagram-bio/" },
    { name: "Hashtag Generator", href: "/tools/social-media/hashtag-generator/" },
    { name: "YouTube Title Generator", href: "/tools/youtube/title-generator/" },
    { name: "Caption Generator", href: "/tools/ai-content/caption-generator/" },
  ],
  company: [
    { name: "About Us", href: "/about/" },
    { name: "Blog", href: "/blog/" },
    { name: "Contact Us", href: "/contact/" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy/" },
    { name: "Terms & Conditions", href: "/terms/" },
    { name: "Disclaimer", href: "/disclaimer/" },
  ],
}
