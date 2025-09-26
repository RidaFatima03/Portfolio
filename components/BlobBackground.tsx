'use client'

import { useEffect } from 'react'
import { gsapSetup } from '@/lib/gsap'

export function BlobBackground() {
  useEffect(() => {
    gsapSetup().then(({ gsap }) => {
      gsap.to('.blob', { yPercent: 10, xPercent: -6, duration: 10, yoyo: true, repeat: -1, ease: 'sine.inOut', stagger: 0.4 })
    })
  }, [])

  return (
    <div className="decor" aria-hidden="true">
      <div className="blob b1"></div>
      <div className="blob b2"></div>
      <div className="blob b3"></div>
      <div className="blob b4"></div>
    </div>
  )
}
