import { useEffect, useRef } from 'react';
import {
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Code2,
  Cpu,
  Database,
  LineChart,
  Palette,
  Rocket,
  Table2,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    title: 'Data Analysis',
    description: 'Learn practical data cleaning, analysis, dashboards, and decision-ready insight reporting.',
    icon: Database,
    weeks: '8 - 10 weeks',
    accent: 'hsl(199, 89%, 45%)',
  },
  {
    title: 'Business Intelligence',
    description: 'Turn raw business data into dashboards, reports, performance metrics, and executive insights.',
    icon: LineChart,
    weeks: '8 - 10 weeks',
    accent: 'hsl(225, 80%, 45%)',
  },
  {
    title: 'Business Analysis',
    description: 'Learn process mapping, requirements, stakeholder analysis, and job-ready documentation.',
    icon: BarChart3,
    weeks: '6 - 8 weeks',
    accent: 'hsl(260, 70%, 55%)',
  },
  {
    title: 'AI Support Engineering',
    description: 'Build confidence with AI tools, support workflows, digital operations, and reporting systems.',
    icon: Bot,
    weeks: '8 - 10 weeks',
    accent: 'hsl(220, 70%, 50%)',
  },
  {
    title: 'Automation and Digital Operations',
    description: 'Design practical automations for business tasks, internal tools, and repeatable team workflows.',
    icon: Cpu,
    weeks: '6 - 8 weeks',
    accent: 'hsl(190, 85%, 45%)',
  },
  {
    title: 'Excel Analysis and Reporting',
    description: 'Build reliable spreadsheets, reports, trackers, formulas, and analysis workflows for business teams.',
    icon: Table2,
    weeks: '6 - 8 weeks',
    accent: 'hsl(160, 75%, 38%)',
  },
  {
    title: 'UX/UI Design',
    description: 'Create research-backed screens, prototypes, case studies, and a portfolio employers can assess.',
    icon: Palette,
    weeks: '6 - 8 weeks',
    accent: 'hsl(292, 84%, 55%)',
  },
  {
    title: 'No-Code Web Development',
    description: 'Build responsive websites, landing pages, and client-ready web experiences without heavy coding.',
    icon: Code2,
    weeks: '6 - 8 weeks',
    accent: 'hsl(245, 72%, 56%)',
  },
  {
    title: 'Business Startup and Entrepreneurship',
    description: 'Validate an idea, build an MVP, prepare a landing page, and plan your first customers.',
    icon: Rocket,
    weeks: '4 weeks',
    accent: 'hsl(28, 84%, 48%)',
    startup: true,
  },
] satisfies Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  weeks: string;
  accent: string;
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
            once: true,
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
      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="title-animate text-[clamp(2.3rem,4.6vw,4rem)] font-black text-black mb-4">
              Our Programs
            </h2>
            <p className="title-animate text-[hsl(var(--brand-gray))] text-lg max-w-2xl mx-auto">
              Choose a pathway that matches your goals. Each program is designed with
              employers to ensure you graduate job-ready.
            </p>
          </div>

          {/* Cards Grid */}
          <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {programs.map((program) => {
              const Icon = program.icon;
              const outcomes = program.startup ? startupOutcomes : careerOutcomes;

              return (
                <div
                  key={program.title}
                  className="program-card group relative flex min-h-[420px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_22px_55px_rgba(15,23,42,0.11)]"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: `${program.accent}14`, color: program.accent }}
                    >
                      <Icon size={23} strokeWidth={2.2} />
                    </div>
                    <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500">
                      {program.weeks}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-950">{program.title}</h3>
                  <p className="mb-5 text-sm leading-6 text-[hsl(var(--brand-gray))]">
                    {program.description}
                  </p>
                  <div className="mb-6 flex-1 space-y-2">
                    {outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-start gap-2 text-sm text-slate-600">
                        <BriefcaseBusiness size={15} className="mt-0.5 flex-shrink-0" style={{ color: program.accent }} />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={`/contact?program=${encodeURIComponent(program.title)}`}
                    className="group/link inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg"
                    style={{ backgroundColor: program.accent }}
                  >
                    Apply for This Program
                    <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
