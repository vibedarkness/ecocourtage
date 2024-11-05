import HeroSection from '../components/Hero'
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import FAQSection from '../components/FAQSection';
import CountrySection from '../components/CountrySection.jsx';


const Home = () => {
  return (
    <>
      <HeroSection />
      <CountrySection />
      <ServicesSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />

    </>
  );
};

export default Home;
