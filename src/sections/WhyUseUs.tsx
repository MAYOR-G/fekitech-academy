import { useEffect, useRef } from 'react';
import { X, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ShaderGradientBackground from '../components/ShaderGradientBackground';

gsap.registerPlugin(ScrollTrigger);

const otherAcademies = [
  'Teach topics',
  'Give certificate',
  'Stop',
];

const ourAcademy = [
  'Train',
  'Build portfolio',
  'Certificate',
  'Simulate job',
  'Place into work',
  'Track career levels',
  'Mentorship and support',
];

export default function WhyUseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        sectionRef.current?.querySelectorAll('.title-animate') || [],
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

      // Cards animation
      gsap.fromTo(
        cardsRef.current?.querySelectorAll('.compare-card') || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
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
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background world map & premium mesh */}
      <div className="absolute inset-0 bg-mesh-premium opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-world-map opacity-20 pointer-events-none mix-blend-multiply" style={{ backgroundPosition: 'center' }} />
      
      {/* Decorative elements */}
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5 translate-y-1/2 -translate-x-1/2"
        style={{ background: 'radial-gradient(circle, hsl(190,85%,55%), transparent 70%)' }}
      />

      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="title-animate section-label mb-4 block">Comparison</span>
            <h2 className="title-animate text-[clamp(2rem,4vw,3.5rem)] font-bold text-[hsl(var(--brand-navy))] mb-4">
              Why Use Us
            </h2>
            <p className="title-animate text-[hsl(var(--brand-gray))] text-lg max-w-2xl mx-auto">
              See how Feki Tech Job Ready Academy compares to traditional training programs.
            </p>
          </div>

          {/* Comparison Cards */}
          <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Other Academies */}
            <div className="compare-card bg-white/60 backdrop-blur-md rounded-[28px] p-8 lg:p-10 border border-gray-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10 opacity-50 transition-transform duration-500 group-hover:scale-110" />
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center border border-red-100">
                  <X size={20} className="text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--brand-navy))]">
                  Other Academies
                </h3>
              </div>
              <ul className="space-y-4">
                {otherAcademies.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 border border-red-100">
                      <X size={12} className="text-red-400" />
                    </div>
                    <span className="text-[hsl(var(--brand-gray))] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Academy */}
            <div
              className="compare-card rounded-[28px] p-8 lg:p-10 relative overflow-hidden shadow-2xl shadow-[hsl(var(--brand-purple))]/20 bg-[hsl(var(--brand-purple))]"
            >
              <ShaderGradientBackground animate="on" opacity={0.8} />
              <div className="pointer-events-none absolute inset-0 z-[1] bg-[#0F1A2E]/25" />
              
              {/* Card internal world map */}
              <div className="absolute inset-0 bg-world-map opacity-10 mix-blend-overlay pointer-events-none z-[2]" />
              
              {/* Glow effect */}
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-30 mix-blend-screen z-[2]"
                style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.8), transparent 70%)' }}
              />
              {/* Glass/Glow Inner Border */}
              <div className="absolute inset-0 rounded-[28px] border-2 border-white/20 pointer-events-none mix-blend-overlay shadow-[inset_0_0_20px_rgba(255,255,255,0.3)] z-[2]" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-emerald-400/20 backdrop-blur-md flex items-center justify-center shadow-lg border border-emerald-300/30">
                    <Check size={20} className="text-emerald-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Feki Tech Job Ready Academy
                  </h3>
                </div>
                <ul className="space-y-4">
                  {ourAcademy.map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-emerald-400/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-sm border border-emerald-300/30">
                        <Check size={12} className="text-emerald-300" />
                      </div>
                      <span className="text-white/95 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
