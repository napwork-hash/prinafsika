'use client'

import { useEffect, useState } from 'react'

const messages = ['Hello World!', 'My name is Prinafsika']

export default function HeroTypewriter() {
  const [text, setText] = useState(messages[0])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(messages[1])
      return
    }

    let timer: ReturnType<typeof setTimeout> | undefined
    let messageIndex = 0
    let charIndex = 0
    let isDeleting = false

    const tick = () => {
      const current = messages[messageIndex]

      charIndex = isDeleting ? Math.max(0, charIndex - 1) : Math.min(current.length, charIndex + 1)
      setText(current.slice(0, charIndex))

      if (!isDeleting && charIndex === current.length) {
        timer = setTimeout(() => {
          isDeleting = true
          tick()
        }, 1800)
        return
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false
        messageIndex = (messageIndex + 1) % messages.length
      }

      timer = setTimeout(tick, isDeleting ? 45 : 90)
    }

    setText('')
    timer = setTimeout(tick, 250)

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [])

  return (
    <span className="inline-flex min-h-10 items-center">
      {text}
      <span className="ml-1 inline-block h-8 w-px animate-pulse bg-current" aria-hidden="true" />
    </span>
  )
}
