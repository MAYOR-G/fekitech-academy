import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const programOptions = [
  'Digital Careers (Business Analyst, Web Dev, UX/UI, Automation)',
  'Operations & AI (AI Support, Business Analysis, Excel)',
  'Business Startup Program',
  'Not Sure - Need Advice',
];

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you would send the form data to a server here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div ref={pageRef} className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-24 lg:py-32 bg-[hsl(var(--brand-navy))] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/card_image_mentorship.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="animate-item inline-block px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-white font-bold tracking-wide border border-white/40 shadow-lg mb-6" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
              Contact Us
            </span>
            <h1 className="animate-item text-[clamp(2.5rem,5vw,4rem)] font-black text-white mb-6 leading-tight" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.5)' }}>
              Let&apos;s Start Your<br />
              <span className="inline-block bg-[hsl(var(--brand-cyan))] text-white px-6 py-2 rounded-2xl shadow-xl mt-4 border border-white/20">Career Journey</span>
            </h1>
            <p className="animate-item text-white text-lg max-w-2xl mx-auto font-medium" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
              Have questions about our programs? Want to speak with an advisor?
              We are here to help you take the next step.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32 bg-[hsl(var(--brand-light))]">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <h2 className="animate-item text-2xl font-bold text-[hsl(var(--brand-navy))] mb-6">
                  Get in Touch
                </h2>
                <p className="animate-item text-[hsl(var(--brand-gray))] leading-relaxed mb-8">
                  Our team is ready to answer your questions and help you choose the right
                  program for your career goals.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="animate-item flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[hsla(var(--brand-purple),0.1)] flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-[hsl(var(--brand-purple))]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--brand-navy))] mb-1">Email</h4>
                      <a
                        href="mailto:hello@fekitech.academy"
                        className="text-[hsl(var(--brand-gray))] hover:text-[hsl(var(--brand-purple))] transition-colors"
                      >
                        hello@fekitech.academy
                      </a>
                    </div>
                  </div>

                  <div className="animate-item flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[hsla(var(--brand-purple),0.1)] flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-[hsl(var(--brand-purple))]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--brand-navy))] mb-1">Phone</h4>
                      <a
                        href="tel:+15550142200"
                        className="text-[hsl(var(--brand-gray))] hover:text-[hsl(var(--brand-purple))] transition-colors"
                      >
                        +1 (555) 014-2200
                      </a>
                    </div>
                  </div>

                  <div className="animate-item flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[hsla(var(--brand-purple),0.1)] flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-[hsl(var(--brand-purple))]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--brand-navy))] mb-1">Location</h4>
                      <p className="text-[hsl(var(--brand-gray))]">
                        Portland, OR / Remote
                      </p>
                    </div>
                  </div>

                  <div className="animate-item flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[hsla(var(--brand-purple),0.1)] flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-[hsl(var(--brand-purple))]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--brand-navy))] mb-1">Response Time</h4>
                      <p className="text-[hsl(var(--brand-gray))]">
                        Within 1 business day
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Message */}
                <div className="animate-item bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageSquare size={20} className="text-[hsl(var(--brand-purple))]" />
                    <h4 className="font-semibold text-[hsl(var(--brand-navy))]">
                      Prefer a Call?
                    </h4>
                  </div>
                  <p className="text-sm text-[hsl(var(--brand-gray))] mb-4">
                    Request a callback and an advisor will reach out to you at your preferred time.
                  </p>
                  <Link
                    to="tel:+15550142200"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-purple))] hover:underline"
                  >
                    Request a Callback
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="animate-item bg-white rounded-[28px] p-8 lg:p-10 shadow-lg border border-gray-100">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-[hsla(var(--brand-purple),0.1)] flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={32} className="text-[hsl(var(--brand-purple))]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[hsl(var(--brand-navy))] mb-3">
                        Thank You!
                      </h3>
                      <p className="text-[hsl(var(--brand-gray))] mb-6">
                        Your enquiry has been submitted. One of our advisors will contact you
                        within 1 business day.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            program: '',
                            message: '',
                          });
                        }}
                        className="text-[hsl(var(--brand-purple))] font-semibold hover:underline"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold text-[hsl(var(--brand-navy))] mb-6">
                        Submit Your Enquiry
                      </h3>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-[hsl(var(--brand-navy))] mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[hsl(var(--brand-navy))] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-purple))]/30 focus:border-[hsl(var(--brand-purple))] transition-all"
                              placeholder="Your full name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[hsl(var(--brand-navy))] mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[hsl(var(--brand-navy))] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-purple))]/30 focus:border-[hsl(var(--brand-purple))] transition-all"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-[hsl(var(--brand-navy))] mb-2">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[hsl(var(--brand-navy))] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-purple))]/30 focus:border-[hsl(var(--brand-purple))] transition-all"
                              placeholder="+1 (555) 000-0000"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[hsl(var(--brand-navy))] mb-2">
                              Program Interest *
                            </label>
                            <select
                              name="program"
                              value={formData.program}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[hsl(var(--brand-navy))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-purple))]/30 focus:border-[hsl(var(--brand-purple))] transition-all bg-white"
                            >
                              <option value="">Select a program</option>
                              {programOptions.map((option, i) => (
                                <option key={i} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-[hsl(var(--brand-navy))] mb-2">
                            Message
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[hsl(var(--brand-navy))] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-purple))]/30 focus:border-[hsl(var(--brand-purple))] transition-all resize-none"
                            placeholder="Tell us about your goals and any questions you have..."
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full btn-primary justify-center gap-2"
                        >
                          <Send size={18} />
                          Submit Enquiry
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-white">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="animate-item rounded-[28px] overflow-hidden shadow-xl">
              <img
                src="/images/circle_d_meeting.jpg"
                alt="Professional support team ready to help"
                className="w-full h-auto object-cover aspect-[21/9]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
