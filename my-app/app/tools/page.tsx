import { Metadata } from "next"
import { TOOLS, TOOL_CATEGORIES, BRAND_NAME } from "@/lib/constants"
import { ToolCard } from "../components/tools/ToolCard"
import { generateSEOMetadata } from "@/lib/seo"

export const metadata: Metadata = generateSEOMetadata({
  title: `All AI Tools | ${BRAND_NAME}`,
  description: "Browse all 15+ free AI-powered tools for Instagram, YouTube, resumes, and more. No login required.",
  keywords: ["AI tools", "free tools", "Instagram tools", "YouTube tools", "resume tools"],
})

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            All AI Tools
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Discover our complete collection of free AI-powered tools to help you create, optimize, and grow.
          </p>
        </div>
      </div>

      {/* Tools by Category */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {TOOL_CATEGORIES.map((category) => {
            const categoryTools = TOOLS.filter((tool) => tool.category === category.id)
            return (
              <section key={category.id} id={category.id}>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">{category.name}</h2>
                  <p className="text-slate-600">{category.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
