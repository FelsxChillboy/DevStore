export default function LinkInBioTemplateDemo() {
  const links = [
    { label: 'Portfolio Website', url: '#' },
    { label: 'YouTube Channel', url: '#' },
    { label: 'Instagram', url: '#' },
    { label: 'TikTok', url: '#' },
    { label: 'GitHub', url: '#' },
    { label: 'LinkedIn', url: '#' },
    { label: 'WhatsApp Business', url: '#' },
  ]

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-purple-100 via-pink-50 to-white px-4">
      <div className="w-full max-w-sm text-center">
        <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-0.5">
          <div className="h-full w-full rounded-full bg-white" />
        </div>
        <h1 className="text-xl font-bold text-gray-900">@farhancreative</h1>
        <p className="mt-1 text-sm text-gray-500">Creative Developer & Content Creator</p>

        <div className="mt-6 flex justify-center gap-3">
          {['IG', 'YT', 'TT', 'GH'].map((s) => (
            <div key={s} className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-600">
              {s}
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          {links.map((l) => (
            <div
              key={l.label}
              className="block rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-medium text-gray-800 shadow-sm transition-all hover:border-purple-200 hover:shadow-md"
            >
              {l.label}
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-gray-400">&copy; 2026 farhancreative &middot; All links</p>
      </div>
    </div>
  )
}
