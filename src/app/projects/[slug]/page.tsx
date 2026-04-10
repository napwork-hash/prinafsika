import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/app/projects/data/projects'

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((entry) => entry.slug === params.slug)

  if (!project) {
    return notFound()
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-900 p-7 lg:ml-64">
      <div className="flex w-full max-w-4xl flex-col gap-4 py-3">
        <Link href="/projects" className="w-fit rounded-lg border border-purple-500 px-4 py-2 text-sm text-purple-200 transition hover:bg-purple-500/10">
          Back to projects
        </Link>
        <h2 className="text-center text-3xl font-bold text-purple-500">{project.name}</h2>
      </div>

      <p className="max-w-2xl pt-3 text-justify text-white">{project.description}</p>

      <div className="flex flex-col">
        <h3 className="pb-2 pt-5 text-2xl font-bold text-purple-500">Tech Stack</h3>
        <ul className="list-disc self-start text-white">
          {project.tech_stack?.map((tech) => (
            <li className="list-outside" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 w-full max-w-4xl rounded-lg border-2 border-purple-500 p-5 shadow-lg shadow-purple-500">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {project.photo.map((photo) => (
            <div key={photo} className="relative flex justify-center">
              <Link href={photo} target="_blank">
                <Image src={photo} alt={project.name} width={800} height={600} sizes="(max-width: 768px) 100vw, 50vw" className="rounded-lg border-2 border-indigo-500 transition hover:scale-[1.02]" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
