import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  X,
  Check,
  FolderCheck,
  Briefcase,
  Users,
  TrendingUp,
  HeartHandshake,
  ArrowRight,
  Award,
  Target,
  CircleDot,
  GraduationCap,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ShaderGradientCustom from '../components/ShaderGradientCustom';

gsap.registerPlugin(ScrollTrigger);

const comparison = {
  other: [
    { icon: X, text: 'Teach topics only' },
    { icon: X, text: 'Give certificates' },
    { icon: X, text: 'Limited support' },
    { icon: X, text: 'No portfolio reviews' },
    { icon: X, text: 'One-size-fits-all' },
    { icon: X, text: 'No job creation focus' },
  ],
  ours: [
    { icon: Check, text: 'Train on real projects' },
    { icon: Check, text: 'Build proof of work' },
    { icon: Check, text: 'Mentorship + career support' },
    { icon: Check, text: 'Job creation pathway' },
    { icon: Check, text: 'Pathways for your goals' },
    { icon: Check, text: 'Placement assistance' },
  ],
};

const advantages = [
  {
    icon: FolderCheck,
    title: 'Portfolio-First Learning',
    desc: 'Every graduate leaves with a professional portfolio of real projects that demonstrate their skills to employers.',
  },
  {
    icon: Briefcase,
    title: 'Job Creation',
    desc: 'Practice with real business needs, project opportunities, and pathways that help learners create proof of value.',
  },
  {
    icon: Users,
    title: 'Mentorship',
    desc: 'Get personalized guidance from industry professionals who have been where you want to go.',
  },
  {
    icon: TrendingUp,
    title: 'Career Tracking',
    desc: 'We monitor your progress and provide ongoing support even after placement to ensure long-term success.',
  },
  {
    icon: HeartHandshake,
    title: 'Employer Connections',
    desc: 'Our network of hiring partners is actively looking for Feki Tech graduates. We make introductions that matter.',
  },
  {
    icon: Target,
    title: 'Project Opportunities',
    desc: 'Work on real projects for real businesses during your training. This is experience that counts.',
  },
];

export default function WhyUsPage() {
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
            src="/images/circle_b_collab.jpg"
            alt=""
            className="w-full h-full object-cover scale-[1.03] opacity-90"
          />
          {/* Premium Depth Overlay */}
          <div className="absolute inset-0 bg-mesh-purple opacity-40 mix-blend-overlay pointer-events-none" />
        </div>
        <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="animate-item inline-block px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-white font-bold tracking-wide border border-white/40 shadow-lg mb-6" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
              Why Feki Tech
            </span>
            <h1 className="animate-item text-[clamp(2.5rem,5vw,4rem)] font-black text-white mb-6 leading-tight" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.5)' }}>
              Why Choose Feki Tech Job Ready Academy
            </h1>
            <p className="animate-item text-white text-lg max-w-2xl mx-auto font-medium" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
              We don&apos;t just teach topics. We train, build portfolios, support job creation,
              and guide your first placement into a meaningful career.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="animate-item section-label mb-4 block">Comparison</span>
              <h2 className="animate-item text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-[hsl(var(--brand-navy))] mb-4">
                See the Difference
              </h2>
              <p className="animate-item text-[hsl(var(--brand-gray))]">
                Compare our approach with traditional academies.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              {/* Other Academies */}
              <div className="animate-item rounded-3xl border border-slate-200 bg-slate-50/70 p-6 lg:p-8 shadow-sm">
                <div className="mb-7 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                      Traditional route
                    </p>
                    <h3 className="text-2xl font-bold text-slate-950">
                      Other Academies
                    </h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {comparison.other.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-red-400">
                        <item.icon size={14} className="text-red-400" />
                      </div>
                      <span className="font-medium text-slate-500">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feki Tech Job Ready Academy */}
              <div className="animate-item rounded-3xl border border-[hsl(var(--brand-purple))]/20 bg-white p-6 lg:p-8 shadow-[0_24px_70px_rgba(67,56,202,0.13)]">
                <div className="mb-7 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsla(var(--brand-purple),0.1)] text-[hsl(var(--brand-purple))]">
                      <Award size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[hsl(var(--brand-purple))]">
                        Fekitech advantage
                      </p>
                      <h3 className="text-2xl font-bold text-slate-950">
                        Feki Tech Job Ready Academy
                      </h3>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                    <CircleDot size={14} />
                    Built for outcomes
                  </div>
                </div>

                <ul className="grid gap-3">
                    {comparison.ours.map((item, i) => (
                      <li key={i} className="flex w-full items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm">
                        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                          <item.icon size={14} className="text-emerald-600" />
                        </div>
                        <span className="font-semibold text-slate-800">{item.text}</span>
                      </li>
                    ))}
                  </ul>

                <div className="mt-6 flex w-full items-center gap-2 rounded-2xl bg-[hsla(var(--brand-purple),0.08)] px-4 py-3 text-sm font-semibold text-[hsl(var(--brand-purple))]">
                  Training, portfolio, job creation, and support stay connected.
                  <ArrowRight size={15} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-mesh-purple opacity-30 pointer-events-none" style={{ backgroundSize: '100% 200%' }} />
        <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="animate-item section-label mb-4 block">Our Edge</span>
              <h2 className="animate-item text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-[hsl(var(--brand-navy))] mb-4">
                What Makes Us Different
              </h2>
              <p className="animate-item text-[hsl(var(--brand-gray))] max-w-2xl mx-auto">
                Our comprehensive approach ensures you are not just learning—you are preparing
                for a successful career.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((item, i) => (
                <div
                  key={i}
                  className="animate-item bg-[hsl(var(--brand-light))] rounded-[24px] p-8 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[hsla(var(--brand-purple),0.1)] flex items-center justify-center mb-5 group-hover:bg-[hsl(var(--brand-purple))] transition-colors duration-300">
                    <item.icon size={24} className="text-[hsl(var(--brand-purple))] group-hover:text-white transition-colors duration-300" />
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

      {/* Results Section */}
      <section className="relative py-24 lg:py-32 bg-[hsl(var(--brand-light))] overflow-hidden">
        <div className="absolute inset-0 bg-world-map opacity-30 pointer-events-none" style={{ backgroundPosition: 'center' }} />
        <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="animate-item bg-white rounded-[28px] p-8 lg:p-12 shadow-sm border border-gray-100 relative overflow-hidden">
              <ShaderGradientCustom animate="on" opacity={1} />
              <div className="absolute inset-0 z-[1] pointer-events-none bg-white/80" />
              <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[hsl(var(--brand-navy))] mb-4">
                    Results That Speak
                  </h3>
                  <p className="text-[hsl(var(--brand-gray))] leading-relaxed mb-6">
                    Our graduates consistently outperform traditional certificate holders
                    because they enter interviews with proof of work, not just proof of study.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      '95% of graduates placed within 8 weeks',
                      'Average salary increase of 40% post-training',
                      '500+ successful career transitions',
                      'Employer satisfaction rate of 87%',
                    ].map((stat, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check size={18} className="text-[hsl(var(--brand-purple))] flex-shrink-0" />
                        <span className="text-[hsl(var(--brand-navy))] font-medium text-sm">{stat}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="btn-primary group">
                    Start Your Journey
                    <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className="rounded-[20px] overflow-hidden">
                  <img
                    src="/images/circle_f_portrait.jpg"
                    alt="Successful graduate"
                    className="w-full object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
