import { useEffect, useRef } from 'react';
import { Target, Eye, Heart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To transform learners into job-ready professionals through hands-on training, real-world projects, mentorship, and career support.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    desc: 'To create a new generation of skilled professionals equipped to succeed in the modern workforce and contribute meaningfully to businesses.',
  },
  {
    icon: Heart,
    title: 'Our Belief',
    desc: 'Learning should lead to opportunities. We don\'t just teach theory—we prepare individuals for the workplace.',
  },
];

export default function About() {
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
      className="relative py-24 lg:py-32 bg-[hsl(var(--brand-light))]"
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            {/* Image */}
            <div className="animate-item relative">
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
                <img
                  src="/images/circle_e_presenting.jpg"
                  alt="Professional presenting to a learning group"
                  className="w-full object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
              {/* Decorative accent */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10"
                style={{
                  background: 'linear-gradient(135deg, hsl(260,70%,55%), hsl(190,85%,55%))',
                }}
              />
            </div>

            {/* Content */}
            <div>
              <span className="animate-item section-label mb-4 block">About Us</span>
              <h2 className="animate-item text-[clamp(2rem,4vw,3.5rem)] font-bold text-[hsl(var(--brand-navy))] mb-6 leading-tight">
                About Feki Tech<br />Job Ready Academy
              </h2>
              <p className="animate-item text-[hsl(var(--brand-gray))] text-lg leading-relaxed mb-4">
                Feki Tech Job Ready Academy was created to bridge the gap between education
                and employment by equipping individuals with practical, industry-relevant
                skills that employers are looking for.
              </p>
              <p className="animate-item text-[hsl(var(--brand-gray))] leading-relaxed mb-4">
                In today&apos;s competitive job market, many talented people struggle to secure
                employment despite submitting hundreds of applications. Traditional learning
                often provides knowledge but lacks the practical experience and portfolio
                required to stand out.
              </p>
              <p className="animate-item text-[hsl(var(--brand-navy))] font-semibold text-lg leading-relaxed">
                At Feki Tech Job Ready Academy, we believe learning should lead to opportunities.
              </p>
            </div>
          </div>

          {/* Value Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((item, i) => (
              <div
                key={i}
                className="animate-item bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[hsla(var(--brand-purple),0.1)] flex items-center justify-center mb-5">
                  <item.icon size={24} className="text-[hsl(var(--brand-purple))]" />
                </div>
                <h3 className="text-lg font-bold text-[hsl(var(--brand-navy))] mb-3">
                  {item.title}
                </h3>
                <p className="text-[hsl(var(--brand-gray))] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
