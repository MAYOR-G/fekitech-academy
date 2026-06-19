import { useEffect, useRef, useState } from 'react';

const heroImages = [
  '/images/hero_bg.jpg',
  '/images/circle_a_mentor.jpg',
  '/images/circle_c_laptop.jpg',
  '/images/circle_d_meeting.jpg'
];
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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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
      className="relative w-full h-full"
    >
      {/* Background Images (Sticky) */}
      <div className="sticky top-0 left-0 w-full h-[100vh] h-[100svh] z-0 bg-black overflow-hidden">
        {heroImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Academy environment ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Content (Absolute at top, scrolls normally) */}
      <div className="absolute top-0 left-0 w-full h-[100vh] h-[100svh] z-10 px-6 lg:px-12 xl:px-20 pt-24 pb-16 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-5xl mx-auto text-center pointer-events-auto">
          {/* Eyebrow */}
          <div className="mb-6">
            <span className="inline-block px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-white font-bold tracking-wide border border-white/40 shadow-lg" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
              Feki Tech Job Ready Academy
            </span>
          </div>

          {/* Main Headline */}
          <div ref={headlineRef} className="mb-8">
            <h1 className="text-white font-black leading-[0.95] tracking-[-0.03em]" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.5)' }}>
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
                      background: 'linear-gradient(90deg, hsl(var(--brand-purple)), hsl(var(--brand-cyan)))',
                      opacity: 0.8,
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
            className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-medium"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}
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

      {/* Cloud shadow removed */}
    </section>
  );
}
