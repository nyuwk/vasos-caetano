// Desenhos de natureza usados como decoração de fundo (traço simples, sem texto)
const traco = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function Planta({ className = '' }) {
  return (
    <svg viewBox="0 0 100 120" className={className} aria-hidden="true" {...traco}>
      <path d="M50 70 V30" />
      <path d="M50 55 C30 55 20 42 20 28 C36 28 48 38 50 55Z" />
      <path d="M50 45 C70 45 80 32 80 18 C64 18 52 28 50 45Z" />
      <path d="M26 70 H74 L68 108 H32 Z" />
      <path d="M22 70 H78" />
    </svg>
  )
}

export function Flor({ className = '' }) {
  return (
    <svg viewBox="0 0 100 120" className={className} aria-hidden="true" {...traco}>
      <circle cx="50" cy="32" r="8" />
      <path d="M50 24 C42 8 58 8 50 24Z M58 32 C74 24 74 40 58 32Z M50 40 C58 56 42 56 50 40Z M42 32 C26 40 26 24 42 32Z" />
      <path d="M50 40 V108" />
      <path d="M50 80 C36 80 30 70 30 62 C42 62 50 68 50 80Z" />
    </svg>
  )
}

export function Vaso({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" {...traco}>
      <path d="M22 34 H78 L70 88 H30 Z" />
      <path d="M18 34 H82 V44 H18 Z" />
      <path d="M34 54 H66 M36 66 H64" />
    </svg>
  )
}

export function Folhas({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" {...traco}>
      <path d="M20 90 C20 50 40 24 80 14 C84 54 60 84 20 90Z" />
      <path d="M20 90 C36 64 52 44 72 26" />
    </svg>
  )
}
