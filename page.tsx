export default function Royaliq() {
  return (
    <main className="min-h-screen bg-[#08080A] text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 m-4 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <span className="text-xl font-black tracking-[0.2em]">ROYALIQ</span>
          <span className="text-[10px] text-cyan-300">.ai</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <span>Tools</span><span>Pricing</span><span>Showcase</span>
        </div>
        <a href="#pricing" className="bg-gradient-to-r from-[#FFD700] to-[#00F5FF] text-black px-6 py-2 rounded-full font-bold text-sm">Get Royal Access</a>
      </nav>

      {/* Hero */}
      <section className="px-10 py-20 text-center">
        <div className="inline-block px-4 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-xs text-yellow-200 mb-6">👑 The Royal Intelligence</div>
        <h1 className="text-6xl md:text-8xl font-black leading-none">Think Royal.<br/><span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-cyan-400 bg-clip-text text-transparent">Create Like a King.</span></h1>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">6 Magical AI Tools in One Kingdom. Video, Image, Research, Marketing, Website, Resume - One Prompt.</p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold">Start Free - No Card</button>
          <button className="border border-white/20 px-8 py-4 rounded-full">Watch 30s Demo</button>
        </div>
      </section>

      {/* Tools */}
      <section className="grid md:grid-cols-3 gap-4 p-10">
        {['👑 AI Video Studio','🎨 Image Alchemy','🔮 Research Oracle','📢 Marketing Spellcraft','🌐 Royal Website Builder','📄 Resume Crown'].map(t=>(
          <div key={t} className="p-8 rounded-[2rem] bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur hover:border-yellow-500/30 transition">
            <h3 className="font-bold text-lg">{t}</h3>
            <p className="text-sm text-gray-500 mt-2">One royal prompt is enough.</p>
          </div>
        ))}
      </section>

      {/* Pricing - Yahan se paisa ayega */}
      <section id="pricing" className="text-center p-20 bg-white/[0.02]">
        <h2 className="text-4xl font-bold">Simple Royal Pricing</h2>
        <div className="mt-10 flex justify-center">
          <div className="p-8 rounded-3xl bg-white text-black w-80">
            <h3 className="font-bold text-xl">King Plan</h3>
            <p className="text-4xl font-black mt-4">$19<span className="text-sm font-normal">/mo</span></p>
            <ul className="text-left text-sm mt-6 space-y-2">
              <li>✓ Unlimited AI Tools</li>
              <li>✓ 1000 Credits / month</li>
              <li>✓ No Watermark</li>
            </ul>
            {/* Yahan apna LemonSqueezy link lagana */}
            <a href="https://YOUR-LEMON-LINK" className="block mt-6 bg-black text-white py-3 rounded-full">Buy Now - Instant Access</a>
          </div>
        </div>
      </section>
    </main>
  )
}
