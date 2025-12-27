import Image from "next/image";
import { MessageCircle, Waves, Sun, Compass, Shield, Target } from "lucide-react";
import CredentialAccordion from "@/components/CredentialAccordion";

const btnPrimary = "bg-[#c8a84a] text-black border border-black/10 hover:bg-[#b99633] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/30 rounded-full font-light tracking-wide uppercase";
const btnSecondary = "bg-white/60 text-black border border-[#c8a84a] hover:bg-[#c8a84a] hover:text-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/30 rounded-full font-light tracking-wide uppercase";

export default function Home() {
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
              <a href="#testimonials" className="text-[#4a4a4a] hover:text-[#b99633] transition-colors text-sm tracking-wide uppercase">
                Testimonials
              </a>
              <a
                href="#book"
                className={`px-8 py-2.5 text-sm ${btnPrimary}`}
              >
                Book a Session
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-6 pb-32 px-6 sm:px-8 lg:px-12 overflow-hidden min-h-[460px] md:min-h-[520px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            className="object-cover blur-[1px] -scale-x-100"
            style={{ 
              objectFit: 'cover', 
              objectPosition: 'right center', 
              opacity: 0.45,
              filter: 'contrast(1.08) saturate(1.06)'
            }}
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#f7f3ea] via-[#f7f3ea]/55 to-transparent"></div>
        <div className="absolute inset-0 z-[15] bg-gradient-to-l from-black/10 via-black/0 to-transparent"></div>
        <div className="relative z-20 max-w-7xl mx-auto mt-6 md:mt-10">
          <div className="max-w-5xl">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-light leading-[1.1] tracking-tight text-[#1a1a1a] mb-8">
              Move Through Obstacles with{" "}
              <span className="font-normal text-[#8b6914]">Calm Clarity</span>
          </h1>
            <p className="text-2xl sm:text-3xl text-[#4a4a4a] leading-relaxed mb-12 max-w-3xl font-light">
              Life coaching that combines clarity-focused guidance with movement and energy work. 
              Build forward momentum with personalised support, wherever you are in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 mb-8">
              <a
                href="#book"
                className={`px-10 py-4 text-base text-center ${btnPrimary}`}
              >
                Book a Session
              </a>
              <a
                href="/how-it-works"
                className={`px-10 py-4 text-base text-center ${btnSecondary}`}
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
          <CredentialAccordion />
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
              <Compass className="w-[22px] h-[22px] text-[#b99633]/70 mb-6" strokeWidth={1.5} />
              <h3 className="text-3xl font-serif font-light mb-6 text-[#1a1a1a]">Clarity</h3>
              <p className="text-[#4a4a4a] leading-relaxed font-light text-lg">
                Navigate through the fog of stress and overwhelm. Gain perspective on what truly 
                matters and design a path forward aligned with your deepest values and aspirations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white to-[#faf9f7] rounded-2xl p-12 shadow-sm border border-[#e8e6e3] hover:shadow-lg transition-all">
              <Shield className="w-[22px] h-[22px] text-[#b99633]/70 mb-6" strokeWidth={1.5} />
              <h3 className="text-3xl font-serif font-light mb-6 text-[#1a1a1a]">Resilience</h3>
              <p className="text-[#4a4a4a] leading-relaxed font-light text-lg">
                Build inner strength through integrated movement and mindful practices. Develop 
                the capacity to weather transitions and emerge stronger, more centred, and capable.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white to-[#faf9f7] rounded-2xl p-12 shadow-sm border border-[#e8e6e3] hover:shadow-lg transition-all">
              <Target className="w-[22px] h-[22px] text-[#b99633]/70 mb-6" strokeWidth={1.5} />
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
            A thoughtful, personalised journey designed around your unique needs
          </p>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-center">
            <div className="space-y-12 order-2 md:order-1">
              <div className="relative">
                <div className="absolute -left-6 top-0 text-8xl font-serif font-light text-[#d4af37]/10 -z-10">
                  01
                </div>
                <h3 className="text-3xl font-serif font-light mb-6 text-[#1a1a1a]">Initial Discovery</h3>
                <p className="text-[#4a4a4a] leading-relaxed font-light text-lg">
                  We begin with an intimate conversation to understand where you are, what you&apos;re 
                  facing, and where you want to go. This foundation informs every aspect of our work together.
                </p>
                <details className="mt-4">
                  <summary className="cursor-pointer text-[#8b6914] hover:text-[#1a1a1a] transition-colors font-light text-lg inline-block">
                    Read more
                  </summary>
                  <div className="mt-4 space-y-4 text-[#4a4a4a] leading-relaxed font-light text-lg">
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
                    <div className="mt-6">
                      <p className="font-medium text-[#1a1a1a] mb-3">What you can expect:</p>
                      <ul className="space-y-2 ml-4">
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
                    <p className="mt-4">
                      <span className="font-medium text-[#1a1a1a]">Format:</span> Online (Zoom) or in-person (Dubai)
                    </p>
                    <div className="mt-6">
                      <a href="/how-it-works#discovery" className="text-[#8b6914] hover:text-[#1a1a1a] transition-colors font-light">
                        View full details →
                      </a>
                    </div>
                  </div>
                </details>
              </div>
              <div className="relative">
                <div className="absolute -left-6 top-0 text-8xl font-serif font-light text-[#d4af37]/10 -z-10">
                  02
                </div>
                <h3 className="text-3xl font-serif font-light mb-6 text-[#1a1a1a]">Personalised Plan</h3>
                <p className="text-[#4a4a4a] leading-relaxed font-light text-lg">
                  Together, we craft a bespoke approach that weaves together coaching conversations, 
                  movement practices, and energy healing, tailored specifically to your goals and lifestyle.
                </p>
                <details className="mt-4">
                  <summary className="cursor-pointer text-[#8b6914] hover:text-[#1a1a1a] transition-colors font-light text-lg inline-block">
                    Read more
                  </summary>
                  <div className="mt-4 space-y-4 text-[#4a4a4a] leading-relaxed font-light text-lg">
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
                    <div className="mt-6">
                      <p className="font-medium text-[#1a1a1a] mb-3">What this stage focuses on:</p>
                      <ul className="space-y-2 ml-4">
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
                    <p className="mt-4">
                      <span className="font-medium text-[#1a1a1a]">Format:</span> Online worldwide / Dubai-based sessions available
                    </p>
                    <div className="mt-6">
                      <a href="/how-it-works#plan" className="text-[#8b6914] hover:text-[#1a1a1a] transition-colors font-light">
                        View full details →
                      </a>
                    </div>
                  </div>
                </details>
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
                <details className="mt-4">
                  <summary className="cursor-pointer text-[#8b6914] hover:text-[#1a1a1a] transition-colors font-light text-lg inline-block">
                    Read more
                  </summary>
                  <div className="mt-4 space-y-4 text-[#4a4a4a] leading-relaxed font-light text-lg">
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
                    <div className="mt-6">
                      <p className="font-medium text-[#1a1a1a] mb-3">Common outcomes:</p>
                      <ul className="space-y-2 ml-4">
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
                    <p className="mt-4">
                      <span className="font-medium text-[#1a1a1a]">Format:</span> Ongoing online support, anywhere in the world
                    </p>
                    <div className="mt-6">
                      <a href="/how-it-works#support" className="text-[#8b6914] hover:text-[#1a1a1a] transition-colors font-light">
                        View full details →
                      </a>
                    </div>
                  </div>
                </details>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#e8e6e3] aspect-[4/5]">
                <Image
                  src="/images/process.jpg"
                  alt="Coaching process"
                  fill
                  className="object-cover"
                  style={{ filter: 'saturate(0.9) contrast(0.98) brightness(1.03)' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[#b08a55]/[0.08]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-20 max-w-6xl mx-auto items-center">
            <div>
              <h2 className="text-5xl sm:text-6xl font-serif font-light mb-6 text-[#1a1a1a] tracking-tight">
                Services
              </h2>
              <p className="text-xl text-[#6a6a6a] mb-4 font-light">
                From Dubai or Zoom
              </p>
              <p className="text-[#4a4a4a] leading-relaxed font-light text-lg">
                Our integrated approach combines life coaching, mindful movement, and energy healing 
                to support your transformation. Each session is tailored to your unique needs and goals.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#e8e6e3] aspect-[4/3]">
              <Image
                src="/images/method.jpg"
                alt="Holistic coaching method"
                fill
                className="object-cover"
                style={{ filter: 'saturate(0.9) contrast(0.98) brightness(1.03)' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#b08a55]/[0.08]"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex h-full flex-col bg-gradient-to-br from-white to-[#faf9f7] rounded-2xl p-10 shadow-sm border border-[#e8e6e3] hover:shadow-xl transition-all">
              <div>
                <MessageCircle className="w-[22px] h-[22px] text-[#b99633]/70 mb-6" strokeWidth={1.5} />
                <h3 className="text-3xl font-serif font-light mb-4 text-[#1a1a1a]">1:1 Coaching</h3>
                <p className="text-[#4a4a4a] leading-relaxed mb-8 font-light text-lg">
                  Deep, transformative coaching conversations that help you break through limiting 
                  patterns, clarify your direction, and create meaningful change in your life.
                </p>
                <ul className="space-y-3 text-[#4a4a4a] mb-6 font-light">
                      <li className="flex items-start">
                    <span className="text-[#8b6914] mr-3">•</span>
                    <span>Personalised goal-setting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8b6914] mr-3">•</span>
                    <span>Obstacle navigation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8b6914] mr-3">•</span>
                    <span>Life transition support</span>
                  </li>
                </ul>
                <details className="mb-6">
                  <summary className="cursor-pointer text-[#8b6914] hover:text-[#1a1a1a] transition-colors font-light text-base inline-block">
                    Read more
                  </summary>
                  <div className="mt-4 space-y-4 text-[#4a4a4a] leading-relaxed font-light text-base">
                    <p>
                      This is deep, focused, one-to-one work designed to help you navigate complexity with clarity and confidence.
                    </p>
                    <p>
                      Sessions are conversational, practical, and grounded, not abstract or motivational. We work with real situations: career crossroads, relationship dynamics, identity shifts, burnout, or the quiet sense that something needs to change.
                    </p>
                    <p>
                      This service is ideal if you value thoughtful dialogue, reflection, and accountability, without pressure or performance.
                    </p>
                    <div className="mt-6">
                      <p className="font-medium text-[#1a1a1a] mb-3">Includes:</p>
                      <ul className="space-y-2 ml-4">
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
                    <p className="mt-4">
                      <span className="font-medium text-[#1a1a1a]">Best for:</span> Professionals facing change, pressure, or life realignment
                    </p>
                    <p>
                      <span className="font-medium text-[#1a1a1a]">Format:</span> Online worldwide / Dubai-based sessions available
                    </p>
                    <div className="mt-6">
                      <a href="/services#coaching" className="text-[#8b6914] hover:text-[#1a1a1a] transition-colors font-light">
                        View full service →
                      </a>
                    </div>
                  </div>
                </details>
              </div>
              <div className="mt-auto">
                <a
                  href="#book"
                  className={`block w-full text-center px-8 py-4 text-sm ${btnSecondary}`}
                >
                  Book Now
                </a>
              </div>
            </div>
            <div className="flex h-full flex-col bg-gradient-to-br from-white to-[#faf9f7] rounded-2xl p-10 shadow-sm border border-[#e8e6e3] hover:shadow-xl transition-all">
              <div>
                <Waves className="w-[22px] h-[22px] text-[#b99633]/70 mb-6" strokeWidth={1.5} />
                <h3 className="text-3xl font-serif font-light mb-4 text-[#1a1a1a]">Mind-Body Sessions</h3>
                <p className="text-[#4a4a4a] leading-relaxed mb-8 font-light text-lg">
                  Integrated Pilates and yoga practices that strengthen your body while cultivating 
                  mental clarity, emotional balance, and profound mind-body connection.
                </p>
                <ul className="space-y-3 text-[#4a4a4a] mb-6 font-light">
                      <li className="flex items-start">
                    <span className="text-[#1e4d72] mr-3">•</span>
                    <span>Pilates for core strength</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1e4d72] mr-3">•</span>
                    <span>Yoga for flexibility & calm</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1e4d72] mr-3">•</span>
                    <span>Movement as meditation</span>
                  </li>
                </ul>
                <details className="mb-6">
                  <summary className="cursor-pointer text-[#8b6914] hover:text-[#1a1a1a] transition-colors font-light text-base inline-block">
                    Read more
                  </summary>
                  <div className="mt-4 space-y-4 text-[#4a4a4a] leading-relaxed font-light text-base">
                    <p>
                      These sessions integrate coaching with mindful movement practices to support both mental clarity and physical wellbeing.
                    </p>
                    <p>
                      Movement is used not as exercise for performance, but as a way to reconnect with your body, regulate stress, and access deeper awareness. Pilates and yoga are adapted to your energy levels, experience, and needs, always gentle, always respectful.
                    </p>
                    <p>
                      This approach is particularly effective for clients who think a lot, carry stress physically, or feel disconnected from their bodies during demanding periods of life.
                    </p>
                    <div className="mt-6">
                      <p className="font-medium text-[#1a1a1a] mb-3">Includes:</p>
                      <ul className="space-y-2 ml-4">
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
                    <p className="mt-4">
                      <span className="font-medium text-[#1a1a1a]">Best for:</span> Stress management, reconnection, emotional balance
                    </p>
                    <p>
                      <span className="font-medium text-[#1a1a1a]">Format:</span> Online sessions tailored to your space and schedule
                    </p>
                    <div className="mt-6">
                      <a href="/services#mind-body" className="text-[#8b6914] hover:text-[#1a1a1a] transition-colors font-light">
                        View full service →
                      </a>
                    </div>
                  </div>
                </details>
              </div>
              <div className="mt-auto">
                <a
                  href="#book"
                  className={`block w-full text-center px-8 py-4 text-sm ${btnSecondary}`}
                >
                  Book Now
                </a>
              </div>
            </div>
            <div className="flex h-full flex-col bg-gradient-to-br from-white to-[#faf9f7] rounded-2xl p-10 shadow-sm border border-[#e8e6e3] hover:shadow-xl transition-all">
              <div>
                <Sun className="w-[22px] h-[22px] text-[#b99633]/70 mb-6" strokeWidth={1.5} />
                <h3 className="text-3xl font-serif font-light mb-4 text-[#1a1a1a]">Reiki-Supported Reset</h3>
                <p className="text-[#4a4a4a] leading-relaxed mb-8 font-light text-lg">
                  Energy healing sessions that release blockages, restore balance, and support your 
                  journey towards wholeness. Deep relaxation meets profound transformation.
                </p>
                <ul className="space-y-3 text-[#4a4a4a] mb-6 font-light">
                      <li className="flex items-start">
                    <span className="text-[#8b6914] mr-3">•</span>
                    <span>Energetic clearing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8b6914] mr-3">•</span>
                    <span>Stress & tension release</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8b6914] mr-3">•</span>
                    <span>Holistic restoration</span>
                  </li>
                </ul>
                <details className="mb-6">
                  <summary className="cursor-pointer text-[#8b6914] hover:text-[#1a1a1a] transition-colors font-light text-base inline-block">
                    Read more
                  </summary>
                  <div className="mt-4 space-y-4 text-[#4a4a4a] leading-relaxed font-light text-base">
                    <p>
                      This offering focuses on deep rest, energetic balance, and nervous-system regulation.
                    </p>
                    <p>
                      Reiki-supported sessions are quiet, restorative, and intentionally unhurried. They help release accumulated tension, mental fatigue, and emotional overload, creating space for clarity and renewal.
                    </p>
                    <p>
                      These sessions can stand alone or complement coaching work, particularly during periods of exhaustion, overwhelm, or transition.
                    </p>
                    <div className="mt-6">
                      <p className="font-medium text-[#1a1a1a] mb-3">Includes:</p>
                      <ul className="space-y-2 ml-4">
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
                    <p className="mt-4">
                      <span className="font-medium text-[#1a1a1a]">Best for:</span> Resetting during burnout, emotional fatigue, or high stress
                    </p>
                    <p>
                      <span className="font-medium text-[#1a1a1a]">Note:</span> This is a supportive wellbeing practice and not a medical or therapeutic treatment
                    </p>
                    <p>
                      <span className="font-medium text-[#1a1a1a]">Format:</span> Online / Dubai-based sessions available
                    </p>
                    <div className="mt-6">
                      <a href="/services#reiki" className="text-[#8b6914] hover:text-[#1a1a1a] transition-colors font-light">
                        View full service →
                      </a>
                    </div>
                  </div>
                </details>
              </div>
              <div className="mt-auto">
                <a
                  href="#book"
                  className={`block w-full text-center px-8 py-4 text-sm ${btnSecondary}`}
                >
                  Book Now
                </a>
              </div>
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
              <p className="text-[#4a4a4a] leading-relaxed mb-4 font-light text-lg">
                Working with Dalila came at a time when I felt emotionally exhausted and stuck in patterns I couldn&apos;t seem to shift on my own. From our very first session, she created a calm, grounded space where I felt genuinely seen and understood.
              </p>
              <details className="mt-4">
                <summary className="cursor-pointer text-[#8b6914] hover:text-[#1a1a1a] transition-colors font-light text-base inline-block">
                  Read more
                </summary>
                <div className="mt-4 space-y-4 text-[#4a4a4a] leading-relaxed font-light text-lg">
                  <p>
                    Dalila has a rare ability to listen deeply without judgement, while gently guiding you towards clarity. Her approach helped me reconnect with myself in a way that felt natural and sustainable, not forced. I now feel more confident in my decisions, calmer in my responses, and far more aligned with how I want to live.
                  </p>
                  <p>
                    Her work has been truly transformative for me.
                  </p>
                </div>
              </details>
              <div className="mt-8 text-[#1a1a1a] font-light text-base">
                Rana M. · Dubai · Lebanese
              </div>
            </div>
            <div className="bg-gradient-to-br from-white to-[#faf9f7] rounded-2xl p-10 shadow-sm border border-[#e8e6e3]">
              <p className="text-[#4a4a4a] leading-relaxed mb-4 font-light text-lg">
                I originally approached Dalila during a period of professional burnout and personal uncertainty. What struck me immediately was her calm authority and depth of experience. She doesn&apos;t offer quick fixes or clichés. Instead, she helps you see things clearly and take meaningful, grounded steps forward.
              </p>
              <details className="mt-4">
                <summary className="cursor-pointer text-[#8b6914] hover:text-[#1a1a1a] transition-colors font-light text-base inline-block">
                  Read more
                </summary>
                <div className="mt-4 space-y-4 text-[#4a4a4a] leading-relaxed font-light text-lg">
                  <p>
                    Our sessions gave me space to slow down, reflect, and reset. The integration of conversation with body awareness was particularly powerful and something I hadn&apos;t experienced before. Over time, I noticed real changes in how I handle pressure and make decisions.
                  </p>
                  <p>
                    Dalila&apos;s coaching has had a lasting impact on both my work and personal life.
                  </p>
                </div>
              </details>
              <div className="mt-8 text-[#1a1a1a] font-light text-base">
                Paul S. · London · UK
              </div>
            </div>
            <div className="bg-gradient-to-br from-white to-[#faf9f7] rounded-2xl p-10 shadow-sm border border-[#e8e6e3]">
              <p className="text-[#4a4a4a] leading-relaxed mb-4 font-light text-lg">
                Dalila&apos;s coaching came into my life at a moment of quiet overwhelm. I wasn&apos;t in crisis, but I felt disconnected and unsure of my direction. Her gentle yet insightful approach helped me uncover what was really holding me back.
              </p>
              <details className="mt-4">
                <summary className="cursor-pointer text-[#8b6914] hover:text-[#1a1a1a] transition-colors font-light text-base inline-block">
                  Read more
                </summary>
                <div className="mt-4 space-y-4 text-[#4a4a4a] leading-relaxed font-light text-lg">
                  <p>
                    Dalila brings warmth, wisdom, and a deep sense of presence to every session. She helped me build trust in myself again and find clarity without feeling pushed or rushed. I particularly valued how she integrates practical guidance with emotional and physical awareness.
                  </p>
                  <p>
                    The transformation has been subtle but profound. I feel more grounded, more balanced, and far more confident in navigating change.
                  </p>
                </div>
              </details>
              <div className="mt-8 text-[#1a1a1a] font-light text-base">
                Priya K. · Singapore · Indian
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a href="/testimonials" className="text-[#8b6914] hover:text-[#1a1a1a] transition-colors font-light text-base">
              View all testimonials →
            </a>
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
                  design your personalised plan together.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/closing.jpg"
            alt=""
            fill
            className="object-cover"
            style={{ 
              objectFit: 'cover', 
              objectPosition: 'center'
            }}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/30 z-10"></div>
        <div className="relative z-20 px-6 sm:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl sm:text-6xl font-serif font-light mb-8 text-[#1a1a1a] tracking-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]">
              Ready to Begin?
            </h2>
            <p className="text-2xl text-[#1a1a1a] mb-12 leading-relaxed max-w-3xl mx-auto font-light drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]">
              Take the first step towards calm clarity and forward momentum. 
              Book your initial consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="#contact"
                className={`px-12 py-5 text-base ${btnPrimary}`}
              >
                Book a Session
              </a>
              <a
                href="#faq"
                className={`px-12 py-5 text-base ${btnSecondary}`}
              >
                Learn More
              </a>
            </div>
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
                  <a href="/how-it-works" className="hover:text-white transition-colors">
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
