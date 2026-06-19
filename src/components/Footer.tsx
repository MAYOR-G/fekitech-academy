import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import ShaderGradientBackground from './ShaderGradientBackground';

const programLinks = [
  { label: 'Digital Careers', path: '/programs' },
  { label: 'Operations & AI', path: '/programs' },
  { label: 'Business Startup', path: '/programs' },
];

const companyLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Why Us', path: '/why-us' },
  { label: 'Blog', path: '/blog' },
];

const supportLinks = [
  { label: 'Contact', path: '/contact' },
  { label: 'Apply Now', path: '/contact' },
  { label: 'Speak to Advisor', path: '/contact' },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[hsl(var(--brand-navy))] pt-24 lg:pt-32 pb-10 overflow-hidden text-white">
      {/* Background overlays */}
      <ShaderGradientBackground animate="on" opacity={0.90} />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#0F1A2E]/80" />
      
      {/* Decorative Wave Separator (Masks the straight top edge) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 lg:h-24 text-white fill-current drop-shadow-xl">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-5">
                <img
                  src="/assets/fekitech-logo-transparent-cropped.png"
                  alt="Feki Tech Job Ready Academy logo"
                  className="site-logo"
                />
                <div className="flex flex-col justify-center">
                  <span className="font-bold text-xl leading-none text-white tracking-tight">
                    Feki Tech
                  </span>
                  <span className="font-semibold text-[0.65rem] uppercase tracking-[0.2em] text-white/70 mt-1">
                    Job Ready Academy
                  </span>
                </div>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
                Job-Ready Academy — Bridging the gap between education and employment
                through practical training, portfolio projects, and career support.
              </p>
              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:hello@fekitech.academy"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm"
                >
                  <Mail size={16} className="text-[hsl(var(--brand-purple))]" />
                  hello@fekitech.academy
                </a>
                <a
                  href="tel:+15550142200"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm"
                >
                  <Phone size={16} className="text-[hsl(var(--brand-purple))]" />
                  +1 (555) 014-2200
                </a>
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <MapPin size={16} className="text-[hsl(var(--brand-purple))]" />
                  Portland, OR / Remote
                </div>
              </div>
            </div>

            {/* Program Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 relative inline-block">
                Programs
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-purple))] rounded-full" />
              </h4>
              <ul className="space-y-4">
                {programLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-purple))] rounded-full" />
              </h4>
              <ul className="space-y-4">
                {companyLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 relative inline-block">
                Support
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-purple))] rounded-full" />
              </h4>
              <ul className="space-y-3">
                {supportLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="section-divider opacity-50 mb-8" />
          <div className="pt-2">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-white/40 text-sm">
                &copy; {new Date().getFullYear()} Feki Tech Job Ready Academy. All rights reserved.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-[hsl(var(--brand-purple))] hover:text-white transition-all duration-300"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-4">
                <Link to="#" className="text-white/40 hover:text-white/60 text-sm transition-colors">
                  Privacy
                </Link>
                <Link to="#" className="text-white/40 hover:text-white/60 text-sm transition-colors">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
