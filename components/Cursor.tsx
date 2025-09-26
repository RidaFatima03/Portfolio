'use client'

import { useEffect, useRef } from 'react'

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const c = ref.current!
    let x = window.innerWidth/2, y = window.innerHeight/2, tx = x, ty = y
    const speed = 0.2
    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY }
    window.addEventListener('mousemove', move)
    let raf = 0
    const loop = () => { x += (tx - x) * speed; y += (ty - y) * speed; c.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`; raf = requestAnimationFrame(loop) }
    loop()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', move) }
  }, [])

  return <div ref={ref} className="cursor" aria-hidden="true" />
}
