import { motion } from 'framer-motion';
import { FaRegHandshake, FaWrench, FaLightbulb } from 'react-icons/fa';
import backgroundImage from '../assets/7.jpeg';
import image1 from '../assets/3.jpeg';
import image2 from '../assets/6.jpeg';
import image3 from '../assets/1.jpeg';


const services = [
  { 
    title: 'Analyse et Audit Énergétique', 
    description: 'Optimisation de votre consommation pour réduire vos coûts.', 
    icon: <FaRegHandshake className="text-[#37D1C5] text-4xl mb-4" />,
    image: image1 
  },
  { 
    title: 'Comparaison de Tarifs', 
    description: 'Comparez les offres et choisissez le meilleur fournisseur.', 
    icon: <FaWrench className="text-[#37D1C5] text-4xl mb-4" />,
    image: image2 
  },
  { 
    title: 'Accompagnement pour les Énergies Renouvelables', 
    description: 'Transition vers des solutions plus vertes.', 
    icon: <FaLightbulb className="text-[#37D1C5] text-4xl mb-4" />,
    image: image3 
  },
];

const Service = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div 
        className="h-96 bg-cover bg-center relative" 
        style={{ backgroundImage: `url(${backgroundImage})` }} 
      >
        {/* Overlay avec le dégradé */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#37D1C5] to-[#37D1C5] opacity-60"></div>
        
        {/* Overlay noir */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Contenu central */}
        <div className="flex flex-col items-center justify-center h-full relative z-10 text-center">
          <h1 className="text-white text-5xl font-bold mb-4">Services</h1>
          <p className="text-white text-xl max-w-md">
            Nous offrons des solutions innovantes pour répondre à vos besoins.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto py-20" id="services">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }} // Départ légèrement plus bas
              animate={{ opacity: 1, scale: 1, y: 0 }} // Animation à la montée
              transition={{ duration: 0.5, delay: index * 0.2 }} // Délai basé sur l'index
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-transform duration-200 hover:scale-105"
            >
              <img src={service.image} alt={service.title} className="w-full h-32 object-cover rounded-t-lg mb-4" />
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <a href="/details_service" className="text-[#37D1C5] hover:underline">En savoir plus</a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
