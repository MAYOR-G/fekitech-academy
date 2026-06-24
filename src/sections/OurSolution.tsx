import { useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ShaderGradientCustom from '../components/ShaderGradientCustom';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  'We train.',
  'We help students build professional portfolios.',
  'We create real workplace opportunities.',
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
            once: true,
          },
        }
      );

      // Solution items stagger
      gsap.fromTo(
        itemsRef.current?.querySelectorAll('.solution-item') || [],
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: itemsRef.current,
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
      className="relative py-24 lg:py-32 bg-[hsl(var(--brand-light))] overflow-hidden"
    >
      <ShaderGradientCustom animate="on" opacity={0.80} />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-white/75" />
      <div className="absolute inset-0 z-[1] bg-dots opacity-30 mix-blend-multiply pointer-events-none" />

      {/* Decorative background element */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 -translate-y-1/2 translate-x-1/2"
        style={{ background: 'radial-gradient(circle, hsl(260,70%,55%), transparent 70%)' }}
      />

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.12fr_0.88fr] gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1 lg:scale-[1.05]">
              <div className="relative rounded-[30px] overflow-hidden shadow-2xl shadow-slate-900/12 aspect-[16/11] border border-white">
                <img
                  src="/our_solution_image.png"
                  alt="Professional instructor guiding a group of adult learners in a digital learning environment"
                  className="absolute inset-0 w-full h-full object-cover"
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
              <div className="absolute -bottom-4 right-4 md:-bottom-8 md:-right-4 lg:-right-8 bg-[hsl(var(--brand-navy))] rounded-2xl p-4 md:p-6 shadow-xl max-w-[85%] md:max-w-xs border border-white/10 soft-glow-cyan shadow-[inset_0_2px_20px_rgba(255,255,255,0.1)]">
                <p className="text-white/90 text-xs md:text-sm leading-relaxed">
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
                    className="solution-item flex items-start gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white hover:shadow-lg hover:-translate-y-1 border border-gray-100 hover:border-[hsl(var(--brand-purple))]/30 transition-all duration-300 group"
                  >
                    <div className="w-7 h-7 rounded-full bg-[hsla(var(--brand-purple),0.1)] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[hsl(var(--brand-purple))] transition-colors duration-300 shadow-sm">
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
