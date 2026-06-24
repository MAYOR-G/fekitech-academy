import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  BarChart3,
  Bot,
  Code2,
  Cpu,
  Database,
  LineChart,
  Palette,
  Rocket,
  Table2,
  type LucideIcon,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    title: 'Data Analysis',
    image: '/images/program_operations.jpg',
    description: 'Learn practical data cleaning, analysis, dashboards, and decision-ready insight reporting.',
    icon: Database,
    weeks: '8 - 10 weeks',
    color: 'hsl(199, 89%, 45%)',
  },
  {
    title: 'Business Intelligence',
    image: '/images/program_operations.jpg',
    description: 'Turn raw business data into dashboards, reports, performance metrics, and executive insights.',
    icon: LineChart,
    weeks: '8 - 10 weeks',
    color: 'hsl(225, 80%, 45%)',
  },
  {
    title: 'Business Analysis',
    image: '/images/program_digital.jpg',
    description: 'Learn process mapping, requirements, stakeholder analysis, and job-ready documentation.',
    icon: BarChart3,
    weeks: '6 - 8 weeks',
    color: 'hsl(260, 70%, 55%)',
  },
  {
    title: 'AI Support Engineering',
    image: '/images/program_operations.jpg',
    description: 'Build confidence with AI tools, support workflows, digital operations, and reporting systems.',
    icon: Bot,
    weeks: '8 - 10 weeks',
    color: 'hsl(220, 70%, 50%)',
  },
  {
    title: 'Automation and Digital Operations',
    image: '/images/program_operations.jpg',
    description: 'Design practical automations for business tasks, internal tools, and repeatable team workflows.',
    icon: Cpu,
    weeks: '6 - 8 weeks',
    color: 'hsl(190, 85%, 45%)',
  },
  {
    title: 'Excel Analysis and Reporting',
    image: '/images/program_operations.jpg',
    description: 'Build reliable spreadsheets, reports, trackers, formulas, and analysis workflows for business teams.',
    icon: Table2,
    weeks: '6 - 8 weeks',
    color: 'hsl(160, 75%, 38%)',
  },
  {
    title: 'UX/UI Design',
    image: '/images/program_digital.jpg',
    description: 'Create research-backed screens, prototypes, case studies, and a portfolio employers can assess.',
    icon: Palette,
    weeks: '6 - 8 weeks',
    color: 'hsl(292, 84%, 55%)',
  },
  {
    title: 'No-Code Web Development',
    image: '/images/program_digital.jpg',
    description: 'Build responsive websites, landing pages, and client-ready web experiences without heavy coding.',
    icon: Code2,
    weeks: '6 - 8 weeks',
    color: 'hsl(245, 72%, 56%)',
  },
  {
    title: 'Business Startup and Entrepreneurship',
    image: '/images/program_startup.jpg',
    description: 'Validate an idea, build an MVP, prepare a landing page, and plan your first customers.',
    icon: Rocket,
    weeks: '4 weeks',
    color: 'hsl(28, 84%, 48%)',
    startup: true,
  },
] satisfies Array<{
  title: string;
  image: string;
  description: string;
  icon: LucideIcon;
  weeks: string;
  color: string;
  startup?: boolean;
}>;

const careerOutcomes = [
  '3-5 portfolio projects',
  '1 capstone project',
  'CV + LinkedIn setup',
  'Job placement support (2-8 weeks)',
  'Access to job board/community',
];

const startupOutcomes = [
  'Business idea validation',
  'MVP creation',
  'Landing page',
  'Social and local support',
  'Free promotional materials',
  'First customer strategy',
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
            once: true,
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
            className="w-full h-full object-cover blur-[2px] scale-105 opacity-80"
          />
          {/* Premium Depth Overlay */}
          <div className="absolute inset-0 bg-mesh-purple opacity-40 mix-blend-overlay pointer-events-none" />
        </div>
        <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="animate-item inline-block px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-white font-bold tracking-wide border border-white/40 shadow-lg mb-6" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
              Our Programs
            </span>
            <h1 className="animate-item text-[clamp(2.5rem,5vw,4rem)] font-black text-white mb-6 leading-tight" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.5)' }}>
              Programs Built for Real Employment
            </h1>
            <p className="animate-item text-white text-lg max-w-2xl mx-auto font-medium" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
              Each program is designed with employers to ensure you graduate with the skills,
              portfolio, and confidence to land your dream role.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Detail */}
      <section className="relative py-24 lg:py-32 bg-[hsl(var(--brand-light))] overflow-hidden">
        <div className="absolute inset-0 bg-mesh-premium opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
        <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-10">
              {programs.map((program) => {
                const Icon = program.icon;
                const outcomes = program.startup ? startupOutcomes : careerOutcomes;

                return (
                <div
                  key={program.title}
                  className="animate-item bg-white rounded-[28px] overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="grid lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative min-h-72 lg:min-h-[430px]">
                      <img
                        src={program.image}
                        alt={`${program.title} program`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-6 left-6">
                        <span
                          className="px-4 py-1.5 rounded-full text-white text-xs font-semibold"
                          style={{ backgroundColor: program.color }}
                        >
                          {program.weeks}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-10">
                      <div className="mb-5 flex items-start gap-4">
                        <div
                          className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl p-3"
                          style={{ backgroundColor: `${program.color}14`, color: program.color }}
                        >
                          <Icon size={26} />
                        </div>
                        <div>
                          <h2 className="text-2xl lg:text-3xl font-bold text-[hsl(var(--brand-navy))] mb-2">
                            {program.title}
                          </h2>
                          <p className="text-[hsl(var(--brand-gray))] leading-relaxed">
                            {program.description}
                          </p>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="mb-6 inline-flex rounded-full bg-[hsl(var(--brand-light))] px-4 py-2 text-sm font-semibold text-[hsl(var(--brand-navy))]">
                        {program.weeks}
                      </div>

                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-[hsl(var(--brand-gray))] uppercase tracking-wide mb-2">
                          Includes
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {outcomes.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm">
                              <Check size={14} style={{ color: program.color }} />
                              <span className="text-[hsl(var(--brand-gray))]">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <Link
                        to={`/contact?program=${encodeURIComponent(program.title)}`}
                        className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg"
                        style={{ backgroundColor: program.color }}
                      >
                        Apply Now
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-20 overflow-hidden">
        {/* Dynamic Backgrounds */}
        <div className="absolute inset-0 bg-[hsl(var(--brand-navy))]" />
        <div className="absolute inset-0 bg-mesh-premium mix-blend-screen opacity-80" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[hsl(var(--brand-purple))] rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[hsl(var(--brand-cyan))] rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-float-slow pointer-events-none" style={{ animationDelay: '2s' }} />
        
        <div className="absolute inset-0 bg-world-map opacity-10 pointer-events-none mix-blend-screen" style={{ backgroundPosition: 'center' }} />
        <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="animate-item text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-white mb-4">
              Not Sure Which Program is Right for You?
            </h2>
            <p className="animate-item text-white/90 mb-8 max-w-2xl mx-auto">
              Speak with one of our advisors. We will help you choose the best pathway
              based on your goals, experience, and interests.
            </p>
            <div className="animate-item flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary group">
                Speak With an Advisor
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/why-us" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all">
                Why Choose Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
