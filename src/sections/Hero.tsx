import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import gsap from 'gsap';
import CountUp from '../components/CountUp';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Subtle overlay fade
      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        0
      );

      // Headline words stagger in
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.hero-word');
        tl.fromTo(
          words,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.12 },
          0.2
        );
      }

      // Subheadline
      tl.fromTo(
        subRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.6
      );

      // CTA buttons
      tl.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.8
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_bg.jpg"
          alt="Professional training workshop environment"
          className="w-full h-full object-cover"
        />
        {/* Very subtle gradient overlay for text readability - NOT heavy darkening */}
        <div
          ref={overlayRef}
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(11,12,16,0.55) 0%, rgba(11,12,16,0.35) 50%, rgba(11,12,16,0.5) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20 pt-24 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="mb-6">
            <span className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium tracking-wide border border-white/20">
              Feki Tech Job Ready Academy
            </span>
          </div>

          {/* Main Headline */}
          <div ref={headlineRef} className="mb-8">
            <h1 className="text-white font-bold leading-[0.95] tracking-[-0.03em]">
              <span className="hero-word block text-[clamp(2.5rem,6vw,5.5rem)] mb-2">
                From Unemployed
              </span>
              <span className="hero-word block text-[clamp(2.5rem,6vw,5.5rem)]">
                to{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">Job-Ready</span>
                  <span
                    className="absolute bottom-2 left-0 right-0 h-4 rounded-sm -z-0"
                    style={{
                      background: 'linear-gradient(90deg, hsl(260,70%,55%), hsl(190,85%,55%))',
                      opacity: 0.6,
                    }}
                  />
                </span>
                .
              </span>
            </h1>
          </div>

          {/* Subtext */}
          <p
            ref={subRef}
            className="text-white/85 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light"
          >
            We help graduates, career changers, and job seekers bridge the gap between
            education and employment through practical training, portfolio projects,
            job simulations, and career support.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/programs"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[hsl(var(--brand-navy))] rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-[0_12px_40px_rgba(255,255,255,0.25)] hover:-translate-y-0.5"
            >
              Explore Programs
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white rounded-full font-semibold text-sm border-2 border-white/40 transition-all duration-300 hover:bg-white/10 hover:border-white/60"
            >
              <Play size={16} className="fill-white" />
              Start Your Career Journey
            </Link>
          </div>

          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto">
            {[
              { value: '500+', label: 'Graduates Placed' },
              { value: '95%', label: 'Success Rate' },
              { value: '6-10', label: 'Weeks Training' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-white font-bold text-2xl md:text-3xl mb-1">
                  <CountUp value={stat.value} />
                </div>
                <div className="text-white/60 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, hsl(var(--brand-light)))',
        }}
      />
    </section>
  );
}
