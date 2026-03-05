const titleTemplates: Record<string, string[]> = {
  howTo: [
    "How to {topic} in {number} Minutes",
    "How I {topic} (Step by Step)",
    "The Ultimate Guide to {topic}",
    "How to {topic} for Beginners",
    "{topic}: A Complete Tutorial",
  ],
  list: [
    "{number} {topic} Tips You Need to Know",
    "Top {number} {topic} Hacks",
    "{number} Ways to {topic}",
    "Best {topic} Ideas: Top {number} Picks",
    "{number} {topic} Secrets Revealed",
  ],
  question: [
    "Is {topic} Worth It?",
    "What is {topic}? Explained",
    "Why {topic} Matters in {year}",
    "Can {topic} Really Change Your Life?",
    "The Truth About {topic}",
  ],
  viral: [
    "I Tried {topic} for 30 Days (Results)",
    "{topic} Changed Everything",
    "The {topic} Nobody Talks About",
    "My Honest Opinion on {topic}",
    "Stop Doing {topic} Wrong!",
  ],
}

const descriptionTemplate = `{title}

In this video, we dive deep into {topic}. Whether you're a beginner or experienced, you'll find valuable insights.

TIMESTAMPS:
0:00 - Introduction
1:30 - What is {topic}
3:45 - Key Points
6:00 - Practical Tips
8:30 - Common Mistakes
10:00 - Conclusion

RESOURCES MENTIONED:
• Resource 1
• Resource 2
• Resource 3

FOLLOW ME:
Instagram: @yourhandle
Twitter: @yourhandle
Website: www.yoursite.com

DISCLAIMER: This video is for educational purposes only.

#shorts #viral #trending #{topicTag}`

export function generateYouTubeTitles(
  topic: string,
  style: string,
  count: number = 5
): string[] {
  const templates = titleTemplates[style] || titleTemplates.howTo
  const year = new Date().getFullYear()
  const number = Math.floor(Math.random() * 10) + 5
  
  return templates.slice(0, count).map((template) =>
    template
      .replace(/{topic}/g, topic)
      .replace(/{year}/g, year.toString())
      .replace(/{number}/g, number.toString())
  )
}

export function generateYouTubeDescription(topic: string, title: string): string {
  return descriptionTemplate
    .replace(/{topic}/g, topic)
    .replace(/{title}/g, title)
    .replace(/{topicTag}/g, topic.toLowerCase().replace(/\s+/g, ""))
}

export function generateYouTubeTags(topic: string): string[] {
  const baseTags = [
    topic,
    `${topic} tutorial`,
    `${topic} guide`,
    `how to ${topic.toLowerCase()}`,
    `${topic} tips`,
    `${topic} for beginners`,
    `learn ${topic.toLowerCase()}`,
    `${topic} explained`,
    `best ${topic.toLowerCase()}`,
    `${topic} 2024`,
  ]
  return baseTags
}

export const titleStyles = [
  { value: "howTo", label: "How-To / Tutorial" },
  { value: "list", label: "Listicle / Top X" },
  { value: "question", label: "Question Based" },
  { value: "viral", label: "Viral / Clickbait" },
]
