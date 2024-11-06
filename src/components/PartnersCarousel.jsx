
import { motion } from 'framer-motion';
import '../assets/css/PartnersCarousel.css'; 
import image1 from '../assets/partenaire/1.png';
import image2 from '../assets/partenaire/2.png';
import image3 from '../assets/partenaire/3.png';
import image4 from '../assets/partenaire/4.png';
import image5 from '../assets/partenaire/5.png';
import image6 from '../assets/partenaire/6.png';
import image7 from '../assets/partenaire/7.png';

const partnersLogos = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
];

const PartnersCarousel = () => {

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
    <div className="carousel-section">
      <motion.h2
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={titleVariants}
          className="text-4xl font-bold mb-12 cursor-pointer"
        >
          Nos Clients Satisfaits
        </motion.h2>
      <div className="carousel-container">
        <motion.div
          className="carousel"
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{
            duration: 20, // Durée du défilement
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {[...partnersLogos, ...partnersLogos].map((logo, index) => (
            <div key={index} className="carousel-item">
              <img src={logo} alt={`Partner ${index + 1}`} className="partner-logo" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PartnersCarousel;
