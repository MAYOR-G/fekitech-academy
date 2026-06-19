import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  FolderCheck,
  Award,
  Linkedin,
  Users,
  ArrowRight,
  Check,
  Sparkles,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    title: 'Digital Careers',
    subtitle: 'Program Group 1',
    image: '/images/program_digital.jpg',
    roles: [
      'Business Analyst',
      'Web Developer',
      'UX/UI Designer',
      'Automation Builder/Specialist',
    ],
    duration: '6 - 8 weeks',
    projects: '3–5 portfolio projects',
    capstone: '1 capstone project',
    cv: 'CV + LinkedIn setup',
    placement: 'Job placement support (2–8 weeks)',
    community: 'Access to job board/community',
    color: 'hsl(260, 70%, 55%)',
    features: [
      'Hands-on practical training',
      'Real-world project experience',
      'Portfolio development',
      'Interview preparation',
      'Direct employer connections',
    ],
  },
  {
    title: 'Operations & AI',
    subtitle: 'Program Group 2',
    image: '/images/program_operations.jpg',
    roles: [
      'AI/Digital Support Systems',
      'Business Analyst',
      'Account Assistant / Reporting',
      'Excel Analyst',
    ],
    duration: '8 - 10 weeks',
    projects: '3–5 portfolio projects',
    capstone: '1 capstone project',
    cv: 'CV + LinkedIn setup',
    placement: 'Job placement support (2–8 weeks)',
    community: 'Access to job board/community',
    color: 'hsl(220, 70%, 50%)',
    features: [
      'AI tool training',
      'Data analysis skills',
      'Reporting frameworks',
      'Business operations',
      'Technology integration',
    ],
  },
  {
    title: 'Business Startup',
    subtitle: 'Program Group 3',
    image: '/images/program_startup.jpg',
    roles: ['4-Week Business Manager / Business Startup Program'],
    duration: '4 weeks',
    features_list: [
      'Business idea validation',
      'MVP creation',
      'Landing page development',
      'Social and local support',
      'Free promotional materials',
      'First customer strategy',
    ],
    color: 'hsl(190, 85%, 45%)',
    features: [
      'End-to-end startup guidance',
      'Business model canvas',
      'Marketing fundamentals',
      'Customer acquisition',
      'Launch strategy',
    ],
  },
];

export default function ProgramsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        pageRef.current?.querySelectorAll('.animate-item') || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: pageRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-24 lg:py-32 bg-[hsl(var(--brand-navy))] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/circle_c_laptop.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="animate-item inline-block px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-white font-bold tracking-wide border border-white/40 shadow-lg mb-6" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
              Our Programs
            </span>
            <h1 className="animate-item text-[clamp(2.5rem,5vw,4rem)] font-black text-white mb-6 leading-tight" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.5)' }}>
              Programs Built for<br />
              <span className="inline-block bg-[hsl(var(--brand-cyan))] text-white px-6 py-2 rounded-2xl shadow-xl mt-4 border border-white/20">Real Employment</span>
            </h1>
            <p className="animate-item text-white text-lg max-w-2xl mx-auto font-medium" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
              Each program is designed with employers to ensure you graduate with the skills,
              portfolio, and confidence to land your dream role.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Detail */}
      <section className="py-24 lg:py-32 bg-[hsl(var(--brand-light))]">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {programs.map((program, i) => (
                <div
                  key={i}
                  className="animate-item bg-white rounded-[28px] overflow-hidden shadow-lg border border-gray-100"
                >
                  <div className="grid lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={program.image}
                        alt={`${program.title} program`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 opacity-90"
                        style={{
                          background: `linear-gradient(to right, ${program.color}, transparent)`,
                        }}
                      />
                      <div className="absolute top-6 left-6">
                        <span
                          className="px-4 py-1.5 rounded-full text-white text-xs font-semibold"
                          style={{ backgroundColor: program.color }}
                        >
                          {program.subtitle}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-10">
                      <h2 className="text-2xl lg:text-3xl font-bold text-[hsl(var(--brand-navy))] mb-4">
                        {program.title}
                      </h2>

                      {/* Roles */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-[hsl(var(--brand-gray))] uppercase tracking-wide mb-2">
                          Career Paths
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {program.roles.map((role, ri) => (
                            <span
                              key={ri}
                              className="px-3 py-1 rounded-full bg-[hsl(var(--brand-light))] text-sm text-[hsl(var(--brand-navy))] font-medium"
                            >
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Details */}
                      <div className="grid sm:grid-cols-2 gap-3 mb-6">
                        {program.duration && (
                          <div className="flex items-center gap-2 text-sm">
                            <Clock size={16} style={{ color: program.color }} />
                            <span className="text-[hsl(var(--brand-gray))]">{program.duration}</span>
                          </div>
                        )}
                        {program.projects && (
                          <div className="flex items-center gap-2 text-sm">
                            <FolderCheck size={16} style={{ color: program.color }} />
                            <span className="text-[hsl(var(--brand-gray))]">{program.projects}</span>
                          </div>
                        )}
                        {program.capstone && (
                          <div className="flex items-center gap-2 text-sm">
                            <Award size={16} style={{ color: program.color }} />
                            <span className="text-[hsl(var(--brand-gray))]">{program.capstone}</span>
                          </div>
                        )}
                        {program.cv && (
                          <div className="flex items-center gap-2 text-sm">
                            <Linkedin size={16} style={{ color: program.color }} />
                            <span className="text-[hsl(var(--brand-gray))]">{program.cv}</span>
                          </div>
                        )}
                        {program.placement && (
                          <div className="flex items-center gap-2 text-sm">
                            <Users size={16} style={{ color: program.color }} />
                            <span className="text-[hsl(var(--brand-gray))]">{program.placement}</span>
                          </div>
                        )}
                        {program.community && (
                          <div className="flex items-center gap-2 text-sm">
                            <Sparkles size={16} style={{ color: program.color }} />
                            <span className="text-[hsl(var(--brand-gray))]">{program.community}</span>
                          </div>
                        )}
                      </div>

                      {/* Features list */}
                      {program.features_list && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-[hsl(var(--brand-gray))] uppercase tracking-wide mb-2">
            Includes
                          </h4>
                          <ul className="space-y-2">
                            {program.features_list.map((feature, fi) => (
                              <li key={fi} className="flex items-center gap-2 text-sm">
                                <Check size={14} style={{ color: program.color }} />
                                <span className="text-[hsl(var(--brand-gray))]">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Key Features */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-[hsl(var(--brand-gray))] uppercase tracking-wide mb-2">
                          What You Will Learn
                        </h4>
                        <ul className="space-y-2">
                          {program.features.map((feature, fi) => (
                            <li key={fi} className="flex items-center gap-2 text-sm">
                              <Check size={14} style={{ color: program.color }} />
                              <span className="text-[hsl(var(--brand-gray))]">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <Link
                        to="/contact"
                        className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg"
                        style={{ backgroundColor: program.color }}
                      >
                        Apply Now
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="animate-item text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-[hsl(var(--brand-navy))] mb-4">
              Not Sure Which Program is Right for You?
            </h2>
            <p className="animate-item text-[hsl(var(--brand-gray))] mb-8">
              Speak with one of our advisors. We will help you choose the best pathway
              based on your goals, experience, and interests.
            </p>
            <div className="animate-item flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary group">
                Speak With an Advisor
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/why-us" className="btn-secondary">
                Why Choose Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
