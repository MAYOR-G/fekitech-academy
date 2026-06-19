import { useEffect, useRef, useState } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);

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
            once: true,
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'linear-gradient(135deg, hsl(var(--brand-purple)) 0%, hsl(var(--brand-magenta)) 100%)',
      }}
    >
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 bg-[hsl(var(--brand-navy))] transition-colors duration-1000" />
      <div 
        className="absolute inset-0 bg-mesh-premium mix-blend-screen transition-opacity duration-1000"
        style={{ opacity: isHovered ? 0.8 : 0.4 }}
      />

      {/* Glowing Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[hsl(var(--brand-purple))] rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[hsl(var(--brand-cyan))] rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-float-slow pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[hsl(var(--brand-magenta))] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse-slow pointer-events-none" style={{ animationDelay: '1s' }} />
      
      {/* Background World Map */}
      <div className="absolute inset-0 bg-world-map opacity-20 mix-blend-overlay" style={{ backgroundPosition: 'center' }} />

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
                className="absolute bottom-1 left-0 right-0 h-3 rounded-sm -z-0 opacity-80"
                style={{ background: 'hsl(var(--brand-cyan))' }}
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
                <item.icon size={16} className="text-[hsl(var(--brand-cyan))]" />
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
              className="px-8 py-4 bg-white text-[hsl(var(--brand-purple))] font-bold rounded-full hover:bg-[hsl(var(--brand-cyan))] hover:text-white transition-all transform hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              Apply Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/5 text-white font-bold rounded-full border border-white/20 hover:border-white/50 hover:bg-white/10 backdrop-blur-md transition-all shadow-sm w-full sm:w-auto flex items-center justify-center gap-2"
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
