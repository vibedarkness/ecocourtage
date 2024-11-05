import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#37D1C5] text-white py-2"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <span className="flex items-center">
            <FaEnvelope className="mr-2" />
            Email: <a href="mailto:omzops14@outlook.fr" className="hover:underline">omzops14@outlook.fr</a>
          </span>
          <span className="flex items-center">
            <FaPhone className="mr-2" />
            Téléphone: <a href="tel:+221786351787" className="hover:underline">+221 78 635 17 87</a>
          </span>
        </div>
        <div className="flex space-x-4">
          <span>Suivez-nous sur les réseaux sociaux :</span>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700]">
            <FaFacebook />
          </a>
          <a href="https://x.com/CodeWizard221" target="_blank" rel="noopener noreferrer" className="hover:text-[#1DA1F2]">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/oumar-thiombane-a0a51721b/" target="_blank" rel="noopener noreferrer" className="hover:text-[#27368b]">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
