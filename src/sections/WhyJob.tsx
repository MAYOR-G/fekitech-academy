import { useEffect, useRef } from 'react';
import { TrendingUp, FolderCheck, Building2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: TrendingUp,
    title: 'Practical Skills',
    desc: 'Learn what employers actually need',
  },
  {
    icon: FolderCheck,
    title: 'Portfolio Proof',
    desc: 'Show, don\'t just tell',
  },
  {
    icon: Building2,
    title: 'Workplace Experience',
    desc: 'Simulated real job environments',
  },
];

export default function WhyJob() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        contentRef.current?.querySelectorAll('.animate-item') || [],
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

      // Image animation
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
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation
      gsap.fromTo(
        cardsRef.current?.querySelectorAll('.highlight-card') || [],
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
      className="relative py-24 lg:py-32 bg-[hsl(var(--brand-light))]"
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div ref={contentRef}>
            <span className="animate-item section-label mb-4 block">
              The Challenge
            </span>
            <h2 className="animate-item text-[clamp(2rem,4vw,3.5rem)] font-bold text-[hsl(var(--brand-navy))] mb-6 leading-tight">
              Why You Can Get a Job
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

            {/* Highlight Cards */}
            <div ref={cardsRef} className="grid sm:grid-cols-3 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="highlight-card bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-[hsla(var(--brand-purple),0.1)] flex items-center justify-center mb-3">
                    <item.icon size={20} className="text-[hsl(var(--brand-purple))]" />
                  </div>
                  <h4 className="font-semibold text-[hsl(var(--brand-navy))] text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[hsl(var(--brand-gray))]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
              <img
                src="/images/circle_a_mentor.jpg"
                alt="Professional mentor coaching a group in a modern workspace"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
              {/* Subtle purple accent corner */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10"
                style={{
                  background: 'linear-gradient(135deg, hsl(260,70%,55%), hsl(190,85%,55%))',
                }}
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-50">
              <div className="text-3xl font-bold text-[hsl(var(--brand-purple))] mb-1">87%</div>
              <div className="text-xs text-[hsl(var(--brand-gray))]">
                of employers value<br />portfolio over certificates
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
