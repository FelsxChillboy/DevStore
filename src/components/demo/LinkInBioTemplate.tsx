export default function LinkInBioTemplateDemo() {
  const links = [
    { label: 'Portfolio Website', url: '#', icon: '🌐' },
    { label: 'YouTube Channel', url: '#', icon: '▶️' },
    { label: 'Instagram', url: '#', icon: '📸' },
    { label: 'TikTok', url: '#', icon: '🎵' },
    { label: 'GitHub', url: '#', icon: '💻' },
    { label: 'LinkedIn', url: '#', icon: '💼' },
    { label: 'WhatsApp Business', url: '#', icon: '💬' },
  ]

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-purple-100 via-pink-50 to-white px-4">
      <div className="w-full max-w-sm text-center">
        <img
          src="https://i.pravatar.cc/120?u=farhanlink"
          alt="Farhan Creative"
          className="mx-auto mb-4 h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg"
        />
        <h1 className="text-xl font-bold text-gray-900">@farhancreative</h1>
        <p className="mt-1 text-sm text-gray-500">Creative Developer & Content Creator</p>

        <div className="mt-6 flex justify-center gap-3">
          {[
            { label: 'IG', color: 'bg-gradient-to-br from-pink-500 to-orange-400' },
            { label: 'YT', color: 'bg-red-500' },
            { label: 'TT', color: 'bg-gray-900' },
            { label: 'GH', color: 'bg-gray-700' },
          ].map((s) => (
            <div key={s.label} className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-xs font-bold text-white shadow-sm transition-all hover:scale-110 ${s.color}`}>
              {s.label}
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          {links.map((l) => (
            <div
              key={l.label}
              className="flex cursor-pointer items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-medium text-gray-800 shadow-sm transition-all hover:border-purple-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="text-lg">{l.icon}</span>
              <span>{l.label}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-gray-400">&copy; 2026 farhancreative &middot; All links</p>
      </div>
    </div>
  )
}
