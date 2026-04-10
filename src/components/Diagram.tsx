import { projects } from '@/app/projects/data/projects'

const techStackCount: Record<string, number> = {}

projects.forEach((project) => {
  if (!Array.isArray(project.tags)) {
    return
  }

  project.tags.forEach((tech) => {
    techStackCount[tech] = (techStackCount[tech] || 0) + 1
  })
})

const data = Object.entries(techStackCount)
  .map(([name, value]) => ({ name, value }))
  .sort((a, b) => b.value - a.value)

const total = data[0]?.value ?? 1

const Diagram = () => {
  return (
    <div className="w-full max-w-3xl space-y-4 px-4">
      {data.map((entry) => (
        <div key={entry.name} className="space-y-2">
          <div className="flex items-center justify-between gap-4 text-sm text-white">
            <span className="font-medium">{entry.name}</span>
            <span className="text-zinc-400">{entry.value} projects</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-fuchsia-500" style={{ width: `${(entry.value / total) * 100}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Diagram
