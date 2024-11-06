import { motion } from 'framer-motion';
import { FaSolarPanel, FaWind, FaBatteryFull } from 'react-icons/fa'; // Icônes énergétiques

const Loader = () => {
  return (
    <div className="loader-container flex items-center justify-center h-screen bg-gradient-to-r from-[#37D1C5] via-[#2D9C91] to-[#1A6F59]">
      <motion.div
        className="loader flex flex-col items-center justify-center"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: 'easeInOut',
        }}
      >
        <motion.div
          className="bg-[#37D1C5] rounded-full p-8 shadow-2xl"
          animate={{
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: 'easeInOut',
          }}
        >
          <FaSolarPanel size={50} color="#fff" />
        </motion.div>
        <motion.div
          className="mt-4"
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut',
          }}
        >
          <FaWind size={40} color="#fff" />
        </motion.div>
        <motion.div
          className="mt-4"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut',
          }}
        >
          <FaBatteryFull size={50} color="#fff" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;
