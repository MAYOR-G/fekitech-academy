import { Mail } from 'lucide-react';
import ShaderGradientCustom from '../components/ShaderGradientCustom';

export default function BlogPage() {
  return (
    <div className="min-h-screen relative bg-[hsl(var(--brand-light))] pb-24 pt-32">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-mesh-premium opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-world-map opacity-20 pointer-events-none mix-blend-multiply" style={{ backgroundPosition: 'center' }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-[hsl(var(--brand-navy))] mb-6 leading-tight">
            Insights & <span className="text-[hsl(var(--brand-purple))]">Articles</span>
          </h1>
          <p className="text-[hsl(var(--brand-gray))] text-lg md:text-xl">
            Expert career advice, industry trends, and success stories from the Feki Tech community. Our blog is launching soon.
          </p>
        </div>



        {/* Get Notified Section */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-[32px] text-center premium-border-gradient relative overflow-hidden">
            <ShaderGradientCustom animate="on" opacity={1} />
            <div className="absolute inset-0 z-[1] pointer-events-none bg-white/80" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-[hsl(var(--brand-purple))]/10 flex items-center justify-center mx-auto mb-6 text-[hsl(var(--brand-purple))]">
                <Mail size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--brand-navy))] mb-4">
                Get notified when we launch
              </h2>
              <p className="text-[hsl(var(--brand-gray))] mb-8">
                Join our newsletter to receive the latest career insights and articles directly in your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow px-6 py-4 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-purple))] shadow-inner bg-white/50"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Notify Me
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
