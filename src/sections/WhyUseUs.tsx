import { useEffect, useRef } from 'react';
import { ArrowRight, Check, CircleDot, GraduationCap, X } from 'lucide-react';
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
  'Create jobs',
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
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="title-animate section-label mb-4 block">Comparison</span>
            <h2 className="title-animate text-[clamp(2rem,4vw,3.5rem)] font-bold text-[hsl(var(--brand-navy))] mb-4">
              Why Use Us
            </h2>
            <p className="title-animate text-[hsl(var(--brand-gray))] text-lg max-w-2xl mx-auto">
              See how Feki Tech Job Ready Academy compares to traditional training programs.
            </p>
          </div>

          <div ref={cardsRef} className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="compare-card rounded-3xl border border-slate-200 bg-slate-50/70 p-6 lg:p-8 shadow-sm">
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                    Traditional route
                  </p>
                  <h3 className="text-2xl font-bold text-slate-950">Other Academies</h3>
                </div>
              </div>

              <div className="space-y-3">
                {otherAcademies.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-red-400">
                      <X size={14} />
                    </span>
                    <span className="font-medium text-slate-500">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="compare-card rounded-3xl border border-[hsl(var(--brand-purple))]/20 bg-white p-6 lg:p-8 shadow-[0_24px_70px_rgba(67,56,202,0.13)]">
              <div className="mb-7 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsla(var(--brand-purple),0.1)] text-[hsl(var(--brand-purple))]">
                    <Check size={23} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[hsl(var(--brand-purple))]">
                      Fekitech advantage
                    </p>
                    <h3 className="text-2xl font-bold text-slate-950">
                      Feki Tech Job Ready Academy
                    </h3>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                  <CircleDot size={14} />
                  Built for outcomes
                </div>
              </div>

              <div className="grid gap-3">
                {ourAcademy.map((item) => (
                  <div key={item} className="flex w-full items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <Check size={14} />
                    </span>
                    <span className="font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex w-full items-center gap-2 rounded-2xl bg-[hsla(var(--brand-purple),0.08)] px-4 py-3 text-sm font-semibold text-[hsl(var(--brand-purple))]">
                Training, portfolio, job creation, and support stay connected.
                <ArrowRight size={15} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
