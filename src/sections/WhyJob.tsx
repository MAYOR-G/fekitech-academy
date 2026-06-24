import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const jobRoles = [
  'Data Analyst',
  'Business Intelligence Analyst',
  'Business Analyst',
  'AI Support Engineer',
  'Automation Specialist',
  'Excel Reporting Analyst',
  'UX/UI Designer',
  'No-Code Web Development',
  'Startup Founder',
];

export default function WhyJob() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      const items = contentRef.current?.querySelectorAll('.animate-item');
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
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
      }

      // Image animation
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { x: 60, opacity: 0, scale: 0.95 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              once: true,
            },
          }
        );
      }

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.highlight-card');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="w-full px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-14 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div ref={contentRef} className="min-w-0">

            <h2 className="animate-item text-[clamp(2rem,4vw,3.5rem)] font-bold text-[hsl(var(--brand-navy))] mb-6 leading-tight">
              Why You Can&apos;t Get a Job
            </h2>
            <p className="animate-item text-[hsl(var(--brand-gray))] text-lg leading-relaxed mb-6">
              Thousands of talented people are struggling to find work. Many graduates
              and job seekers spend months, even years, sending hundreds of CVs without
              receiving interviews or job offers.
            </p>
            <p className="animate-item text-[hsl(var(--brand-gray))] leading-relaxed mb-8">
              The reality is that many employers are no longer looking for certificates
              alone. They want people who can demonstrate <strong className="text-[hsl(var(--brand-navy))]">practical skills</strong>,{' '}
              <strong className="text-[hsl(var(--brand-navy))]">real experience</strong>, and{' '}
              <strong className="text-[hsl(var(--brand-navy))]">proof of what they can do</strong>.
            </p>

            {/* Job Roles Marquee */}
            <div ref={cardsRef} className="relative w-full overflow-hidden mt-8">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
              
              <div className="flex w-max animate-marquee space-x-4 py-4">
                {[...jobRoles, ...jobRoles].map((role, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-gray-100 text-[hsl(var(--brand-navy))] font-semibold flex items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--brand-purple))]" />
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative min-w-0 lg:scale-[1.07]">
            <div 
              className="relative rounded-[30px] overflow-hidden shadow-2xl shadow-slate-900/12 z-10 w-full border border-slate-100"
              style={{ aspectRatio: '16/11' }}
            >
              <img
                src="/why_get_job_image.png"
                alt="Diverse group of graduates or job seekers in a modern professional setting"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              {/* Subtle purple accent corner */}
              <div
                className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-20 h-20 md:w-24 md:h-24 rounded-2xl -z-10"
                style={{
                  background: 'linear-gradient(135deg, hsl(260,70%,55%), hsl(190,85%,55%))',
                }}
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-4 left-4 md:-bottom-6 md:-left-6 bg-white rounded-2xl p-4 md:p-5 shadow-xl border border-gray-50 soft-glow-purple z-20">
              <div className="text-2xl md:text-3xl font-bold text-[hsl(var(--brand-purple))] mb-1">87%</div>
              <div className="text-[10px] md:text-xs text-[hsl(var(--brand-gray))]">
                of employers value<br />portfolio over certificates
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
