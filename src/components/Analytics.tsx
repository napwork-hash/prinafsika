'use client'

import { useEffect } from 'react'

const CLARITY_ID = 'sxm04v3j0c'
const HOTJAR_ID = 6495774
const HOTJAR_SV = 6

export default function Analytics() {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') return

    const gpc = (navigator as any).globalPrivacyControl === true
    const dnt = (navigator as any).doNotTrack === '1' || (window as any).doNotTrack === '1' || (navigator as any).msDoNotTrack === '1'

    if (gpc || dnt || (window as any).__PORTFOLIO_ANALYTICS_LOADED__) {
      if (gpc || dnt) {
        console.debug('Analytics disabled due to privacy settings')
      }
      return
    }

    const appendScript = (id: string, src: string) => {
      if (document.getElementById(id)) return

      const script = document.createElement('script')
      script.id = id
      script.async = true
      script.src = src
      script.onerror = () => console.debug(`${id} blocked by client`)
      document.body.appendChild(script)
    }

    appendScript('hotjar-src', `https://static.hotjar.com/c/hotjar-${HOTJAR_ID}.js?sv=${HOTJAR_SV}`)
    appendScript('clarity-src', `https://www.clarity.ms/tag/${CLARITY_ID}`)
    ;(window as any).__PORTFOLIO_ANALYTICS_LOADED__ = true
  }, [])

  return null
}
