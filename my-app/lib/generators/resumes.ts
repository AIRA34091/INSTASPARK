const headlineTemplates: Record<string, string[]> = {
  experienced: [
    "Results-Driven {role} with {years}+ Years of Experience",
    "Senior {role} Specializing in {skill}",
    "Award-Winning {role} | {skill} Expert",
    "Strategic {role} with Proven Track Record in {skill}",
    "Innovative {role} Transforming {industry}",
  ],
  entry: [
    "Motivated {role} Graduate with {skill} Skills",
    "Ambitious {role} Ready to Make an Impact",
    "Detail-Oriented {role} with Strong {skill} Foundation",
    "Enthusiastic {role} Eager to Contribute",
    "Recent Graduate in {field} Seeking {role} Opportunities",
  ],
  creative: [
    "Creative {role} Crafting Exceptional {deliverable}",
    "Visionary {role} | {skill} Specialist",
    "Passionate {role} Bringing Ideas to Life",
    "Artistic {role} with Unique Approach to {skill}",
    "Dynamic {role} Driving Innovation in {industry}",
  ],
  technical: [
    "Full-Stack {role} | {skill} & {skill2}",
    "Certified {role} with Expertise in {skill}",
    "Technical {role} Specializing in {skill}",
    "Skilled {role} Proficient in {skill} & {skill2}",
    "{role} | {skill} Developer & Problem Solver",
  ],
}

const summaryTemplates: Record<string, string[]> = {
  experienced: [
    "Results-driven professional with over {years} years of experience in {field}. Proven track record of {achievement}. Expert in {skill} and {skill2} with a passion for driving business growth.",
    "Seasoned {role} with extensive experience in {industry}. Demonstrated success in {achievement}. Strong expertise in {skill} with excellent leadership abilities.",
  ],
  entry: [
    "Recent graduate with a degree in {field} and hands-on experience in {skill}. Eager to apply academic knowledge and internship experience to contribute to a dynamic team.",
    "Motivated {role} with strong foundation in {skill} and {skill2}. Quick learner with excellent problem-solving abilities seeking opportunities to grow and contribute.",
  ],
  careerChange: [
    "Professional transitioning from {previousField} to {newField}. Bringing {years} years of transferable skills in {skill} and {skill2}. Proven ability to adapt and excel in new environments.",
    "Diverse professional background with experience in {previousField} now pursuing opportunities in {newField}. Strong foundation in {skill} with unique perspective and fresh insights.",
  ],
}

export function generateResumeHeadline(
  role: string,
  experience: string,
  skill: string,
  count: number = 3
): string[] {
  const templates = headlineTemplates[experience] || headlineTemplates.experienced
  const years = Math.floor(Math.random() * 8) + 3
  const skills = ["Leadership", "Strategy", "Analytics", "Communication", "Project Management"]
  const skill2 = skills[Math.floor(Math.random() * skills.length)]
  
  return templates.slice(0, count).map((template) =>
    template
      .replace(/{role}/g, role)
      .replace(/{years}/g, years.toString())
      .replace(/{skill}/g, skill)
      .replace(/{skill2}/g, skill2)
      .replace(/{industry}/g, "Technology")
      .replace(/{field}/g, "Business")
      .replace(/{deliverable}/g, "Solutions")
  )
}

export function generateProfessionalSummary(
  role: string,
  experience: string,
  field: string,
  count: number = 2
): string[] {
  const templates = summaryTemplates[experience] || summaryTemplates.experienced
  const years = Math.floor(Math.random() * 8) + 2
  const skills = ["strategic planning", "team leadership", "data analysis", "project management"]
  
  return templates.slice(0, count).map((template) =>
    template
      .replace(/{role}/g, role)
      .replace(/{years}/g, years.toString())
      .replace(/{field}/g, field)
      .replace(/{skill}/g, skills[0])
      .replace(/{skill2}/g, skills[1])
      .replace(/{achievement}/g, "increasing revenue by 150%")
      .replace(/{industry}/g, field)
      .replace(/{previousField}/g, "Sales")
      .replace(/{newField}/g, field)
  )
}

export function generateLinkedInBio(
  role: string,
  industry: string,
  count: number = 3
): string[] {
  const bios = [
    `Passionate ${role} dedicated to driving innovation in the ${industry} industry. Let's connect and explore how we can collaborate to create meaningful impact.`,
    `${role} with expertise in ${industry}. Committed to excellence and continuous learning. Open to new opportunities and meaningful professional connections.`,
    `Results-oriented ${role} helping organizations achieve their goals in ${industry}. Believer in the power of collaboration and innovation. Let's connect!`,
  ]
  return bios.slice(0, count)
}

export function generateFresherBio(
  field: string,
  count: number = 3
): string[] {
  const bios = [
    `Recent ${field} graduate with strong academic foundation and internship experience. Eager to apply theoretical knowledge in practical settings and contribute to organizational success.`,
    `Enthusiastic ${field} fresher with excellent problem-solving skills and a passion for continuous learning. Seeking opportunities to grow and make meaningful contributions.`,
    `Motivated ${field} graduate with hands-on project experience and strong technical skills. Ready to bring fresh perspectives and dedication to a dynamic team.`,
  ]
  return bios.slice(0, count)
}

export const experienceLevels = [
  { value: "experienced", label: "Experienced Professional" },
  { value: "entry", label: "Entry Level / Fresher" },
  { value: "creative", label: "Creative Professional" },
  { value: "technical", label: "Technical Role" },
  { value: "careerChange", label: "Career Change" },
]
