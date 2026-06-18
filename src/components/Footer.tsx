import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

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
    <footer className="bg-[hsl(var(--brand-navy))] pt-16 pb-8">
      <div className="w-full px-6 lg:px-12 xl:px-20">
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
              <h4 className="text-white font-semibold text-sm mb-4">Programs</h4>
              <ul className="space-y-3">
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
              <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
              <ul className="space-y-3">
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
              <h4 className="text-white font-semibold text-sm mb-4">Support</h4>
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
          <div className="border-t border-white/10 pt-8">
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
