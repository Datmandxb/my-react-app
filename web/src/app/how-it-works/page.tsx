import Image from "next/image";

const btnPrimary = "bg-[#c8a84a] text-black border border-black/10 hover:bg-[#b99633] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/30 rounded-full font-light tracking-wide uppercase";
const btnSecondary = "bg-white/60 text-black border border-[#c8a84a] hover:bg-[#c8a84a] hover:text-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/30 rounded-full font-light tracking-wide uppercase";

export default function HowItWorks() {
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
            How It Works
          </h1>
          <p className="text-xl text-[#6a6a6a] text-center mb-20 max-w-2xl mx-auto font-light">
            A thoughtful, personalised journey designed around your unique needs
          </p>
        </div>
      </section>

      {/* Initial Discovery */}
      <section id="discovery" className="py-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white/40 to-[#f5f3f0]">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-12">
            <div className="absolute -left-6 top-0 text-8xl font-serif font-light text-[#d4af37]/10 -z-10">
              01
            </div>
            <h2 className="text-4xl font-serif font-light mb-6 text-[#1a1a1a]">Initial Discovery</h2>
            <p className="text-[#4a4a4a] leading-relaxed font-light text-lg mb-6">
              We begin with an intimate conversation to understand where you are, what you&apos;re 
              facing, and where you want to go. This foundation informs every aspect of our work together.
            </p>
          </div>
          <div className="space-y-4 text-[#4a4a4a] leading-relaxed font-light text-lg">
            <p>
              Our work begins with a focused, confidential conversation designed to understand where you are right now, not just on the surface, but beneath it.
            </p>
            <p>
              We explore what&apos;s currently creating friction in your life, what feels overwhelming or unclear, and what you want to move towards. This is not a diagnostic session or therapy. It&apos;s a calm, grounded space to articulate what often goes unsaid.
            </p>
            <p>
              You don&apos;t need to prepare anything formal. Just come as you are.
            </p>
            <p>
              By the end of this session, most clients feel a noticeable sense of relief and clarity, often because they&apos;ve finally had the space to think and speak without pressure or judgement.
            </p>
            <div className="mt-8">
              <p className="font-medium text-[#1a1a1a] mb-4">What you can expect:</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <span className="text-[#8b6914] mr-3">•</span>
                  <span>A safe, non-judgemental conversation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b6914] mr-3">•</span>
                  <span>Clear identification of core challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b6914] mr-3">•</span>
                  <span>An initial sense of direction and next steps</span>
                </li>
              </ul>
            </div>
            <p className="mt-6">
              <span className="font-medium text-[#1a1a1a]">Format:</span> Online (Zoom) or in-person (Dubai)
            </p>
          </div>
        </div>
      </section>

      {/* Personalized Plan */}
      <section id="plan" className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-12">
            <div className="absolute -left-6 top-0 text-8xl font-serif font-light text-[#d4af37]/10 -z-10">
              02
            </div>
            <h2 className="text-4xl font-serif font-light mb-6 text-[#1a1a1a]">Personalised Plan</h2>
            <p className="text-[#4a4a4a] leading-relaxed font-light text-lg mb-6">
              Together, we craft a bespoke approach that weaves together coaching conversations, 
              movement practices, and energy healing, tailored specifically to your goals and lifestyle.
            </p>
          </div>
          <div className="space-y-4 text-[#4a4a4a] leading-relaxed font-light text-lg">
            <p>
              There is no one-size-fits-all approach to meaningful change.
            </p>
            <p>
              Based on your discovery session, we design a personalised plan that integrates coaching conversations with supportive mind-body practices such as gentle movement, breath awareness, Pilates, yoga, or energy-based techniques, always tailored to you.
            </p>
            <p>
              Some clients benefit from structured goal-setting and accountability. Others need nervous-system regulation, reconnection with their body, or space to process life transitions more gently. Many need a combination of both.
            </p>
            <p>
              The plan evolves as you do. Nothing is rigid. Nothing is forced.
            </p>
            <div className="mt-8">
              <p className="font-medium text-[#1a1a1a] mb-4">What this stage focuses on:</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <span className="text-[#8b6914] mr-3">•</span>
                  <span>Clarifying priorities and boundaries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b6914] mr-3">•</span>
                  <span>Releasing patterns that keep you stuck</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b6914] mr-3">•</span>
                  <span>Rebuilding confidence, resilience, and momentum</span>
                </li>
              </ul>
            </div>
            <p className="mt-6">
              <span className="font-medium text-[#1a1a1a]">Format:</span> Online worldwide / Dubai-based sessions available
            </p>
          </div>
        </div>
      </section>

      {/* Sustained Support */}
      <section id="support" className="py-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white/40 to-[#f5f3f0]">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-12">
            <div className="absolute -left-6 top-0 text-8xl font-serif font-light text-[#d4af37]/10 -z-10">
              03
            </div>
            <h2 className="text-4xl font-serif font-light mb-6 text-[#1a1a1a]">Sustained Support</h2>
            <p className="text-[#4a4a4a] leading-relaxed font-light text-lg mb-6">
              Through regular sessions, you receive ongoing guidance, accountability, and healing 
              as you move forward with increasing confidence, clarity, and momentum.
            </p>
          </div>
          <div className="space-y-4 text-[#4a4a4a] leading-relaxed font-light text-lg">
            <p>
              Lasting change happens through consistency, not intensity.
            </p>
            <p>
              Sustained support provides a steady rhythm of sessions where insight turns into real-world change. This is where confidence deepens, decisions become clearer, and new ways of living begin to feel natural rather than effortful.
            </p>
            <p>
              Sessions adapt to what you need in the moment, whether that&apos;s reflective conversation, guided movement, grounding practices, or simply a calm, steady presence during a demanding period of life.
            </p>
            <p>
              Many clients describe this stage as support they didn&apos;t realise they were missing.
            </p>
            <div className="mt-8">
              <p className="font-medium text-[#1a1a1a] mb-4">Common outcomes:</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <span className="text-[#8b6914] mr-3">•</span>
                  <span>Greater emotional balance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b6914] mr-3">•</span>
                  <span>Clearer decision-making</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b6914] mr-3">•</span>
                  <span>Reduced stress and mental noise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b6914] mr-3">•</span>
                  <span>A renewed sense of agency and calm strength</span>
                </li>
              </ul>
            </div>
            <p className="mt-6">
              <span className="font-medium text-[#1a1a1a]">Format:</span> Ongoing online support, anywhere in the world
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

