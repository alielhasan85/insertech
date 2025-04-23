import Hero from '@/components/hero';
import Services from '@/components/services';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import AnimatedBackground from '@/components/animated-background';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Hero />
        <Services />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}