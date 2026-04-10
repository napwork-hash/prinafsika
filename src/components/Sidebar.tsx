'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/certificates', label: 'Certificates' },
  { href: '/blog', label: 'Blog' },
  { href: '/cv', label: 'Download CV' },
]

const Sidebar = () => {
  const year = new Date().getFullYear()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button className="fixed left-0 top-0 z-30 p-2 pt-7 lg:hidden" onClick={toggleSidebar} aria-label="Toggle navigation">
        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />}
        </svg>
      </button>
      <div
        className={`fixed z-20 flex h-full w-64 flex-col items-center justify-start rounded-2xl border-2 border-indigo-500 bg-zinc-900 text-white transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div>
          <h2 className="relative flex h-auto w-fit items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text py-5 text-2xl font-extrabold text-transparent">
            <Link href="/">Nap Menu</Link>
          </h2>
        </div>
        <hr className="led-running-border w-full border-t border-blue-500" />
        <nav className="flex flex-grow flex-col justify-center gap-2 px-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl border px-4 py-3 text-center transition ${
                  isActive ? 'border-indigo-400 bg-indigo-500/10 text-indigo-200' : 'border-transparent bg-transparent text-white hover:border-white/15 hover:bg-white/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        <hr className="led-running-border w-full border-t border-purple-500" />
        <Link href="https://github.com/Naffsisky" target="_blank" className="py-3 hover:text-purple-500 hover:underline">
          <div className="grid grid-cols-5 items-center">
            <p />
            <span className="col-span-1 flex justify-center">
              <FaGithub />
            </span>
            <span className="col-span-1">Github</span>
          </div>
        </Link>
        <Link href="https://linkedin.com/in/prinafsika/" target="_blank" className="py-3 hover:text-purple-500 hover:underline">
          <div className="grid grid-cols-5 items-center">
            <p />
            <span className="col-span-1 flex justify-center">
              <FaLinkedinIn />
            </span>
            <span className="col-span-1">LinkedIn</span>
          </div>
        </Link>
        <Link href="https://www.instagram.com/naffsvn/" target="_blank" className="py-3 hover:text-purple-500 hover:underline">
          <div className="grid grid-cols-5 items-center">
            <p />
            <span className="col-span-1 flex justify-center">
              <RiInstagramFill />
            </span>
            <span className="col-span-1">Instagram</span>
          </div>
        </Link>
        <hr className="led-running-border w-full border-t border-purple-500" />
        <p className="py-3 text-center">Copyright &copy; {year}</p>
      </div>
    </div>
  )
}

export default Sidebar
