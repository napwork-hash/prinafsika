'use client'

import { useEffect, useRef } from 'react'

const GlowingCursor = () => {
  const cursorRef = useRef(null)

  useEffect(() => {
    if (!cursorRef.current) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const cursor = cursorRef.current
    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const current = { ...pointer }
    let animationFrame = 0

    const render = () => {
      current.x += (pointer.x - current.x) * 0.14
      current.y += (pointer.y - current.y) * 0.14
      cursor.style.left = `${current.x}px`
      cursor.style.top = `${current.y}px`
      animationFrame = window.requestAnimationFrame(render)
    }

    const moveCursor = (event) => {
      pointer.x = event.clientX
      pointer.y = event.clientY
    }

    animationFrame = window.requestAnimationFrame(render)
    window.addEventListener('pointermove', moveCursor, { passive: true })

    return () => {
      window.removeEventListener('pointermove', moveCursor)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return <div ref={cursorRef} className="cursor-glow hidden lg:block" />
}

export default GlowingCursor
