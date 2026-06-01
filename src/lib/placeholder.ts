const PALETTES: Record<string, [string, string]> = {
  template: ['#2563EB', '#1D4ED8'],
  service: ['#7C3AED', '#5B21B6'],
  umkm: ['#0D9488', '#047857'],
}

function escapeXml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function productPreview(name: string, category: string): string {
  const [c1, c2] = PALETTES[category] || PALETTES.template
  const safe = escapeXml(name)

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
    <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="rgba(255,255,255,0.15)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" rx="12" fill="#1E293B"/>
  <rect x="1" y="1" width="798" height="498" rx="11" fill="url(#bg)"/>
  <rect x="1" y="1" width="798" height="40" rx="11" fill="rgba(255,255,255,0.95)"/>
  <rect x="1" y="29" width="798" height="12" fill="rgba(255,255,255,0.95)"/>
  <circle cx="20" cy="20" r="5" fill="#EF4444"/>
  <circle cx="36" cy="20" r="5" fill="#EAB308"/>
  <circle cx="52" cy="20" r="5" fill="#22C55E"/>
  <rect x="90" y="13" width="300" height="16" rx="8" fill="#E2E8F0"/>
  <text x="240" y="25" font-family="Arial,sans-serif" font-size="9" fill="#64748B" text-anchor="middle">localhost:3000</text>
  <rect x="0" y="40" width="800" height="460"/>
  <rect x="0" y="40" width="800" height="460" fill="url(#glow)"/>
  <g opacity="0.08">
    <rect x="100" y="100" width="180" height="120" rx="8" fill="rgba(255,255,255,0.3)"/>
    <rect x="120" y="115" width="140" height="6" rx="3" fill="rgba(255,255,255,0.3)"/>
    <rect x="120" y="128" width="100" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
    <rect x="120" y="141" width="120" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
    <rect x="520" y="100" width="180" height="120" rx="8" fill="rgba(255,255,255,0.3)"/>
    <rect x="540" y="115" width="140" height="6" rx="3" fill="rgba(255,255,255,0.3)"/>
    <rect x="540" y="128" width="100" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
    <rect x="540" y="141" width="120" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
    <rect x="200" y="280" width="400" height="100" rx="8" fill="rgba(255,255,255,0.3)"/>
    <rect x="220" y="295" width="360" height="8" rx="4" fill="rgba(255,255,255,0.3)"/>
    <rect x="220" y="312" width="300" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
    <rect x="220" y="329" width="340" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
  </g>
  <text x="400" y="260" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="32" font-weight="700" fill="white" text-anchor="middle" dominant-baseline="middle">${safe}</text>
  <rect x="320" y="340" width="160" height="40" rx="20" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
  <text x="400" y="366" font-family="Arial,sans-serif" font-size="13" font-weight="600" fill="white" text-anchor="middle" dominant-baseline="middle">Lihat Detail</text>
</svg>`

  return `data:image/svg+xml;base64,${Buffer.from(svg, 'utf-8').toString('base64')}`
}
