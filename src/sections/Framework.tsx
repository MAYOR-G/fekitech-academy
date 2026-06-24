import { useEffect, useRef } from 'react';
import {
  GraduationCap,
  FolderCheck,
  Briefcase,
  UserCheck,
  TrendingUp,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ShaderGradientCustom from '../components/ShaderGradientCustom';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: GraduationCap,
    title: 'Train',
    desc: 'Hands-on skills development',
  },
  {
    icon: FolderCheck,
    title: 'Build Portfolio',
    desc: 'Real projects that prove your ability',
  },
  {
    icon: Briefcase,
    title: 'Create Real Jobs',
    desc: 'Practical work pathways before placement',
  },
  {
    icon: UserCheck,
    title: 'Place into Work',
    desc: 'Job placement support',
  },
  {
    icon: TrendingUp,
    title: 'Track Career Progression',
    desc: 'Ongoing growth monitoring',
  },
  {
    icon: HeartHandshake,
    title: 'Mentorship & Support',
    desc: 'Guidance at every step',
  },
];

const careerPaths = [
  'Data Analysis',
  'Business Intelligence',
  'Business Analysis',
  'AI Support Engineering',
  'Automation and Digital Operations',
  'Excel Analysis and Reporting',
  'UX/UI Design',
  'No-Code Web Development',
  'Business Startup and Entrepreneurship',
];

export default function Framework() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      const titles = sectionRef.current?.querySelectorAll('.title-animate');
      if (titles && titles.length > 0) {
        gsap.fromTo(
          titles,
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

      // Steps animation
      const stepItems = stepsRef.current?.querySelectorAll('.step-item');
      if (stepItems && stepItems.length > 0) {
        gsap.fromTo(
          stepItems,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }

      // Career line progress
      const progressLine = sectionRef.current?.querySelector('.career-line-progress');
      if (progressLine && stepsRef.current) {
        gsap.to(progressLine, {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 50%',
            end: 'bottom 50%',
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="framework"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Soft divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 section-divider" />

      {/* Decorative Backgrounds */}
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none mix-blend-multiply" />
      <div className="absolute inset-0 bg-mesh-premium opacity-10 pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 mix-blend-screen pointer-events-none -translate-y-1/3 translate-x-1/4"
        style={{ background: 'radial-gradient(circle, hsl(var(--brand-purple)), transparent 70%)' }}
      />

      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="title-animate section-label mb-4 block">Our Process</span>
            <h2 className="title-animate text-[clamp(2rem,4vw,3.5rem)] font-bold text-[hsl(var(--brand-navy))] mb-4">
              Career Development Framework
            </h2>
            <p className="title-animate text-[hsl(var(--brand-gray))] text-lg max-w-2xl mx-auto">
              A structured pathway that takes you from learning to employment.
            </p>
          </div>

          {/* Steps */}
          <div ref={stepsRef} className="max-w-3xl mx-auto mb-20">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-[31px] top-12 bottom-12 w-0.5 career-line opacity-30" />
              <div className="absolute left-[31px] top-12 bottom-12 w-0.5 career-line-progress" />

              <div className="space-y-6">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="step-item relative flex items-center gap-6 p-5 rounded-2xl bg-white hover:shadow-lg hover:-translate-y-1 border border-gray-100 hover:border-[hsl(var(--brand-purple))]/30 transition-all duration-300 group shadow-sm"
                  >
                    {/* Step number + icon */}
                    <div className="relative z-10 w-12 h-12 rounded-xl bg-[hsl(var(--brand-cyan))] flex items-center justify-center shadow-[0_4px_20px_rgba(0,188,212,0.4)] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <step.icon size={20} className="text-white" />
                    </div>
                    {/* Content */}
                    <div className="flex-grow">
                      <h4 className="font-semibold text-[hsl(var(--brand-navy))] mb-0.5">
                        {step.title}
                      </h4>
                      <p className="text-sm text-[hsl(var(--brand-gray))]">{step.desc}</p>
                    </div>
                    {/* Step number */}
                    <div className="text-3xl font-black text-[hsl(var(--brand-cyan))] opacity-40 group-hover:opacity-80 transition-opacity">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Career Paths */}
          <div className="animate-item bg-white/50 backdrop-blur-xl rounded-[28px] p-8 lg:p-12 border border-white/60 shadow-xl shadow-[hsl(var(--brand-navy))]/5 relative overflow-hidden">
            <ShaderGradientCustom animate="on" opacity={1} />
            <div className="absolute inset-0 z-[1] pointer-events-none bg-white/70" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-[hsl(var(--brand-navy))] mb-6 text-center">
                Programs designed for high-demand careers
              </h3>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {careerPaths.map((path, i) => (
                <span
                  key={i}
                  className="px-5 py-2.5 rounded-full bg-white text-sm font-medium text-[hsl(var(--brand-navy))] shadow-sm border border-gray-100 hover:shadow-md hover:border-[hsl(var(--brand-purple))]/20 transition-all duration-300"
                >
                  {path}
                </span>
              ))}
            </div>
            <p className="text-center text-[hsl(var(--brand-gray))] text-sm max-w-2xl mx-auto mb-8">
              Every learner is guided through a structured pathway that focuses on skills
              development, portfolio creation, job creation, and career readiness.
            </p>
              <div className="text-center">
                <Link
                  to="/contact"
                  className="btn-primary group inline-flex shadow-[0_8px_30px_rgba(53,37,205,0.2)] hover:shadow-[0_8px_30px_rgba(53,37,205,0.4)] transition-shadow"
                >
                  Start Your Journey
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="mt-16 text-center">
            <p className="animate-item text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-[hsl(var(--brand-navy))] max-w-3xl mx-auto leading-relaxed">
              At Feki Tech Job Ready Academy, we are not just building courses—
              <span className="text-[hsl(var(--brand-cyan))] font-bold"> we are building careers.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
