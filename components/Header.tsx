'use client'

export function Header() {
  const onJump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    // fixed: always visible, full-width; high z-index to sit above blobs
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container">
        <div className="mt-3 h-14 flex items-center justify-between rounded-full border border-border/80 bg-bg/70 backdrop-blur supports-[backdrop-filter]:bg-bg/60 px-2 shadow-soft">
          <a href="#home" className="flex items-center gap-2 rounded-full px-3 py-2">
            <svg width="22" height="22" viewBox="0 0 64 64" className="opacity-80">
              <defs>
                <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                  <stop stopColor="#9aa7ff"/><stop offset="1" stopColor="#1bb2ce"/>
                </linearGradient>
              </defs>
              <rect width="64" height="64" rx="16" fill="url(#g)" opacity=".25"/>
              <path d="M18 32c0-7.7 6.3-14 14-14s14 6.3 14 14-6.3 14-14 14" stroke="url(#g)" strokeWidth="4" strokeLinecap="round"/>
              <path d="M18 32c0 4.4 3.6 8 8 8h6" stroke="url(#g)" strokeWidth="4" strokeLinecap="round"/>
            </svg>
            <span className="font-mono text-sm">rida<span className="text-muted">/</span>portfolio</span>
          </a>

          <nav className="flex items-center gap-1">
            <button onClick={() => onJump('projects')} className="px-3 py-2 rounded-full border border-transparent hover:border-border text-sm font-mono">projects</button>
            <button onClick={() => onJump('about')} className="px-3 py-2 rounded-full border border-transparent hover:border-border text-sm font-mono">about</button>
            <button onClick={() => onJump('contact')} className="px-3 py-2 rounded-full border border-transparent hover:border-border text-sm font-mono">contact</button>
          </nav>
        </div>
      </div>
    </header>
  )
}
