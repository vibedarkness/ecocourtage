import HeroSection from '../components/Hero'
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import FAQSection from '../components/FAQSection';
import CountrySection from '../components/CountrySection.jsx';
import { Helmet } from 'react-helmet-async';
import StatsCard from '../components/StatsCard.jsx';
import PartnersCarousel from '../components/PartnersCarousel.jsx';


const Home = () => {
  return (
    <>
    <Helmet>
      <title>Accueil-EcoCourtage</title>
    </Helmet>
      <HeroSection />
      <CountrySection />
      <ServicesSection />
      <StatsCard />
      <TestimonialsSection />
      <BlogSection />
      <PartnersCarousel />
      <FAQSection />

    </>
  );
};

export default Home;
