import { useEffect, useRef } from 'react';
import { X, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
            toggleActions: 'play none none reverse',
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
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
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
            <div className="compare-card bg-red-50/50 rounded-[28px] p-8 lg:p-10 border border-red-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                  <X size={20} className="text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--brand-navy))]">
                  Other Academies
                </h3>
              </div>
              <ul className="space-y-4">
                {otherAcademies.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <X size={12} className="text-red-500" />
                    </div>
                    <span className="text-[hsl(var(--brand-gray))] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Academy */}
            <div
              className="compare-card rounded-[28px] p-8 lg:p-10 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--brand-purple)) 0%, hsl(305, 50%, 35%) 100%)',
              }}
            >
              {/* Glow effect */}
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-30 mix-blend-screen"
                style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.8), transparent 70%)' }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg">
                    <Check size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Feki Tech Job Ready Academy
                  </h3>
                </div>
                <ul className="space-y-4">
                  {ourAcademy.map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Check size={12} className="text-white" />
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
