import { useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  'We train.',
  'We help students build professional portfolios.',
  'We simulate real workplace experience.',
  'We provide mentorship and support.',
  'We connect learners with employers and project opportunities.',
  'We help transform potential into employability.',
];

export default function OurSolution() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

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

      // Solution items stagger
      gsap.fromTo(
        itemsRef.current?.querySelectorAll('.solution-item') || [],
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: itemsRef.current,
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
      {/* Decorative background element */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 -translate-y-1/2 translate-x-1/2"
        style={{ background: 'radial-gradient(circle, hsl(260,70%,55%), transparent 70%)' }}
      />

      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
                <img
                  src="/images/circle_c_laptop.jpg"
                  alt="Professional working on laptop in modern workspace"
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
              {/* Decorative accent */}
              <div
                className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl -z-10"
                style={{
                  background: 'linear-gradient(135deg, hsl(190,85%,55%), hsl(260,70%,55%))',
                }}
              />
              {/* Mission card overlay */}
              <div className="absolute -bottom-8 right-8 bg-[hsl(var(--brand-navy))] rounded-2xl p-6 shadow-xl max-w-xs">
                <p className="text-white/90 text-sm leading-relaxed">
                  <span className="text-[hsl(var(--brand-cyan))] font-semibold">Our mission:</span>{' '}
                  To bridge the gap between education and employment and create a new generation
                  of job-ready digital professionals.
                </p>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <span className="title-animate section-label mb-4 block">What We Do</span>
              <h2 className="title-animate text-[clamp(2rem,4vw,3.5rem)] font-bold text-[hsl(var(--brand-navy))] mb-4 leading-tight">
                Our Solution
              </h2>
              <p className="title-animate text-[hsl(var(--brand-gray))] text-lg leading-relaxed mb-8">
                At Feki Tech Job Ready Academy, we are tackling the unemployment challenge
                by helping individuals become truly job-ready. We don&apos;t just teach.
              </p>

              {/* Checklist */}
              <div ref={itemsRef} className="space-y-4 mb-10">
                {solutions.map((item, i) => (
                  <div
                    key={i}
                    className="solution-item flex items-start gap-4 p-4 rounded-xl bg-[hsl(var(--brand-light))] hover:bg-white hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-7 h-7 rounded-full bg-[hsla(var(--brand-purple),0.1)] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[hsl(var(--brand-purple))] transition-colors duration-300">
                      <Check
                        size={14}
                        className="text-[hsl(var(--brand-purple))] group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <span className="text-[hsl(var(--brand-navy))] font-medium text-sm leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Closing line + CTA */}
              <div className="title-animate">
                <p className="text-[hsl(var(--brand-navy))] font-semibold mb-6">
                  Stop sending endless applications without results.
                </p>
                <Link
                  to="/programs"
                  className="btn-primary group"
                >
                  Explore Our Programs
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
