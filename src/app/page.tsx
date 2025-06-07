import Header from '../components/Header';
import HeroSection from '../components/Herosection';
import CallbackForm from '../components/callback';
import About from '../components/About';
import ServicesGrid from '../components/ServicesGrid';

import Choose from '../components/choose';
import TestimonialSection from '../components/Testimonial';
import Index from '../components/index';
import EvokeExcellence from '@/components/EvokeExcellence';
import Faq from '../components/faq'; // ✅ Capitalized correctly
import BlogSection from '@/components/BlogSection';
import From from '../components/from';
// ✅ Capitalized 'Page2' to follow React component naming convention

import Footer from '@/components/footer';

export default function HomePage() {
  return (
    <main className="font-sans">
      <Header />
      <HeroSection />
      <CallbackForm />
      <About />
      <ServicesGrid />
      
      <Choose />
      <TestimonialSection />
      <Index />
      <EvokeExcellence />
      <Faq /> {/* ✅ Capitalization matches */}
      <BlogSection />
      <From />
       {/* ✅ Use capitalized component */}
      <Footer />
    </main>
  );
}
