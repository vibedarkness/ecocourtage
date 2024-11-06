/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            className="flex flex-col items-center"
          >
            <img src={logo} alt="Logo de votre entreprise" className="mb-4 w-32 h-auto" />
            
            <p className="text-gray-400 text-center text-sm">
              Nous sommes spécialisés dans le courtage énergétique, vous aidant à optimiser vos dépenses en énergie grâce à des solutions sur mesure.
            </p>
            <p className="text-gray-400 text-center text-sm">
              Bénéficiez d'une expertise dédiée pour naviguer dans le marché de l'énergie, réduire vos factures et soutenir des initiatives durables.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }} 
            className="flex flex-col items-center"
          >
            <h3 className="text-lg font-semibold mb-4 text-center">Liens Utiles</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-[#37D1C5] transition duration-200">Accueil</a></li>
              <li><a href="/services" className="hover:text-[#37D1C5] transition duration-200">Nos Services</a></li>
              <li><a href="/blog" className="hover:text-[#37D1C5] transition duration-200">Blog</a></li>
              <li><a href="/contact" className="hover:text-[#37D1C5] transition duration-200">Contactez-nous</a></li>
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            className="flex flex-col items-center"
          >
            <h3 className="text-lg font-semibold mb-4 text-center">Contactez-nous</h3>
            <p className="text-gray-400 text-center">
              Email: <a href="mailto:contact@votreentreprise.com" className="hover:text-[#37D1C5] transition duration-200">omzops14@outlook.fr</a>
            </p>
            <p className="text-gray-400 text-center">
              Téléphone: <a href="tel:+1234567890" className="hover:text-[#37D1C5] transition duration-200">+221 786351787</a>
            </p>
            <p className="text-gray-400 text-center">Adresse: 123 Rue de l'énergie, Dakar, Sénégal</p>
          </motion.div>
        </div>

        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.4 }} 
          className="mt-8 text-center"
        >
          <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#37D1C5] transition duration-200">Facebook</a>
            <a href="https://x.com/CodeWizard221" target="_blank" rel="noopener noreferrer" className="hover:text-[#37D1C5] transition duration-200">Twitter</a>
            <a href="https://www.linkedin.com/in/oumar-thiombane-a0a51721b/" target="_blank" rel="noopener noreferrer" className="hover:text-[#37D1C5] transition duration-200">LinkedIn</a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-gray-900 py-4 text-center">
      <p className="text-gray-400 text-sm">
  © 2024 <a href="https://vibedarkness.github.io/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 underline">Vibedarkness</a>. Tous droits réservés.
</p>
      </div>
    </footer>
  );
};

export default Footer;
