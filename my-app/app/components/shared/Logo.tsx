import Link from "next/link"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
}

export function Logo({ size = "md", showText = false }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  }

  const textSizes = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl",
  }

  return (
    <Link href="/" className="flex items-center gap-2">
      <div
        className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent flex items-center justify-center shadow-lg`}
      >
        <span className="text-white font-bold text-lg">
          I
        </span>
      </div>
      {showText && (
        <span className={`${textSizes[size]} font-bold gradient-text`}>
          InstaSpark
        </span>
      )}
    </Link>
  )
}
