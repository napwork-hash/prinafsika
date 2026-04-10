'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LoadingAnimation from '@/components/AnimationLoading'
import { projects, tagColors } from '@/app/projects/data/projects'

const categories: string[] = ['All', ...Array.from(new Set(projects.flatMap((project) => project.tags)))]

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [visibleCount, setVisibleCount] = useState(5)
  const [loadingImages, setLoadingImages] = useState<Record<number, boolean>>(
    projects.reduce((acc, project) => {
      acc[project.id] = true
      return acc
    }, {} as Record<number, boolean>)
  )

  const filteredProjects = selectedCategory === 'All' ? projects : projects.filter((project) => project.tags.includes(selectedCategory))
  const visibleProjects = filteredProjects.slice(0, visibleCount)

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-zinc-900 p-7 lg:ml-64 lg:p-24">
      <h2 className="pb-5 text-3xl font-bold text-purple-500">Projects</h2>
      <div className="py-5">
        <section>
          <div className="flex flex-wrap items-center justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setVisibleCount(5)
                }}
                className={`mb-3 me-3 rounded-full border px-5 py-2.5 text-center text-base font-medium text-white focus:outline-none focus:ring-4 focus:ring-gray-300 ${
                  tagColors[category] || 'border-neutral-500 bg-neutral-400'
                } ${selectedCategory === category ? 'ring-2 ring-white' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>
        <div className="my-10 text-center">
          <p className="text-sm text-white">
            Some project can be live preview in here{' '}
            <Link href="https://live.webinap.com" className="font-semibold text-purple-500 underline">
              Demo Project!
            </Link>
          </p>
        </div>
        <section className="mt-10">
          <div className="grid gap-6">
            {visibleProjects.map((project) => (
              <article key={project.id} className="flex flex-col items-center rounded-2xl border-2 border-violet-500 bg-zinc-800 p-3 md:flex-row">
                <div className="relative w-full overflow-hidden rounded-xl md:w-[400px]">
                  {loadingImages[project.id] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
                      <LoadingAnimation />
                    </div>
                  )}
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={240}
                    sizes="(max-width: 768px) 100vw, 400px"
                    className={`h-auto w-full rounded-xl border border-white/15 object-cover transition-opacity ${loadingImages[project.id] ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => setLoadingImages((prev) => ({ ...prev, [project.id]: false }))}
                    onError={() => setLoadingImages((prev) => ({ ...prev, [project.id]: false }))}
                  />
                </div>

                <div className="mt-4 flex flex-1 flex-col text-center md:ml-4 md:mt-0 md:text-left">
                  <h3 className="text-lg font-bold text-white">{project.name}</h3>

                  <div className="mt-2 flex flex-wrap justify-center gap-2 md:justify-start">
                    {project.tags.map((tag, index) => (
                      <span key={index} className={`rounded-full border px-3 py-1 text-sm text-white ${tagColors[tag] || 'border-gray-500 bg-gray-400'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={`/projects/${project.slug}`} className="mt-3 text-sm text-violet-400 hover:underline">
                    View project &gt;
                  </Link>
                </div>
              </article>
            ))}
          </div>
          {visibleCount < filteredProjects.length && (
            <div className="mt-6 flex justify-center">
              <button onClick={() => setVisibleCount((count) => count + 5)} className="rounded-lg bg-purple-500 px-5 py-2 text-white transition hover:bg-purple-700">
                Load More
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default Projects
