/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import backgroundImage from '../assets/lamp.jpg';
import image1 from '../assets/amadou.jpeg';
import image2 from '../assets/anta.jpeg';
import image3 from '../assets/diomaye.jpeg';
import image4 from '../assets/gackou.jpg';


const TestimonialsSection = () => {
  const testimonials = [
    { name: 'Fallou Diagne', feedback: 'Excellent service, j’ai économisé 20% sur mes factures !', image: image1 },
    { name: 'Astou Diop', feedback: 'Des conseils personnalisés et très utiles.', image: image2 },
    { name: 'Pierre Faye', feedback: 'Un accompagnement de qualité, très satisfait de mon expérience.', image: image3 },
    { name: 'Magueye Dieng', feedback: 'Une équipe à l’écoute et des solutions adaptées à mes besoins.', image: image4 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

    const titleVariants = {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
      hover: {
        scale: 1.05,
        color: '#37D1C5',
        transition: { type: 'spring', stiffness: 200, damping: 10 }
      }
    };

  return (
    <section 
      className="py-16" 
      style={{
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
      }}
    >
      <div className="container mx-auto text-center bg-[#37D1C5] bg-opacity-70 rounded-lg p-8">
        <motion.h2
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={titleVariants}
          className="text-4xl font-bold mb-12 cursor-pointer"
        >
          Ce que disent nos clients
        </motion.h2>
        <motion.div
          className="flex justify-center items-center"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="p-8 bg-white rounded-lg shadow-lg text-center max-w-lg mx-auto">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="italic text-xl">"{testimonials[currentIndex].feedback}"</p>
            <p className="mt-4 text-right font-semibold text-gray-800 text-lg">- {testimonials[currentIndex].name}</p>
          </div>
        </motion.div>
        <div className="mt-8 flex justify-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-400'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
