import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx,json}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-elev': 'var(--bg-elev)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        'accent-2': 'var(--accent-2)',
        card: 'var(--card)',
        border: 'var(--border)',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.35)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      fontFamily: {
        grotesk: ['var(--font-grotesk)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [],
}
export default config
