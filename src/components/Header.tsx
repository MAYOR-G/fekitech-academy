import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Why Us', path: '/why-us' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-white/80 backdrop-blur-xl border-b border-white shadow-[0_4px_30px_rgba(0,0,0,0.03)]'
      }`}
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/assets/fekitech-logo-transparent-cropped.png"
              alt="Feki Tech Job Ready Academy logo"
              className="site-logo transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col justify-center">
              <span
                className={`font-bold text-xl leading-none tracking-tight transition-colors duration-300 ${
                  isTransparent ? 'text-white' : 'text-[hsl(var(--brand-navy))]'
                }`}
              >
                Feki Tech
              </span>
              <span
                className={`font-semibold text-[0.65rem] uppercase tracking-[0.2em] transition-colors duration-300 mt-1 ${
                  isTransparent ? 'text-white/80' : 'text-[hsl(var(--brand-purple))]'
                }`}
              >
                Job Ready Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:opacity-100 ${
                  isTransparent
                    ? 'text-white/80 hover:text-white'
                    : 'text-[hsl(var(--brand-navy))]/70 hover:text-[hsl(var(--brand-purple))]'
                } ${location.pathname === link.path ? (isTransparent ? 'text-white' : 'text-[hsl(var(--brand-purple))]') : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className={`text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 ${
                isTransparent
                  ? 'bg-white text-[hsl(var(--brand-navy))] hover:bg-white/90 hover:shadow-lg'
                  : 'bg-[hsl(var(--brand-purple))] text-white hover:bg-[hsl(var(--brand-purple-dark))] hover:shadow-[0_8px_24px_hsla(var(--brand-purple),0.35)]'
              }`}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isTransparent ? 'text-white' : 'text-[hsl(var(--brand-navy))]'
            }`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 transition-all duration-300 ${
          mobileOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base font-medium py-2 transition-colors ${
                location.pathname === link.path
                  ? 'text-[hsl(var(--brand-purple))]'
                  : 'text-[hsl(var(--brand-navy))]/70 hover:text-[hsl(var(--brand-purple))]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary text-center mt-2"
          >
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
