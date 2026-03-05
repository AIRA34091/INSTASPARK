interface BioTemplate {
  category: string
  templates: string[]
}

const bioTemplates: BioTemplate[] = [
  {
    category: "creative",
    templates: [
      "Creating magic one post at a time ✨ | {niche} enthusiast | Dream big, work hard 🚀",
      "Turning ideas into reality 💡 | {niche} lover | Coffee addict ☕ | Let's create together 🤝",
      "{niche} explorer 🌍 | Capturing moments 📸 | Living life in full color 🎨",
      "Passionate {niche} creator 🎭 | Storyteller | Making the ordinary extraordinary ✨",
      "{niche} dreamer 💭 | Doer | Believer | Creating my own sunshine ☀️",
    ],
  },
  {
    category: "professional",
    templates: [
      "{niche} specialist | Helping brands grow 📈 | Results-driven professional 💼",
      "Expert in {niche} | Business strategist | Let's build something great together 🤝",
      "{niche} consultant | Turning challenges into opportunities | DM for collaborations",
      "Professional {niche} | Quality over quantity | Client-focused approach 🎯",
      "{niche} professional | Years of experience | Committed to excellence ⭐",
    ],
  },
  {
    category: "lifestyle",
    templates: [
      "Living my best life ✨ | {niche} enthusiast | Good vibes only 🌈",
      "{niche} lover | Travel addict ✈️ | Foodie 🍕 | Life is an adventure 🗺️",
      "Chasing dreams & sunsets 🌅 | {niche} passion | Grateful heart 💝",
      "{niche} | Fitness 💪 | Wellness 🧘 | Balance is key ⚖️",
      "Coffee ☕ | {niche} | Books 📚 | Cozy vibes only 🕯️",
    ],
  },
  {
    category: "business",
    templates: [
      "Founder | {niche} expert | Building dreams into businesses 🏗️",
      "CEO & {niche} specialist | Innovation-driven | Let's connect 🤝",
      "{niche} entrepreneur | Marketing maven | Growth hacker 📊",
      "Building {niche} empire 👑 | Business coach | Mentor",
      "{niche} business owner | Customer first | Quality always ⭐",
    ],
  },
  {
    category: "minimal",
    templates: [
      "{niche} | Less is more ✨",
      "Just a {niche} enthusiast 🌟",
      "{niche} | Simple living 🌿",
      "Focused on {niche} 🎯",
      "{niche} | Stay curious 🔍",
    ],
  },
]

const emojis: Record<string, string[]> = {
  creative: ["✨", "🎨", "🎭", "💫", "🌟", "🎪", "🎬", "📸"],
  professional: ["💼", "📈", "🎯", "⭐", "🏆", "💪", "🤝", "📊"],
  lifestyle: ["🌈", "☀️", "🌸", "✈️", "☕", "📚", "🧘", "🌿"],
  business: ["🏢", "💰", "🚀", "📱", "💡", "🔥", "⚡", "👑"],
  minimal: ["✨", "🌿", "💫", "🔹", "▪️", "◾", "✦", "◆"],
}

export function generateInstagramBios(
  niche: string,
  tone: string,
  includeEmoji: boolean,
  count: number = 5
): string[] {
  const templates = bioTemplates.find((t) => t.category === tone)?.templates || bioTemplates[0].templates
  const toneEmojis = emojis[tone] || emojis.creative

  const results: string[] = []

  for (let i = 0; i < count; i++) {
    const template = templates[i % templates.length]
    let bio = template.replace(/{niche}/g, niche)

    if (includeEmoji) {
      const randomEmoji = toneEmojis[Math.floor(Math.random() * toneEmojis.length)]
      if (!bio.includes(randomEmoji)) {
        bio = bio + " " + randomEmoji
      }
    }

    results.push(bio)
  }

  return results
}

export const bioTones = [
  { value: "creative", label: "Creative & Artsy" },
  { value: "professional", label: "Professional & Business" },
  { value: "lifestyle", label: "Lifestyle & Personal" },
  { value: "business", label: "Entrepreneur & Founder" },
  { value: "minimal", label: "Minimal & Clean" },
]

export const bioExamples = [
  "Photography",
  "Fitness Coaching",
  "Digital Marketing",
  "Food Blogging",
  "Fashion Styling",
  "Travel",
  "Tech Reviews",
  "Art & Design",
]
