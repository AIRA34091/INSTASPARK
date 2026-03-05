const captionTemplates: Record<string, string[]> = {
  engagement: [
    "Double tap if you agree! {emoji}",
    "Tag someone who needs to see this {emoji}",
    "What's your thoughts? Comment below {emoji}",
    "Save this for later {emoji}",
    "Which one is your favorite? {emoji}",
  ],
  storytelling: [
    "Let me tell you a story... {emoji}",
    "The journey wasn't easy, but it was worth it {emoji}",
    "Here's what happened today {emoji}",
    "Flashback to this amazing moment {emoji}",
    "This changed everything for me {emoji}",
  ],
  inspirational: [
    "Believe in yourself and anything is possible {emoji}",
    "Your only limit is you {emoji}",
    "Dream big, work hard, make it happen {emoji}",
    "Every day is a new beginning {emoji}",
    "Success is a journey, not a destination {emoji}",
  ],
  promotional: [
    "New drop alert! {emoji} Link in bio",
    "Limited time offer {emoji} Don't miss out!",
    "Now available! {emoji} Shop link in bio",
    "Sale ends soon {emoji} Grab yours now!",
    "Exciting news coming {emoji} Stay tuned!",
  ],
  question: [
    "What's your go-to {topic}? {emoji}",
    "How do you handle {topic}? {emoji}",
    "Can anyone relate? {emoji}",
    "Who else loves {topic}? {emoji}",
    "What's your favorite {topic}? {emoji}",
  ],
}

const emojis = ["✨", "🔥", "💯", "🙌", "💪", "🌟", "❤️", "👇", "👆", "🎉", "💫", "🚀"]

export function generateCaptions(
  topic: string,
  tone: string,
  includeCTA: boolean,
  count: number = 5
): string[] {
  const templates = captionTemplates[tone] || captionTemplates.engagement
  const results: string[] = []

  for (let i = 0; i < count; i++) {
    const template = templates[i % templates.length]
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]
    let caption = template.replace(/{emoji}/g, randomEmoji).replace(/{topic}/g, topic)
    
    if (includeCTA && !caption.includes("bio")) {
      caption += "\n\nFollow @yourhandle for more!"
    }
    
    results.push(caption)
  }

  return results
}

export const captionTones = [
  { value: "engagement", label: "Engagement Focused" },
  { value: "storytelling", label: "Storytelling" },
  { value: "inspirational", label: "Inspirational" },
  { value: "promotional", label: "Promotional" },
  { value: "question", label: "Question Based" },
]
