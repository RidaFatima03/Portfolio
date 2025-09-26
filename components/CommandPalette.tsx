'use client'

import { useEffect, useRef, useState } from 'react'

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const itemsRef = useRef<Array<{label: string, action: () => void}>>([])
  const [items, setItems] = useState<typeof itemsRef.current>([])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const isCmdK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k'
      if (isCmdK) { e.preventDefault(); setOpen(v => !v) }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    itemsRef.current = [
      { label: 'Home', action: () => document.getElementById('home')?.scrollIntoView({behavior:'smooth'}) },
      { label: 'Projects', action: () => document.getElementById('projects')?.scrollIntoView({behavior:'smooth'}) },
      { label: 'About', action: () => document.getElementById('about')?.scrollIntoView({behavior:'smooth'}) },
      { label: 'Contact', action: () => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'}) },
    ]
    setItems(itemsRef.current)
  }, [])

  useEffect(() => {
    if (!open) return
    // index project cards
    document.querySelectorAll<HTMLHeadingElement>('.project-card-title').forEach(h3 => {
      const label = `Open: ${h3.textContent ?? ''}`
      itemsRef.current.push({ label, action: () => h3.scrollIntoView({behavior:'smooth'}) })
    })
    setItems([...itemsRef.current])
  }, [open])

  const filtered = items.filter(i => i.label.toLowerCase().includes(query.toLowerCase()))

  return open ? (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/50 p-4" onClick={() => setOpen(false)}>
      <div className="w-full max-w-2xl rounded-2xl border border-border bg-bg-elev p-3 shadow-soft" onClick={e => e.stopPropagation()}>
        <input value={query} onChange={e => setQuery(e.target.value)} autoFocus placeholder="Type to jump — try ‘projects’, ‘about’…" className="w-full rounded-xl border border-border bg-bg px-3 py-2 font-mono" />
        <ul className="mt-2 max-h-[50vh] overflow-auto">
          {filtered.map((it, i) => (
            <li key={i} className="rounded-xl border border-transparent hover:border-border px-3 py-2 cursor-pointer" onClick={() => { it.action(); setOpen(false) }}>{it.label}</li>
          ))}
        </ul>
        <div className="flex justify-end mt-2"><button onClick={() => setOpen(false)} className="px-3 py-2 rounded-xl border border-border text-sm">close</button></div>
      </div>
    </div>
  ) : null
}
