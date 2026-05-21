export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers &amp; Consultants
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Billable Time with{' '}
          <span className="text-[#58a6ff]">Automatic Project Detection</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          FreelanceTrack monitors your screen and app usage to auto-categorize work time, then generates polished invoices — so you never lose a billable minute.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Tracking — $11/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-medium px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[['Auto-Detect', 'Projects via AI'], ['One-Click', 'Invoice Export'], ['Real-Time', 'Profitability']].map(([title, sub]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <p className="text-white font-semibold text-sm">{title}</p>
              <p className="text-[#8b949e] text-xs mt-1">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$11</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited projects & clients',
              'AI-powered time categorization',
              'Automatic invoice generation',
              'Profitability reports',
              'Desktop app (Mac & Windows)',
              'Priority email support',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">7-day free trial · No credit card required</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does automatic project detection work?',
              a: 'The desktop client monitors active window titles and app usage. Our AI model maps these signals to your projects in real time — no manual timers needed.',
            },
            {
              q: 'Is my screen data private and secure?',
              a: 'All processing happens locally on your machine. Only aggregated time metadata is synced to our servers — never screenshots or raw screen content.',
            },
            {
              q: 'Can I export invoices to send to clients?',
              a: 'Yes. Generate professional PDF invoices with one click, pre-filled with tracked hours, rates, and your branding. Export or email directly from the app.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="text-white font-semibold mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-xs">
        © {new Date().getFullYear()} FreelanceTrack. All rights reserved.
      </footer>
    </main>
  )
}
