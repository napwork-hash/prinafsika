'use client'

import { Details } from '@/components/Details'
import { XMarkIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

const items = [
  { title: 'Hobby', content: 'Gaming, Coding, Cooking, and sometime need relax on the beach or mountain.' },
  { title: 'Personalities', content: '(INTJ-T) with 65% Introvert, 57% Visioner, 53% Rasional, 82% Perencanaan, 57% Waspada. Tested by 16personalities.com' },
  { title: 'Favorite Color', content: 'I love black and navy, but I also like white and purple.' },
  { title: 'Currently Learning', content: 'For Web Development learn Next.js, React.js, Tailwind CSS, and Database. I am also learning Cyber Security and DevOps.' },
]

function About() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-zinc-900 p-10 lg:ml-64 lg:p-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_25%),radial-gradient(circle_at_bottom,rgba(131,80,232,0.2),transparent_35%)]" />
      <h2 className="z-10 text-3xl font-bold text-purple-500">About me!</h2>
      <p className="z-10 pt-3 italic text-white">&quot;The only source of knowledge is experience&quot;</p>
      <div className="z-10 overflow-hidden">
        <div className="flex min-h-screen px-8 pt-20 md:px-0">
          <Details className="mx-auto max-w-2xl">
            {items.map((item, index) => (
              <Details.Item key={index} className="group border-b border-white/10">
                {({ isActive, toggle }: { isActive: boolean; toggle: () => void }) => (
                  <>
                    <div className="flex cursor-pointer items-center py-4 pr-4" onClick={toggle}>
                      <div className="text-base text-slate-400/75 transition group-hover:text-white group-hover:drop-shadow-xl">{item.title}</div>
                      <div className="relative ml-auto">
                        <XMarkIcon className={clsx({ 'rotate-180': isActive, 'rotate-45': !isActive }, 'h-6 w-6 text-white/50 transition-transform duration-500')} />
                      </div>
                    </div>
                    <Details.Content className="overflow-hidden transition-all duration-500 will-change-[height]">
                      <p className="space-y-3 pb-4 leading-relaxed text-[--tw-prose-body] text-indigo-500">{item.content}</p>
                    </Details.Content>
                  </>
                )}
              </Details.Item>
            ))}
          </Details>
        </div>
      </div>
    </div>
  )
}

export default About
