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
    title: 'Simulate Real Jobs',
    desc: 'Workplace experience before the job',
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

      // Steps animation
      gsap.fromTo(
        stepsRef.current?.querySelectorAll('.step-item') || [],
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
      id="framework"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Decorative */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03] -translate-y-1/3 translate-x-1/4"
        style={{ background: 'radial-gradient(circle, hsl(260,70%,55%), transparent 70%)' }}
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
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[hsl(var(--brand-purple))] via-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-purple))] opacity-20" />

              <div className="space-y-6">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="step-item relative flex items-center gap-6 p-5 rounded-2xl bg-[hsl(var(--brand-light))] hover:bg-white hover:shadow-md transition-all duration-300 group"
                  >
                    {/* Step number + icon */}
                    <div className="relative z-10 w-12 h-12 rounded-xl gradient-purple flex items-center justify-center shadow-lg flex-shrink-0">
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
                    <div className="text-2xl font-bold text-[hsl(var(--brand-purple))]/10 group-hover:text-[hsl(var(--brand-purple))]/20 transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Career Paths */}
          <div className="animate-item bg-[hsl(var(--brand-light))] rounded-[28px] p-8 lg:p-12">
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
              development, portfolio creation, job simulation, and career readiness.
            </p>
            <div className="text-center">
              <Link
                to="/contact"
                className="btn-primary group inline-flex"
              >
                Start Your Journey
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="mt-16 text-center">
            <p className="animate-item text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-[hsl(var(--brand-navy))] max-w-3xl mx-auto leading-relaxed">
              At Feki Tech Job Ready Academy, we are not just building courses—
              <span className="text-gradient"> we are building careers.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
