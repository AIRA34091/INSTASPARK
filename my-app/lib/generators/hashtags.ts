const hashtagDatabase: Record<string, string[]> = {
  general: [
    "#instagood", "#photooftheday", "#beautiful", "#happy", "#picoftheday",
    "#love", "#fashion", "#art", "#photography", "#instagram",
  ],
  photography: [
    "#photography", "#photooftheday", "#photographer", "#photo", "#picoftheday",
    "#instaphoto", "#photographylovers", "#photoshoot", "#portrait", "#naturephotography",
    "#streetphotography", "#landscapephotography", "#photographyislife", "#photographyeveryday", "#photographysouls",
  ],
  fitness: [
    "#fitness", "#fitnessmotivation", "#fit", "#workout", "#gym",
    "#fitnessjourney", "#training", "#health", "#lifestyle", "#healthy",
    "#fitfam", "#fitspo", "#exercise", "#nutrition", "#bodybuilding",
  ],
  food: [
    "#food", "#foodporn", "#foodie", "#instafood", "#yummy",
    "#delicious", "#foodphotography", "#homemade", "#cooking", "#foodstagram",
    "#tasty", "#foodblogger", "#recipes", "#chef", "#foodlover",
  ],
  travel: [
    "#travel", "#travelphotography", "#wanderlust", "#travelgram", "#instatravel",
    "#travelblogger", "#adventure", "#explore", "#vacation", "#trip",
    "#travelling", "#traveltheworld", "#traveladdict", "#traveldiaries", "#beautifuldestinations",
  ],
  fashion: [
    "#fashion", "#style", "#ootd", "#instafashion", "#fashionblogger",
    "#fashionista", "#streetstyle", "#stylish", "#outfit", "#fashionstyle",
    "#lookbook", "#trendy", "#fashiongram", "#clothes", "#accessories",
  ],
  business: [
    "#business", "#entrepreneur", "#success", "#marketing", "#smallbusiness",
    "#startup", "#money", "#entrepreneurship", "#businessowner", "#hustle",
    "#motivation", "#digitalmarketing", "#branding", "#businesstips", "#investment",
  ],
  art: [
    "#art", "#artist", "#artwork", "#instaart", "#artistsoninstagram",
    "#drawing", "#artistic", "#artgallery", "#creative", "#artofvisuals",
    "#digitalart", "#illustration", "#sketch", "#painting", "#artlovers",
  ],
  lifestyle: [
    "#lifestyle", "#life", "#motivation", "#inspiration", "#happiness",
    "#selflove", "#mindset", "#positivity", "#goals", "#dreams",
    "#success", "#daily", "#vibes", "#moments", "#memories",
  ],
  tech: [
    "#technology", "#tech", "#innovation", "#gadgets", "#coding",
    "#programming", "#developer", "#software", "#ai", "#digital",
    "#techie", "#computers", "#engineering", "#futuretech", "#technews",
  ],
}

export function generateHashtags(niche: string, count: number = 15): string[] {
  const normalizedNiche = niche.toLowerCase().trim()
  
  // Find matching category
  let hashtags: string[] = [...hashtagDatabase.general]
  
  for (const [category, tags] of Object.entries(hashtagDatabase)) {
    if (normalizedNiche.includes(category) || category.includes(normalizedNiche)) {
      hashtags = [...hashtags, ...tags]
    }
  }
  
  // Add niche-specific hashtags
  const nicheWords = normalizedNiche.split(/[\s,]+/)
  nicheWords.forEach((word) => {
    if (word.length > 2) {
      hashtags.push(`#${word}`)
      hashtags.push(`#${word}life`)
      hashtags.push(`#${word}community`)
    }
  })
  
  // Remove duplicates and shuffle
  const uniqueHashtags = Array.from(new Set(hashtags))
  const shuffled = uniqueHashtags.sort(() => Math.random() - 0.5)
  
  return shuffled.slice(0, count)
}

export const hashtagNiches = [
  "Photography",
  "Fitness & Health",
  "Food & Cooking",
  "Travel",
  "Fashion & Style",
  "Business & Entrepreneurship",
  "Art & Design",
  "Lifestyle",
  "Technology",
  "Beauty & Makeup",
]
