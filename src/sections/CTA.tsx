import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Sparkles, TrendingUp, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const statements = [
  { icon: Sparkles, text: 'Building Skills. Creating Opportunities.' },
  { icon: TrendingUp, text: 'From Learning to Employment.' },
  { icon: Users, text: 'Train. Build. Work.' },
];

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll('.animate-item') || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(260,70%,50%) 0%, hsl(270,65%,45%) 50%, hsl(230,40%,15%) 100%)',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, hsl(190,85%,55%), transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, hsl(260,70%,65%), transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand Name */}
          <div className="animate-item mb-6">
            <span className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium tracking-wide border border-white/20">
              Feki Tech Job Ready Academy
            </span>
          </div>

          {/* Headline */}
          <h2 className="animate-item text-[clamp(2rem,5vw,3.5rem)] font-bold text-white mb-6 leading-tight">
            Where Skills<br />
            <span className="relative inline-block">
              Meet Opportunity
              <span
                className="absolute bottom-1 left-0 right-0 h-3 rounded-sm -z-0 opacity-50"
                style={{ background: 'hsl(190,85%,55%)' }}
              />
            </span>
          </h2>

          {/* Statements */}
          <div className="animate-item flex flex-wrap justify-center gap-4 mb-10">
            {statements.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10"
              >
                <item.icon size={16} className="text-[hsl(190,85%,55%)]" />
                <span className="text-white/90 text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="animate-item text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Bridging the Gap Between Education and Employment.
            Transforming Talent into Careers. Your future starts with a single step.
          </p>

          {/* CTA Buttons */}
          <div className="animate-item flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-10 py-4 bg-white text-[hsl(var(--brand-navy))] rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-[0_12px_40px_rgba(255,255,255,0.25)] hover:-translate-y-0.5"
            >
              Apply Now
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-10 py-4 bg-transparent text-white rounded-full font-semibold text-sm border-2 border-white/40 transition-all duration-300 hover:bg-white/10 hover:border-white/60"
            >
              <Phone size={16} />
              Speak With an Advisor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
