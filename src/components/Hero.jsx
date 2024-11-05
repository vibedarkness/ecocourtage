import { motion } from 'framer-motion';
import hero from '../assets/job.jpg';
import Modal from './Modal'; 
import { useState } from 'react';

const HeroSection = () => {
  const yellowText = "Eco-Courtage";
  // const [isHovered, setIsHovered] = useState(null);
  // const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="relative h-screen bg-gradient-to-r from-[#37D1C5] to-[#37D1C5] flex items-center justify-center overflow-hidden">
      <motion.img
        src={hero}
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        initial={{ scale: 1 }}
        // animate={{ scale: 1 }}
        // transition={{ duration: 12, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
      />

      {/* Animated Energy Shapes */}
      <motion.div
        className="absolute rounded-full bg-yellow-400 opacity-10"
        style={{ width: '15vw', height: '15vw' }} // Responsive en fonction de la largeur de l'écran
        animate={{
          x: [0, 150, 0],
          y: [0, 150, 0],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 6,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute rounded-full bg-yellow-300 opacity-10"
        style={{ width: '12vw', height: '12vw' }} // Responsive
        animate={{
          x: [0, -150, 0],
          y: [0, -150, 0],
          rotate: [0, -360, 0],
        }}
        transition={{
          duration: 5,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute rounded-full bg-yellow-500 opacity-20"
        style={{ width: '8vw', height: '8vw' }} // Responsive
        animate={{
          x: [0, 75, 0],
          y: [0, -75, 0],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 4,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 p-4"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
      Bienvenue sur{" "}
      <span className="text-yellow-400">
        {yellowText.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {letter}
          </motion.span>
        ))}
      </span>
    </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-white">
          Trouvez les meilleures offres pour votre consommation énergétique.
        </p>
        <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.1, boxShadow: '0px 0px 20px rgba(255, 255, 0, 0.5)' }}
            className="mt-8 px-6 py-3 bg-yellow-400 text-white font-semibold rounded-md shadow-md hover:bg-yellow-300 transition duration-300"
          >
            Demander un devis
          </motion.button>
      </motion.div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default HeroSection;
