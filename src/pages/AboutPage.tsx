import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, ArrowRight, Award, Users, BookOpen, TrendingUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from '../components/CountUp';
import ShaderGradientCustom from '../components/ShaderGradientCustom';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To transform learners into job-ready professionals through hands-on training, real-world projects, mentorship, and career support. We bridge the gap between education and employment.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    desc: 'To create a new generation of skilled professionals equipped to succeed in the modern workforce and contribute meaningfully to businesses and communities around the world.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    desc: 'We believe learning should lead to opportunities. We don\'t just teach theory—we prepare individuals for the workplace with practical, industry-relevant skills.',
  },
];

const stats = [
  { icon: Users, value: '500+', label: 'Graduates Trained' },
  { icon: Award, value: '95%', label: 'Placement Rate' },
  { icon: BookOpen, value: '12+', label: 'Programs Offered' },
  { icon: TrendingUp, value: '87%', label: 'Employer Satisfaction' },
];

export default function AboutPage() {
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
            src="/images/hero_bg.jpg"
            alt=""
            className="w-full h-full object-cover blur-[2px] scale-105 opacity-80"
          />
          {/* Premium Depth Overlay */}
          <div className="absolute inset-0 bg-mesh-purple opacity-40 mix-blend-overlay pointer-events-none" />
        </div>
        <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="animate-item inline-block px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-white font-bold tracking-wide border border-white/40 shadow-lg mb-6" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
              About Us
            </span>
            <h1 className="animate-item text-[clamp(2.5rem,5vw,4rem)] font-black text-white mb-6 leading-tight" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.5)' }}>
              We Are Building Careers, Not Just Courses
            </h1>
            <p className="animate-item text-white text-lg max-w-2xl mx-auto font-medium" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
              Feki Tech Job Ready Academy was created to bridge the gap between education
              and employment by equipping individuals with practical, industry-relevant skills.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-24 lg:py-32 bg-[hsl(var(--brand-light))] overflow-hidden">
        <div className="absolute inset-0 bg-mesh-premium opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-world-map opacity-20 pointer-events-none mix-blend-multiply" style={{ backgroundPosition: 'center' }} />
        <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Story Section */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
              <div className="animate-item relative">
                <div className="rounded-[32px] overflow-hidden shadow-2xl">
                  <img
                    src="/images/circle_e_presenting.jpg"
                    alt="Professional training session"
                    className="w-full object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                </div>
                <div
                  className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10"
                  style={{
                    background: 'linear-gradient(135deg, hsl(260,70%,55%), hsl(190,85%,55%))',
                  }}
                />
              </div>
              <div>
                <h2 className="animate-item text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-[hsl(var(--brand-navy))] mb-6">
                  Our Story
                </h2>
                <p className="animate-item text-[hsl(var(--brand-gray))] leading-relaxed mb-4">
                  In today&apos;s competitive job market, many talented people struggle to secure
                  employment despite submitting hundreds of applications. Traditional learning
                  often provides knowledge but lacks the practical experience and portfolio
                  required to stand out.
                </p>
                <p className="animate-item text-[hsl(var(--brand-gray))] leading-relaxed mb-4">
                  We saw this gap and built Feki Tech Job Ready Academy to solve it. Our approach
                  is different—we don&apos;t just deliver content. We train, mentor, build portfolios,
                  simulate real jobs, and connect our graduates with employers.
                </p>
                <p className="animate-item text-[hsl(var(--brand-navy))] font-semibold text-lg">
                  We don&apos;t just teach theory—we prepare individuals for the workplace.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="animate-item grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[24px] p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[hsla(var(--brand-purple),0.1)] flex items-center justify-center mx-auto mb-4">
                    <stat.icon size={24} className="text-[hsl(var(--brand-purple))]" />
                  </div>
                  <div className="text-3xl font-bold text-[hsl(var(--brand-navy))] mb-1">
                    <CountUp value={stat.value} />
                  </div>
                  <div className="text-sm text-[hsl(var(--brand-gray))]">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="mb-24">
              <div className="text-center mb-12">
                <span className="animate-item section-label mb-4 block">What Drives Us</span>
                <h2 className="animate-item text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-[hsl(var(--brand-navy))]">
                  Our Mission, Vision & Values
                </h2>
              </div>
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

            {/* Framework Preview */}
            <div className="animate-item bg-white rounded-[28px] p-8 lg:p-12 shadow-sm border border-gray-100 relative overflow-hidden">
              <ShaderGradientCustom animate="on" opacity={1} />
              <div className="absolute inset-0 z-[1] pointer-events-none bg-white/80" />
              <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-xl font-bold text-[hsl(var(--brand-navy))] mb-4">
                    Our Career Development Framework
                  </h3>
                  <p className="text-[hsl(var(--brand-gray))] leading-relaxed mb-6">
                    Every learner is guided through a structured pathway: Train → Build Portfolio →
                    Simulate Real Jobs → Place into Work → Track Progression → Mentorship & Support.
                  </p>
                  <Link
                    to="/"
                    className="btn-primary group inline-flex"
                  >
                    View Full Framework
                    <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className="rounded-[20px] overflow-hidden">
                  <img
                    src="/images/circle_d_meeting.jpg"
                    alt="Team collaboration"
                    className="w-full object-cover aspect-[16/10]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-20 lg:py-24 overflow-hidden"
      >
        {/* Dynamic Backgrounds */}
        <div className="absolute inset-0 bg-[hsl(var(--brand-navy))]" />
        <div className="absolute inset-0 bg-mesh-premium mix-blend-screen opacity-80" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[hsl(var(--brand-purple))] rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[hsl(var(--brand-cyan))] rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-float-slow pointer-events-none" style={{ animationDelay: '2s' }} />
        
        <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="animate-item text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-white mb-6">
              We Are Not Just Building Courses—<br />
              We Are Building Careers.
            </h2>
            <div className="animate-item flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[hsl(var(--brand-navy))] rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg"
              >
                Apply Now
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 px-10 py-4 bg-transparent text-white rounded-full font-semibold text-sm border-2 border-white/40 transition-all duration-300 hover:bg-white/10"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
