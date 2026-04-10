import HeroTypewriter from '@/components/HeroTypewriter'
import Photos from '@/components/Photos'
import Marquee from '@/components/Marquee'
import Experience from '@/components/Experience'
import TechLogo from '@/components/TechLogo'
import Education from '@/components/Education'
import Diagram from '@/components/Diagram'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 lg:ml-64">
      <section className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22),transparent_28%),radial-gradient(circle_at_bottom,rgba(131,80,232,0.28),transparent_35%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_65%)]" />

        <div className="w-full max-w-4xl rounded-3xl border border-indigo-500/40 bg-zinc-900/80 p-8 shadow-2xl shadow-indigo-950 backdrop-blur sm:p-10">
          <div className="text-center text-xl font-bold text-purple-400 sm:text-3xl">
            <HeroTypewriter />
          </div>

          <div className="mx-auto mt-16 max-w-2xl text-center text-3xl text-white sm:text-5xl">
            <span className="text-indigo-200">I&apos;m a</span> <span className="text-indigo-500">Software Engineer</span>
            <br />
            <span>and a</span> <span className="text-[#8350e8]">Cloud Solutions Architect.</span>
          </div>

          <div className="relative mt-12 h-56 overflow-hidden [mask-image:radial-gradient(60%_70%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,rgba(131,80,232,0.45),transparent_60%)] after:absolute after:inset-x-[-20%] after:bottom-0 after:h-40 after:rounded-[100%] after:border-t after:border-indigo-400/20 after:bg-zinc-900" />
        </div>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="18181B"
          fillOpacity="1"
          d="M0,320L40,288C80,256,160,192,240,138.7C320,85,400,43,480,69.3C560,96,640,192,720,202.7C800,213,880,139,960,138.7C1040,139,1120,213,1200,218.7C1280,224,1360,160,1400,128L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        />
      </svg>

      <section className="lg:px-20">
        <div className="flex flex-col items-center justify-center pb-5">
          <span className="absolute box-content flex border bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text py-4 text-center text-5xl font-extrabold text-transparent blur-xl select-none">
            Introduction
          </span>
          <h1 className="flex items-center justify-center bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text py-4 text-center text-5xl font-extrabold text-transparent">
            Introduction
          </h1>
        </div>
        <div className="rounded-lg border-2 border-blue-500 bg-slate-900">
          <div className="p-3">
            <h3 className="text-center text-2xl font-bold text-indigo-500">SUMMARY</h3>
            <p className="py-3 text-justify text-white">
              As a Computer Science graduate from National Veteran Development University East Java, I specialize in software engineering, cloud computing, and system administration. Passionate about designing, deploying, and managing
              scalable software solutions and cloud-based infrastructure, I&apos;m committed to delivering efficient, reliable, and secure systems.
            </p>
          </div>
        </div>
      </section>

      <section className="lg:px-20">
        <div className="py-5">
          <h3 className="pb-5 text-center text-2xl font-bold text-indigo-500">EXPERIENCE</h3>
          <div className="px-3">
            <Experience />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-between px-3 py-5">
        <h2 className="pb-2 text-2xl font-bold text-indigo-500">EDUCATION</h2>
        <Education />
      </section>

      <section className="flex flex-col items-center justify-between px-3 py-5">
        <h2 className="pb-2 text-2xl font-bold text-indigo-500">GALLERY</h2>
        <p className="pb-5 text-sm text-white">Swipe left!</p>
        <Photos />
      </section>

      <section className="flex flex-col items-center justify-between px-3 py-5">
        <h2 className="pb-5 text-2xl font-bold text-indigo-500">LEARNING COMPANY</h2>
        <Marquee />
      </section>

      <section className="flex flex-col items-center justify-between px-3 py-5">
        <h2 className="pb-5 text-2xl font-bold text-indigo-500">TECH STACK</h2>
        <TechLogo />
      </section>

      <section className="pb-5 lg:px-20">
        <div className="rounded-lg border-2 border-blue-500 bg-slate-900 shadow-lg shadow-blue-500">
          <div className="flex flex-col items-center justify-between py-3">
            <Link href="/projects" className="pb-3 text-2xl font-bold text-indigo-500">
              Data from <span className="text-purple-500 underline">Projects</span>
            </Link>
            <Diagram />
          </div>
        </div>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="18181B"
          fillOpacity="1"
          d="M0,64L48,53.3C96,43,192,21,288,21.3C384,21,480,43,576,69.3C672,96,768,128,864,128C960,128,1056,96,1152,69.3C1248,43,1344,21,1392,10.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      <section className="bg-black pb-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl text-zinc-500">This website made with</h1>

          <div className="flex gap-3 py-5">
            <Image alt="typescript" src="https://skillicons.dev/icons?i=typescript" width={40} height={40} className="h-10 w-10 rounded-full" />
            <Image alt="nextjs" src="https://skillicons.dev/icons?i=nextjs" width={40} height={40} className="h-10 w-10 rounded-full" />
            <Image alt="tailwind" src="https://skillicons.dev/icons?i=tailwind" width={40} height={40} className="h-10 w-10 rounded-full" />
            <Image alt="docker" src="https://skillicons.dev/icons?i=docker" width={40} height={40} className="h-10 w-10 rounded-full" />
          </div>
        </div>
      </section>
    </main>
  )
}
