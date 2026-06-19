import Hero from '../sections/Hero';
import WhyJob from '../sections/WhyJob';
import OurSolution from '../sections/OurSolution';
import Programs from '../sections/Programs';
import WhyUseUs from '../sections/WhyUseUs';
import Framework from '../sections/Framework';
import CTA from '../sections/CTA';

export default function Home() {
  return (
    <main>
      <section className="hero-pin-wrap">
        <Hero />
      </section>

      <div className="page-content">
        <WhyJob />
        <OurSolution />
        <Programs />
        <WhyUseUs />
        <Framework />
        <CTA />
      </div>
    </main>
  );
}
