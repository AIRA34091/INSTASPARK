export function countWordsAndChars(text: string): {
  words: number
  characters: number
  charactersNoSpaces: number
  sentences: number
  paragraphs: number
} {
  const words = text.trim() ? text.trim().split(/\s+/).length : 0
  const characters = text.length
  const charactersNoSpaces = text.replace(/\s/g, "").length
  const sentences = text.trim() ? text.split(/[.!?]+/).filter(Boolean).length : 0
  const paragraphs = text.trim() ? text.split(/\n\s*\n/).filter(Boolean).length : 0

  return { words, characters, charactersNoSpaces, sentences, paragraphs }
}

export function convertCase(text: string, caseType: string): string {
  switch (caseType) {
    case "uppercase":
      return text.toUpperCase()
    case "lowercase":
      return text.toLowerCase()
    case "titlecase":
      return text.replace(/\w\S*/g, (txt) =>
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      )
    case "sentencecase":
      return text.toLowerCase().replace(/(^")|(\.\s+)([a-z])/g, (match) =>
        match.toUpperCase()
      )
    case "camelcase":
      return text
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
    case "snakecase":
      return text
        .toLowerCase()
        .replace(/\s+/g, "_")
        .replace(/[^a-z0-9_]/g, "")
    case "kebabcase":
      return text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
    default:
      return text
  }
}

export function generatePassword(
  length: number,
  includeUppercase: boolean,
  includeLowercase: boolean,
  includeNumbers: boolean,
  includeSymbols: boolean
): string {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowercase = "abcdefghijklmnopqrstuvwxyz"
  const numbers = "0123456789"
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?"

  let chars = ""
  if (includeUppercase) chars += uppercase
  if (includeLowercase) chars += lowercase
  if (includeNumbers) chars += numbers
  if (includeSymbols) chars += symbols

  if (chars === "") return ""

  let password = ""
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return password
}

export const caseTypes = [
  { value: "uppercase", label: "UPPERCASE" },
  { value: "lowercase", label: "lowercase" },
  { value: "titlecase", label: "Title Case" },
  { value: "sentencecase", label: "Sentence case" },
  { value: "camelcase", label: "camelCase" },
  { value: "snakecase", label: "snake_case" },
  { value: "kebabcase", label: "kebab-case" },
]
