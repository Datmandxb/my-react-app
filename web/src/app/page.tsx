export default function Home() {
  return (
    <div className="bg-[#f5f3f0] text-[#1a1a1a] min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f3f0]/90 backdrop-blur-md border-b border-[#e8e6e3]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-24">
            <div className="text-2xl font-serif font-light tracking-wide text-[#1a1a1a]">
              Cruising Obstacles Online
            </div>
            <div className="hidden md:flex items-center gap-10">
              <a href="#how-it-works" className="text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors text-sm tracking-wide uppercase">
                How It Works
              </a>
              <a href="#services" className="text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors text-sm tracking-wide uppercase">
                Services
              </a>
              <a href="#testimonials" className="text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors text-sm tracking-wide uppercase">
                Testimonials
              </a>
              <a
                href="#book"
                className="px-8 py-2.5 bg-[#1a1a1a] text-[#f5f3f0] rounded-full hover:bg-[#2a2a2a] transition-all text-sm tracking-wide uppercase font-light"
              >
                Book a Session
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-light leading-[1.1] tracking-tight text-[#1a1a1a] mb-8">
              Move Through Obstacles with{" "}
              <span className="font-normal text-[#8b6914]">Calm Clarity</span>
            </h1>
            <p className="text-2xl sm:text-3xl text-[#4a4a4a] leading-relaxed mb-12 max-w-3xl font-light">
              Life coaching that combines clarity-focused guidance with movement and energy work. 
              Build forward momentum with personalized support, wherever you are in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 mb-8">
              <a
                href="#book"
                className="px-10 py-4 bg-[#1a1a1a] text-[#f5f3f0] rounded-full text-base font-light tracking-wide hover:bg-[#2a2a2a] transition-all hover:shadow-xl text-center uppercase"
              >
                Book a Session
              </a>
              <a
                href="#how-it-works"
                className="px-10 py-4 border border-[#8b6914] text-[#8b6914] rounded-full text-base font-light tracking-wide hover:bg-[#8b6914]/5 transition-all text-center uppercase"
              >
                How It Works
              </a>
            </div>
            <p className="text-sm text-[#6a6a6a] tracking-wider uppercase">
              Online coaching worldwide • Based in Dubai
            </p>
          </div>
        </div>
      </section>

      {/* Trust Row */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            <div className="px-6 py-3 bg-white/60 rounded-full border border-[#e8e6e3] text-[#4a4a4a] text-xs uppercase tracking-widest">
              Certified Life Coach
            </div>
            <div className="px-6 py-3 bg-white/60 rounded-full border border-[#e8e6e3] text-[#4a4a4a] text-xs uppercase tracking-widest">
              Pilates & Yoga Instructor
            </div>
            <div className="px-6 py-3 bg-white/60 rounded-full border border-[#e8e6e3] text-[#4a4a4a] text-xs uppercase tracking-widest">
              Reiki Master Practitioner
            </div>
            <div className="px-6 py-3 bg-white/60 rounded-full border border-[#e8e6e3] text-[#4a4a4a] text-xs uppercase tracking-widest">
              Dubai-Based
            </div>
            <div className="px-6 py-3 bg-white/60 rounded-full border border-[#d4af37] text-[#8b6914] text-xs uppercase tracking-widest">
              Multilingual Support
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="py-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-serif font-light text-center mb-20 text-[#1a1a1a] tracking-tight">
            Three Foundations of{" "}
            <span className="font-normal text-[#8b6914]">Transformation</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-gradient-to-br from-white to-[#faf9f7] rounded-2xl p-12 shadow-sm border border-[#e8e6e3] hover:shadow-lg transition-all">
              <div className="w-16 h-16 mb-8 rounded-full bg-gradient-to-br from-[#d4af37]/20 to-[#8b6914]/20 flex items-center justify-center">
                <div className="text-3xl">✨</div>
              </div>
              <h3 className="text-3xl font-serif font-light mb-6 text-[#1a1a1a]">Clarity</h3>
              <p className="text-[#4a4a4a] leading-relaxed font-light text-lg">
                Navigate through the fog of stress and overwhelm. Gain perspective on what truly 
                matters and design a path forward aligned with your deepest values and aspirations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white to-[#faf9f7] rounded-2xl p-12 shadow-sm border border-[#e8e6e3] hover:shadow-lg transition-all">
              <div className="w-16 h-16 mb-8 rounded-full bg-gradient-to-br from-[#1e4d72]/20 to-[#2d6a95]/20 flex items-center justify-center">
                <div className="text-3xl">💪</div>
              </div>
              <h3 className="text-3xl font-serif font-light mb-6 text-[#1a1a1a]">Resilience</h3>
              <p className="text-[#4a4a4a] leading-relaxed font-light text-lg">
                Build inner strength through integrated movement and mindful practices. Develop 
                the capacity to weather transitions and emerge stronger, more centered, and capable.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white to-[#faf9f7] rounded-2xl p-12 shadow-sm border border-[#e8e6e3] hover:shadow-lg transition-all">
              <div className="w-16 h-16 mb-8 rounded-full bg-gradient-to-br from-[#d4af37]/20 to-[#8b6914]/20 flex items-center justify-center">
                <div className="text-3xl">🎯</div>
              </div>
              <h3 className="text-3xl font-serif font-light mb-6 text-[#1a1a1a]">Alignment</h3>
              <p className="text-[#4a4a4a] leading-relaxed font-light text-lg">
                Align your energy, actions, and intentions. Through coaching, movement, and 
                Reiki healing, restore harmony between mind, body, and spirit for authentic living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white/40 to-[#f5f3f0]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-serif font-light text-center mb-6 text-[#1a1a1a] tracking-tight">
            How It Works
          </h2>
          <p className="text-xl text-[#6a6a6a] text-center mb-20 max-w-2xl mx-auto font-light">
            A thoughtful, personalized journey designed around your unique needs
          </p>
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute -left-6 top-0 text-8xl font-serif font-light text-[#d4af37]/10 -z-10">
                01
              </div>
              <h3 className="text-3xl font-serif font-light mb-6 text-[#1a1a1a]">Initial Discovery</h3>
              <p className="text-[#4a4a4a] leading-relaxed font-light text-lg">
                We begin with an intimate conversation to understand where you are, what you&apos;re 
                facing, and where you want to go. This foundation informs every aspect of our work together.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-6 top-0 text-8xl font-serif font-light text-[#d4af37]/10 -z-10">
                02
              </div>
              <h3 className="text-3xl font-serif font-light mb-6 text-[#1a1a1a]">Personalized Plan</h3>
              <p className="text-[#4a4a4a] leading-relaxed font-light text-lg">
                Together, we craft a bespoke approach that weaves together coaching conversations, 
                movement practices, and energy healing—tailored specifically to your goals and lifestyle.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-6 top-0 text-8xl font-serif font-light text-[#d4af37]/10 -z-10">
                03
              </div>
              <h3 className="text-3xl font-serif font-light mb-6 text-[#1a1a1a]">Sustained Support</h3>
              <p className="text-[#4a4a4a] leading-relaxed font-light text-lg">
                Through regular sessions, you receive ongoing guidance, accountability, and healing 
                as you move forward with increasing confidence, clarity, and momentum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-serif font-light text-center mb-6 text-[#1a1a1a] tracking-tight">
            Services
          </h2>
          <p className="text-xl text-[#6a6a6a] text-center mb-4 max-w-2xl mx-auto font-light">
            From Dubai or Zoom
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
            <div className="bg-gradient-to-br from-white to-[#faf9f7] rounded-2xl p-10 shadow-sm border border-[#e8e6e3] hover:shadow-xl transition-all">
              <div className="text-4xl mb-6">💬</div>
              <h3 className="text-3xl font-serif font-light mb-4 text-[#1a1a1a]">1:1 Coaching</h3>
              <p className="text-[#4a4a4a] leading-relaxed mb-8 font-light text-lg">
                Deep, transformative coaching conversations that help you break through limiting 
                patterns, clarify your direction, and create meaningful change in your life.
              </p>
              <ul className="space-y-3 text-[#4a4a4a] mb-10 font-light">
                <li className="flex items-start">
                  <span className="text-[#8b6914] mr-3">—</span>
                  <span>Personalized goal-setting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b6914] mr-3">—</span>
                  <span>Obstacle navigation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b6914] mr-3">—</span>
                  <span>Life transition support</span>
                </li>
              </ul>
              <a
                href="#book"
                className="block w-full text-center px-8 py-4 border border-[#1a1a1a] text-[#1a1a1a] rounded-full font-light tracking-wide hover:bg-[#1a1a1a] hover:text-[#f5f3f0] transition-all uppercase text-sm"
              >
                Book Now
              </a>
            </div>
            <div className="bg-gradient-to-br from-white to-[#faf9f7] rounded-2xl p-10 shadow-sm border border-[#e8e6e3] hover:shadow-xl transition-all">
              <div className="text-4xl mb-6">🧘</div>
              <h3 className="text-3xl font-serif font-light mb-4 text-[#1a1a1a]">Mind-Body Sessions</h3>
              <p className="text-[#4a4a4a] leading-relaxed mb-8 font-light text-lg">
                Integrated Pilates and yoga practices that strengthen your body while cultivating 
                mental clarity, emotional balance, and profound mind-body connection.
              </p>
              <ul className="space-y-3 text-[#4a4a4a] mb-10 font-light">
                <li className="flex items-start">
                  <span className="text-[#1e4d72] mr-3">—</span>
                  <span>Pilates for core strength</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e4d72] mr-3">—</span>
                  <span>Yoga for flexibility & calm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e4d72] mr-3">—</span>
                  <span>Movement as meditation</span>
                </li>
              </ul>
              <a
                href="#book"
                className="block w-full text-center px-8 py-4 border border-[#1a1a1a] text-[#1a1a1a] rounded-full font-light tracking-wide hover:bg-[#1a1a1a] hover:text-[#f5f3f0] transition-all uppercase text-sm"
              >
                Book Now
              </a>
            </div>
            <div className="bg-gradient-to-br from-white to-[#faf9f7] rounded-2xl p-10 shadow-sm border border-[#e8e6e3] hover:shadow-xl transition-all">
              <div className="text-4xl mb-6">✨</div>
              <h3 className="text-3xl font-serif font-light mb-4 text-[#1a1a1a]">Reiki-Supported Reset</h3>
              <p className="text-[#4a4a4a] leading-relaxed mb-8 font-light text-lg">
                Energy healing sessions that release blockages, restore balance, and support your 
                journey toward wholeness. Deep relaxation meets profound transformation.
              </p>
              <ul className="space-y-3 text-[#4a4a4a] mb-10 font-light">
                <li className="flex items-start">
                  <span className="text-[#8b6914] mr-3">—</span>
                  <span>Energetic clearing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b6914] mr-3">—</span>
                  <span>Stress & tension release</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b6914] mr-3">—</span>
                  <span>Holistic restoration</span>
                </li>
              </ul>
              <a
                href="#book"
                className="block w-full text-center px-8 py-4 bg-[#1a1a1a] text-[#f5f3f0] rounded-full font-light tracking-wide hover:bg-[#2a2a2a] transition-all uppercase text-sm"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 px-6 sm:px-8 lg:px-12 bg-white/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-serif font-light text-center mb-20 text-[#1a1a1a] tracking-tight">
            Client Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-white to-[#faf9f7] rounded-2xl p-10 shadow-sm border border-[#e8e6e3]">
              <div className="mb-6 text-[#d4af37] text-xl">★★★★★</div>
              <p className="text-[#4a4a4a] leading-relaxed mb-8 font-light text-lg italic">
                &ldquo;Placeholder testimonial text describing a transformative journey toward clarity 
                and renewed purpose. This should reflect authentic client experience with overcoming 
                professional burnout and finding balance.&rdquo;
              </p>
              <div className="text-[#1a1a1a] font-light text-lg">— Client Name</div>
              <div className="text-[#6a6a6a] text-sm uppercase tracking-wider mt-1">Executive, Dubai</div>
            </div>
            <div className="bg-gradient-to-br from-white to-[#faf9f7] rounded-2xl p-10 shadow-sm border border-[#e8e6e3]">
              <div className="mb-6 text-[#d4af37] text-xl">★★★★★</div>
              <p className="text-[#4a4a4a] leading-relaxed mb-8 font-light text-lg italic">
                &ldquo;Placeholder testimonial text highlighting the power of integrated coaching and 
                movement practices. Describe how the combination created meaningful change during a 
                difficult life transition. Edit with real client feedback.&rdquo;
              </p>
              <div className="text-[#1a1a1a] font-light text-lg">— Client Name</div>
              <div className="text-[#6a6a6a] text-sm uppercase tracking-wider mt-1">Professional, Remote</div>
            </div>
            <div className="bg-gradient-to-br from-white to-[#faf9f7] rounded-2xl p-10 shadow-sm border border-[#e8e6e3]">
              <div className="mb-6 text-[#d4af37] text-xl">★★★★★</div>
              <p className="text-[#4a4a4a] leading-relaxed mb-8 font-light text-lg italic">
                &ldquo;Placeholder testimonial text emphasizing the impact of Reiki healing and 
                personalized support. Share how this holistic approach helped break through patterns 
                of feeling stuck. Replace with authentic client story.&rdquo;
              </p>
              <div className="text-[#1a1a1a] font-light text-lg">— Client Name</div>
              <div className="text-[#6a6a6a] text-sm uppercase tracking-wider mt-1">Entrepreneur, Dubai</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-serif font-light text-center mb-20 text-[#1a1a1a] tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="bg-gradient-to-br from-white to-[#faf9f7] rounded-2xl shadow-sm border border-[#e8e6e3] group">
              <summary className="text-xl font-serif font-light text-[#1a1a1a] cursor-pointer hover:text-[#8b6914] transition-colors p-8 list-none">
                <span className="flex items-center justify-between">
                  <span>What makes your holistic approach unique?</span>
                  <span className="text-[#8b6914] text-2xl ml-4 group-open:rotate-45 transition-transform">+</span>
                </span>
              </summary>
              <div className="px-8 pb-8">
                <p className="text-[#4a4a4a] leading-relaxed font-light text-lg pt-4 border-t border-[#e8e6e3]">
                  Placeholder answer explaining how the integration of life coaching, movement practices, 
                  and Reiki healing creates a more comprehensive transformation than any single modality 
                  alone. Edit to highlight what sets Cruising Obstacles Online apart.
                </p>
              </div>
            </details>
            <details className="bg-gradient-to-br from-white to-[#faf9f7] rounded-2xl shadow-sm border border-[#e8e6e3] group">
              <summary className="text-xl font-serif font-light text-[#1a1a1a] cursor-pointer hover:text-[#8b6914] transition-colors p-8 list-none">
                <span className="flex items-center justify-between">
                  <span>How long are typical sessions?</span>
                  <span className="text-[#8b6914] text-2xl ml-4 group-open:rotate-45 transition-transform">+</span>
                </span>
              </summary>
              <div className="px-8 pb-8">
                <p className="text-[#4a4a4a] leading-relaxed font-light text-lg pt-4 border-t border-[#e8e6e3]">
                  Placeholder answer about session duration, frequency recommendations, and what to 
                  expect. Include details about different session types (coaching, movement, Reiki) 
                  and typical time commitments.
                </p>
              </div>
            </details>
            <details className="bg-gradient-to-br from-white to-[#faf9f7] rounded-2xl shadow-sm border border-[#e8e6e3] group">
              <summary className="text-xl font-serif font-light text-[#1a1a1a] cursor-pointer hover:text-[#8b6914] transition-colors p-8 list-none">
                <span className="flex items-center justify-between">
                  <span>Do I need prior experience with Pilates, yoga, or Reiki?</span>
                  <span className="text-[#8b6914] text-2xl ml-4 group-open:rotate-45 transition-transform">+</span>
                </span>
              </summary>
              <div className="px-8 pb-8">
                <p className="text-[#4a4a4a] leading-relaxed font-light text-lg pt-4 border-t border-[#e8e6e3]">
                  Placeholder answer reassuring clients that no prior experience is necessary. Explain 
                  how all practices are adapted to each individual&apos;s level, comfort, and physical 
                  capabilities, ensuring accessibility for beginners.
                </p>
              </div>
            </details>
            <details className="bg-gradient-to-br from-white to-[#faf9f7] rounded-2xl shadow-sm border border-[#e8e6e3] group">
              <summary className="text-xl font-serif font-light text-[#1a1a1a] cursor-pointer hover:text-[#8b6914] transition-colors p-8 list-none">
                <span className="flex items-center justify-between">
                  <span>Can I work with you if I&apos;m not in Dubai?</span>
                  <span className="text-[#8b6914] text-2xl ml-4 group-open:rotate-45 transition-transform">+</span>
                </span>
              </summary>
              <div className="px-8 pb-8">
                <p className="text-[#4a4a4a] leading-relaxed font-light text-lg pt-4 border-t border-[#e8e6e3]">
                  Placeholder answer about virtual sessions via Zoom, time zone considerations, and 
                  how remote clients can fully benefit from coaching and energy healing services 
                  regardless of location.
                </p>
              </div>
            </details>
            <details className="bg-gradient-to-br from-white to-[#faf9f7] rounded-2xl shadow-sm border border-[#e8e6e3] group">
              <summary className="text-xl font-serif font-light text-[#1a1a1a] cursor-pointer hover:text-[#8b6914] transition-colors p-8 list-none">
                <span className="flex items-center justify-between">
                  <span>How do I get started?</span>
                  <span className="text-[#8b6914] text-2xl ml-4 group-open:rotate-45 transition-transform">+</span>
                </span>
              </summary>
              <div className="px-8 pb-8">
                <p className="text-[#4a4a4a] leading-relaxed font-light text-lg pt-4 border-t border-[#e8e6e3]">
                  Placeholder answer outlining the first steps: how to book an initial consultation, 
                  what information to prepare, what to expect in your first session, and how we&apos;ll 
                  design your personalized plan together.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="book" className="py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-[#1e4d72]/95 to-[#1a1a1a] text-[#f5f3f0]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-serif font-light mb-8 text-[#f5f3f0] tracking-tight">
            Ready to Begin?
          </h2>
          <p className="text-2xl text-[#e8e6e3] mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            Take the first step toward calm clarity and forward momentum. 
            Book your initial consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="#contact"
              className="px-12 py-5 bg-[#d4af37] text-[#1a1a1a] rounded-full text-base font-light tracking-wide hover:bg-[#c9a530] transition-all hover:shadow-2xl uppercase"
            >
              Book a Session
            </a>
            <a
              href="#faq"
              className="px-12 py-5 border border-[#d4af37] text-[#d4af37] rounded-full text-base font-light tracking-wide hover:bg-[#d4af37]/10 transition-all uppercase"
            >
              Learn More
            </a>
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
                  <a href="#services" className="hover:text-white transition-colors">
                    1:1 Coaching
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Mind-Body Sessions
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Reiki-Supported Reset
                  </a>
                </li>
                <li>
                  <a href="#book" className="hover:text-white transition-colors">
                    Book a Session
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-light mb-6 text-sm uppercase tracking-widest">Connect</h4>
              <ul className="space-y-3 text-[#9a9a9a] font-light">
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
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
