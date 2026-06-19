import { useEffect, useRef } from 'react';
import { Clock, FolderCheck, Award, Linkedin, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    title: 'Digital Careers',
    image: '/images/program_digital.jpg',
    roles: [
      'Business Analyst',
      'Web Developer',
      'UX/UI Designer',
      'Automation Builder/Specialist',
    ],
    duration: '6 - 8 weeks training',
    projects: '3–5 portfolio projects',
    capstone: '1 capstone project',
    cv: 'CV + LinkedIn setup',
    placement: 'Job placement support (2–8 weeks)',
    community: 'Access to job board/community',
    accent: 'hsl(260, 70%, 55%)',
  },
  {
    title: 'Operations & AI',
    image: '/images/program_operations.jpg',
    roles: [
      'AI/Digital Support Systems',
      'Business Analyst',
      'Account Assistant / Reporting',
      'Excel Analyst',
    ],
    duration: '8 - 10 weeks training',
    projects: '3–5 portfolio projects',
    capstone: '1 capstone project',
    cv: 'CV + LinkedIn setup',
    placement: 'Job placement support (2–8 weeks)',
    community: 'Access to job board/community',
    accent: 'hsl(220, 70%, 50%)',
  },
  {
    title: 'Business Startup',
    image: '/images/program_startup.jpg',
    roles: ['4-Week Business Manager / Startup Program'],
    features: [
      'Business idea validation',
      'MVP creation',
      'Landing page development',
      'Social and local support',
      'Free promotional materials',
      'First customer strategy',
    ],
    accent: 'hsl(190, 85%, 45%)',
  },
];

export default function Programs() {
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
        cardsRef.current?.querySelectorAll('.program-card') || [],
        { y: 50, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
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
      className="relative py-24 lg:py-32 bg-[hsl(var(--brand-light))]"
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="title-animate section-label mb-4 block">Our Programs</span>
            <h2 className="title-animate text-[clamp(2rem,4vw,3.5rem)] font-bold text-[hsl(var(--brand-navy))] mb-4">
              Programs Built for Employment
            </h2>
            <p className="title-animate text-[hsl(var(--brand-gray))] text-lg max-w-2xl mx-auto">
              Choose a pathway that matches your goals. Each program is designed with
              employers to ensure you graduate job-ready.
            </p>
          </div>

          {/* Cards Grid */}
          <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <div
                key={i}
                className="program-card bg-white rounded-[28px] overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={program.image}
                    alt={`${program.title} program`}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 opacity-80"
                    style={{
                      background: `linear-gradient(to top, ${program.accent}, transparent)`,
                    }}
                  />
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="px-4 py-1.5 rounded-full text-white text-xs font-semibold"
                      style={{ backgroundColor: program.accent }}
                    >
                      {program.title}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 flex flex-col flex-grow">
                  {/* Roles */}
                  <div className="mb-5">
                    {program.roles.map((role, ri) => (
                      <div
                        key={ri}
                        className="text-[hsl(var(--brand-navy))] font-semibold text-sm mb-1"
                      >
                        {role}
                      </div>
                    ))}
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-6 flex-grow">
                    {program.duration && (
                      <div className="flex items-center gap-3 text-sm">
                        <Clock size={16} style={{ color: program.accent }} />
                        <span className="text-[hsl(var(--brand-gray))]">{program.duration}</span>
                      </div>
                    )}
                    {program.projects && (
                      <div className="flex items-center gap-3 text-sm">
                        <FolderCheck size={16} style={{ color: program.accent }} />
                        <span className="text-[hsl(var(--brand-gray))]">{program.projects}</span>
                      </div>
                    )}
                    {program.capstone && (
                      <div className="flex items-center gap-3 text-sm">
                        <Award size={16} style={{ color: program.accent }} />
                        <span className="text-[hsl(var(--brand-gray))]">{program.capstone}</span>
                      </div>
                    )}
                    {program.cv && (
                      <div className="flex items-center gap-3 text-sm">
                        <Linkedin size={16} style={{ color: program.accent }} />
                        <span className="text-[hsl(var(--brand-gray))]">{program.cv}</span>
                      </div>
                    )}
                    {program.placement && (
                      <div className="flex items-center gap-3 text-sm">
                        <Users size={16} style={{ color: program.accent }} />
                        <span className="text-[hsl(var(--brand-gray))]">{program.placement}</span>
                      </div>
                    )}
                    {program.community && (
                      <div className="flex items-center gap-3 text-sm">
                        <Users size={16} style={{ color: program.accent }} />
                        <span className="text-[hsl(var(--brand-gray))]">{program.community}</span>
                      </div>
                    )}
                    {program.features?.map((feature, fi) => (
                      <div key={fi} className="flex items-center gap-3 text-sm">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: program.accent }}
                        />
                        <span className="text-[hsl(var(--brand-gray))]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="w-full py-3.5 rounded-full text-sm font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 group"
                    style={{
                      backgroundColor: `${program.accent}15`,
                      color: program.accent,
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.currentTarget.style.backgroundColor = program.accent;
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.currentTarget.style.backgroundColor = `${program.accent}15`;
                      e.currentTarget.style.color = program.accent;
                    }}
                  >
                    Apply for this Program
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
