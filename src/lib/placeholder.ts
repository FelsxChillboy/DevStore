const PALETTES: Record<string, [string, string, string]> = {
  template: ['#2563EB', '#1D4ED8', '#DBEAFE'],
  service: ['#7C3AED', '#5B21B6', '#EDE9FE'],
  umkm: ['#0D9488', '#047857', '#D1FAE5'],
}

function escapeXml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function browserChrome(): string {
  return `<rect width="800" height="500" rx="12" fill="#0F172A"/>
<rect x="1" y="1" width="798" height="38" rx="11" fill="#FFFFFF"/>
<rect x="1" y="27" width="798" height="12" fill="#FFFFFF"/>
<circle cx="20" cy="19" r="4.5" fill="#EF4444"/>
<circle cx="36" cy="19" r="4.5" fill="#EAB308"/>
<circle cx="52" cy="19" r="4.5" fill="#22C55E"/>
<rect x="90" y="12" width="240" height="14" rx="7" fill="#F1F5F9"/>
<rect x="102" y="15" width="16" height="8" rx="4" fill="#CBD5E1"/>
<text x="220" y="22" font-family="Arial,sans-serif" font-size="8" fill="#94A3B8" text-anchor="middle">devstore.app</text>`
}

function rect(x: number, y: number, w: number, h: number, color: string, rx = 4): string {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${color}"/>`
}

function text(x: number, y: number, label: string, size: number, color: string, bold = false): string {
  return `<text x="${x}" y="${y}" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="${size}" font-weight="${bold ? '700' : '400'}" fill="${color}">${escapeXml(label)}</text>`
}

function templateLayout(name: string, c1: string, c2: string, light: string): string {
  return `${browserChrome()}
<rect x="0" y="38" width="800" height="462" fill="url(#bg)"/>
<rect y="38" width="800" height="462" fill="url(#glow)"/>
<rect x="30" y="55" width="60" height="16" rx="4" fill="white" opacity="0.9"/>
<rect x="100" y="57" width="20" height="12" rx="2" fill="rgba(255,255,255,0.5)"/>
<rect x="130" y="57" width="30" height="12" rx="2" fill="rgba(255,255,255,0.5)"/>
<rect x="170" y="57" width="40" height="12" rx="2" fill="rgba(255,255,255,0.5)"/>
<rect x="680" y="55" width="90" height="16" rx="8" fill="rgba(255,255,255,0.2)"/>
<text x="400" y="170" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="36" font-weight="800" fill="white" text-anchor="middle">${escapeXml(name)}</text>
<text x="400" y="210" font-family="Arial,sans-serif" font-size="13" fill="rgba(255,255,255,0.7)" text-anchor="middle">Tampilkan karya terbaikmu</text>
${rect(70, 280, 200, 150, 'rgba(255,255,255,0.12)')}
${rect(85, 295, 170, 8, 'rgba(255,255,255,0.25)')}
${rect(85, 312, 140, 6, 'rgba(255,255,255,0.15)')}
${rect(85, 326, 110, 6, 'rgba(255,255,255,0.15)')}
${rect(85, 340, 100, 6, 'rgba(255,255,255,0.12)')}
${rect(85, 360, 70, 24, 'rgba(255,255,255,0.2)')}
${rect(300, 280, 200, 150, 'rgba(255,255,255,0.15)')}
${rect(315, 295, 170, 8, 'rgba(255,255,255,0.25)')}
${rect(315, 312, 140, 6, 'rgba(255,255,255,0.15)')}
${rect(315, 326, 110, 6, 'rgba(255,255,255,0.15)')}
${rect(315, 340, 100, 6, 'rgba(255,255,255,0.12)')}
${rect(315, 360, 70, 24, 'rgba(255,255,255,0.2)')}
${rect(530, 280, 200, 150, 'rgba(255,255,255,0.12)')}
${rect(545, 295, 170, 8, 'rgba(255,255,255,0.25)')}
${rect(545, 312, 140, 6, 'rgba(255,255,255,0.15)')}
${rect(545, 326, 110, 6, 'rgba(255,255,255,0.15)')}
${rect(545, 340, 100, 6, 'rgba(255,255,255,0.12)')}
${rect(545, 360, 70, 24, 'rgba(255,255,255,0.2)')}`
}

