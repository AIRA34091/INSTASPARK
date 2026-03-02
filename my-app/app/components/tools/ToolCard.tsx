import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Tool } from "@/types"
import * as Icons from "lucide-react"

interface ToolCardProps {
  tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  // Dynamically get the icon component
  const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[tool.icon] || Icons.Circle

  return (
    <Link
      href={tool.path}
      className="group relative flex flex-col rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-brand-primary/20 transition-all duration-300 tool-card"
    >
      {/* Badge */}
      {(tool.popular || tool.new) && (
        <div className="absolute top-4 right-4">
          {tool.new && (
            <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
              <Sparkles className="h-3 w-3" />
              New
            </span>
          )}
          {tool.popular && !tool.new && (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
              Popular
            </span>
          )}
        </div>
      )}

      {/* Icon */}
      <div className="mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 flex items-center justify-center group-hover:from-brand-primary/20 group-hover:to-brand-secondary/20 transition-colors">
        <IconComponent className="h-6 w-6 text-brand-primary" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-brand-primary transition-colors">
        {tool.name}
      </h3>
      <p className="text-sm text-slate-600 mb-4 flex-1">
        {tool.description}
      </p>

      {/* CTA */}
      <div className="flex items-center gap-2 text-sm font-medium text-brand-primary">
        Try Now
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  )
}
