import Image from "next/image";

const btnPrimary = "bg-[#c8a84a] text-black border border-black/10 hover:bg-[#b99633] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/30 rounded-full font-light tracking-wide uppercase";
const btnSecondary = "bg-white/60 text-black border border-[#c8a84a] hover:bg-[#c8a84a] hover:text-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/30 rounded-full font-light tracking-wide uppercase";

export default function Services() {
  return (
    <div className="bg-[#f5f3f0] text-[#1a1a1a] min-h-screen scroll-pt-[160px] md:scroll-pt-[200px] pt-[160px] md:pt-[200px]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f3f0]/90 backdrop-blur-md border-b border-[#e8e6e3]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between py-6 md:py-8">
            <a href="/" className="flex items-center">
              <div className="flex items-center h-[96px] md:h-[140px]">
                <Image
                  src="/logo.png"
                  alt="Cruising Obstacles Online"
                  width={1400}
                  height={350}
                  priority
                  className="h-[96px] md:h-[140px] w-auto max-w-none"
                />
              </div>
            </a>
            <div className="hidden md:flex items-center gap-10">
              <a href="/how-it-works" className="text-[#4a4a4a] hover:text-[#b99633] transition-colors text-sm tracking-wide uppercase">
                How It Works
              </a>
              <a href="/services" className="text-[#4a4a4a] hover:text-[#b99633] transition-colors text-sm tracking-wide uppercase">
                Services
              </a>
              <a href="/#testimonials" className="text-[#4a4a4a] hover:text-[#b99633] transition-colors text-sm tracking-wide uppercase">
                Testimonials
              </a>
              <a
                href="/#book"
                className={`px-8 py-2.5 text-sm ${btnPrimary}`}
              >
                Book a Session
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-serif font-light text-center mb-6 text-[#1a1a1a] tracking-tight">
            Services
          </h1>
          <p className="text-xl text-[#6a6a6a] text-center mb-4 max-w-2xl mx-auto font-light">
            From Dubai or Zoom
          </p>
          <p className="text-[#4a4a4a] leading-relaxed text-center mb-20 max-w-3xl mx-auto font-light text-lg">
            Our integrated approach combines life coaching, mindful movement, and energy healing 
            to support your transformation. Each session is tailored to your unique needs and goals.
          </p>
        </div>
      </section>

      {/* 1:1 Coaching */}
      <section id="coaching" className="py-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white/40 to-[#f5f3f0]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="text-4xl mb-6">💬</div>
            <h2 className="text-4xl font-serif font-light mb-6 text-[#1a1a1a]">1:1 Coaching</h2>
            <p className="text-[#4a4a4a] leading-relaxed font-light text-lg mb-6">
              Deep, transformative coaching conversations that help you break through limiting 
              patterns, clarify your direction, and create meaningful change in your life.
            </p>
          </div>
          <div className="space-y-4 text-[#4a4a4a] leading-relaxed font-light text-lg">
            <p>
              This is deep, focused, one-to-one work designed to help you navigate complexity with clarity and confidence.
            </p>
            <p>
              Sessions are conversational, practical, and grounded, not abstract or motivational. We work with real situations: career crossroads, relationship dynamics, identity shifts, burnout, or the quiet sense that something needs to change.
            </p>
            <p>
              This service is ideal if you value thoughtful dialogue, reflection, and accountability, without pressure or performance.
            </p>
            <div className="mt-8">
              <p className="font-medium text-[#1a1a1a] mb-4">Includes:</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <span className="text-[#8b6914] mr-3">•</span>
                  <span>Personalised coaching sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b6914] mr-3">•</span>
                  <span>Goal clarification and decision support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b6914] mr-3">•</span>
                  <span>Tools for navigating transitions and uncertainty</span>
                </li>
              </ul>
            </div>
            <p className="mt-6">
              <span className="font-medium text-[#1a1a1a]">Best for:</span> Professionals facing change, pressure, or life realignment
            </p>
            <p>
              <span className="font-medium text-[#1a1a1a]">Format:</span> Online worldwide / Dubai-based sessions available
            </p>
          </div>
        </div>
      </section>

      {/* Mind-Body Sessions */}
      <section id="mind-body" className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="text-4xl mb-6">🧘</div>
            <h2 className="text-4xl font-serif font-light mb-6 text-[#1a1a1a]">Mind-Body Sessions</h2>
            <p className="text-[#4a4a4a] leading-relaxed font-light text-lg mb-6">
              Integrated Pilates and yoga practices that strengthen your body while cultivating 
              mental clarity, emotional balance, and profound mind-body connection.
            </p>
          </div>
          <div className="space-y-4 text-[#4a4a4a] leading-relaxed font-light text-lg">
            <p>
              These sessions integrate coaching with mindful movement practices to support both mental clarity and physical wellbeing.
            </p>
            <p>
              Movement is used not as exercise for performance, but as a way to reconnect with your body, regulate stress, and access deeper awareness. Pilates and yoga are adapted to your energy levels, experience, and needs, always gentle, always respectful.
            </p>
            <p>
              This approach is particularly effective for clients who think a lot, carry stress physically, or feel disconnected from their bodies during demanding periods of life.
            </p>
            <div className="mt-8">
              <p className="font-medium text-[#1a1a1a] mb-4">Includes:</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <span className="text-[#1e4d72] mr-3">•</span>
                  <span>Gentle Pilates and yoga-inspired movement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e4d72] mr-3">•</span>
                  <span>Breath awareness and grounding practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e4d72] mr-3">•</span>
                  <span>Coaching conversations woven naturally throughout</span>
                </li>
              </ul>
            </div>
            <p className="mt-6">
              <span className="font-medium text-[#1a1a1a]">Best for:</span> Stress management, reconnection, emotional balance
            </p>
            <p>
              <span className="font-medium text-[#1a1a1a]">Format:</span> Online sessions tailored to your space and schedule
            </p>
          </div>
        </div>
      </section>

      {/* Reiki-Supported Reset */}
      <section id="reiki" className="py-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white/40 to-[#f5f3f0]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="text-4xl mb-6">✨</div>
            <h2 className="text-4xl font-serif font-light mb-6 text-[#1a1a1a]">Reiki-Supported Reset</h2>
            <p className="text-[#4a4a4a] leading-relaxed font-light text-lg mb-6">
              Energy healing sessions that release blockages, restore balance, and support your 
              journey towards wholeness. Deep relaxation meets profound transformation.
            </p>
          </div>
          <div className="space-y-4 text-[#4a4a4a] leading-relaxed font-light text-lg">
            <p>
              This offering focuses on deep rest, energetic balance, and nervous-system regulation.
            </p>
            <p>
              Reiki-supported sessions are quiet, restorative, and intentionally unhurried. They help release accumulated tension, mental fatigue, and emotional overload, creating space for clarity and renewal.
            </p>
            <p>
              These sessions can stand alone or complement coaching work, particularly during periods of exhaustion, overwhelm, or transition.
            </p>
            <div className="mt-8">
              <p className="font-medium text-[#1a1a1a] mb-4">Includes:</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <span className="text-[#8b6914] mr-3">•</span>
                  <span>Energy-based relaxation and restoration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b6914] mr-3">•</span>
                  <span>Gentle grounding and integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b6914] mr-3">•</span>
                  <span>Optional reflective conversation</span>
                </li>
              </ul>
            </div>
            <p className="mt-6">
              <span className="font-medium text-[#1a1a1a]">Best for:</span> Resetting during burnout, emotional fatigue, or high stress
            </p>
            <p>
              <span className="font-medium text-[#1a1a1a]">Note:</span> This is a supportive wellbeing practice and not a medical or therapeutic treatment
            </p>
            <p>
              <span className="font-medium text-[#1a1a1a]">Format:</span> Online / Dubai-based sessions available
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 sm:px-8 lg:px-12 bg-[#1a1a1a] text-[#9a9a9a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div className="md:col-span-2">
              <div className="text-3xl font-serif font-light text-white mb-6 tracking-wide">Cruising Obstacles Online</div>
              <p className="text-[#9a9a9a] leading-relaxed max-w-md font-light text-lg">
                Life coaching, movement, and energy healing delivered online worldwide. 
                Moving through obstacles with calm strength, clarity, and forward momentum.
              </p>
            </div>
            <div>
              <h4 className="text-white font-light mb-6 text-sm uppercase tracking-widest">Services</h4>
              <ul className="space-y-3 text-[#9a9a9a] font-light">
                <li>
                  <a href="/services#coaching" className="hover:text-white transition-colors">
                    1:1 Coaching
                  </a>
                </li>
                <li>
                  <a href="/services#mind-body" className="hover:text-white transition-colors">
                    Mind-Body Sessions
                  </a>
                </li>
                <li>
                  <a href="/services#reiki" className="hover:text-white transition-colors">
                    Reiki-Supported Reset
                  </a>
                </li>
                <li>
                  <a href="/#book" className="hover:text-white transition-colors">
                    Book a Session
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-light mb-6 text-sm uppercase tracking-widest">Connect</h4>
              <ul className="space-y-3 text-[#9a9a9a] font-light">
                <li>
                  <a href="/how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="/#testimonials" className="hover:text-white transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="/#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-[#3a3a3a] flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-[#6a6a6a] text-sm font-light">
              © {new Date().getFullYear()} Cruising Obstacles Online. All rights reserved.
            </div>
            <div className="text-sm text-[#9a9a9a] font-light tracking-wide">
              Available in English • Français • العربية
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