function serviceLayout(name: string, c1: string, c2: string, light: string): string {
  return `${browserChrome()}
<rect x="0" y="38" width="800" height="462" fill="url(#bg)"/>
<rect x="0" y="38" width="800" height="462" fill="url(#glow)"/>
<rect x="30" y="55" width="60" height="16" rx="4" fill="white" opacity="0.9"/>
<rect x="100" y="57" width="20" height="12" rx="2" fill="rgba(255,255,255,0.5)"/>
<rect x="130" y="57" width="30" height="12" rx="2" fill="rgba(255,255,255,0.5)"/>
<rect x="170" y="57" width="40" height="12" rx="2" fill="rgba(255,255,255,0.5)"/>
<circle cx="700" cy="63" r="8" fill="rgba(255,255,255,0.15)"/>
<text x="400" y="145" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="30" font-weight="800" fill="white" text-anchor="middle">${escapeXml(name)}</text>
<text x="400" y="180" font-family="Arial,sans-serif" font-size="12" fill="rgba(255,255,255,0.65)" text-anchor="middle">Dibuatkan oleh tim profesional</text>
<rect x="80" y="220" width="640" height="200" rx="12" fill="rgba(255,255,255,0.08)"/>
<rect x="110" y="245" width="40" height="40" rx="10" fill="rgba(255,255,255,0.15)"/>
${text(170, 272, 'Konsultasi Gratis', 13, 'rgba(255,255,255,0.9)', true)}
${text(170, 292, 'Diskusikan kebutuhanmu dengan tim', 11, 'rgba(255,255,255,0.5)')}
<rect x="110" y="325" width="40" height="40" rx="10" fill="rgba(255,255,255,0.15)"/>
${text(170, 352, 'Proses Cepat', 13, 'rgba(255,255,255,0.9)', true)}
${text(170, 372, 'Pengerjaan 3-7 hari kerja', 11, 'rgba(255,255,255,0.5)')}
<rect x="510" y="245" width="40" height="40" rx="10" fill="rgba(255,255,255,0.15)"/>
${text(570, 272, 'Revisi & Support', 13, 'rgba(255,255,255,0.9)', true)}
${text(570, 292, 'Sampai puas dengan hasilnya', 11, 'rgba(255,255,255,0.5)')}
<rect x="510" y="325" width="40" height="40" rx="10" fill="rgba(255,255,255,0.15)"/>
${text(570, 352, 'Hosting + Domain', 13, 'rgba(255,255,255,0.9)', true)}
${text(570, 372, 'Termasuk paket tertentu', 11, 'rgba(255,255,255,0.5)')}`
}

function umkmLayout(name: string, c1: string, c2: string, light: string): string {
  return `${browserChrome()}
<rect x="0" y="38" width="800" height="462" fill="url(#bg)"/>
<rect x="0" y="38" width="800" height="462" fill="url(#glow)"/>
<rect x="30" y="55" width="60" height="16" rx="4" fill="white" opacity="0.9"/>
<rect x="100" y="57" width="20" height="12" rx="2" fill="rgba(255,255,255,0.5)"/>
<rect x="130" y="57" width="30" height="12" rx="2" fill="rgba(255,255,255,0.5)"/>
<rect x="170" y="57" width="40" height="12" rx="2" fill="rgba(255,255,255,0.5)"/>
<rect x="630" y="52" width="140" height="22" rx="11" fill="rgba(255,255,255,0.15)"/>
<text x="700" y="67" font-family="Arial,sans-serif" font-size="10" fill="rgba(255,255,255,0.7)" text-anchor="middle">Hubungi Kami</text>
<text x="400" y="150" font-family="Plus Jakarta Sans,Arial,sans-serif" font-size="30" font-weight="800" fill="white" text-anchor="middle">${escapeXml(name)}</text>
<text x="400" y="185" font-family="Arial,sans-serif" font-size="12" fill="rgba(255,255,255,0.65)" text-anchor="middle">Solusi digital untuk bisnismu</text>
${rect(70, 225, 140, 100, 'rgba(255,255,255,0.1)')}
${rect(80, 240, 30, 30, 'rgba(255,255,255,0.15)')}
${text(80, 295, 'Website', 12, 'rgba(255,255,255,0.8)', true)}
${rect(230, 225, 140, 100, 'rgba(255,255,255,0.1)')}
${rect(240, 240, 30, 30, 'rgba(255,255,255,0.15)')}
${text(240, 295, 'Template', 12, 'rgba(255,255,255,0.8)', true)}
${rect(390, 225, 140, 100, 'rgba(255,255,255,0.1)')}
${rect(400, 240, 30, 30, 'rgba(255,255,255,0.15)')}
${text(400, 295, 'Presentasi', 12, 'rgba(255,255,255,0.8)', true)}
${rect(550, 225, 140, 100, 'rgba(255,255,255,0.1)')}
${rect(560, 240, 30, 30, 'rgba(255,255,255,0.15)')}
${text(560, 295, 'Landing Page', 12, 'rgba(255,255,255,0.8)', true)}
${rect(100, 360, 600, 65, 'rgba(255,255,255,0.08)')}
${text(400, 385, '"Bantu UMKM go digital dengan harga terjangkau"', 12, 'rgba(255,255,255,0.5)')}
${text(400, 405, 'Mulai dari Rp15.000', 14, 'rgba(255,255,255,0.9)', true)}`
}

export function productPreview(name: string, category: string): string {
  const [c1, c2, light] = PALETTES[category] || PALETTES.template

  const gradientDefs = `<defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
    <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="rgba(255,255,255,0.12)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
    </linearGradient>
  </defs>`

  let content: string
  switch (category) {
    case 'service':
      content = serviceLayout(name, c1, c2, light)
      break
    case 'umkm':
      content = umkmLayout(name, c1, c2, light)
      break
    default:
      content = templateLayout(name, c1, c2, light)
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
  ${gradientDefs}
  ${content}
</svg>`

  return `data:image/svg+xml;base64,${Buffer.from(svg, 'utf-8').toString('base64')}`
}
