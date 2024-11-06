import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/7.jpeg';
import { services } from '../data'; // Import des données

import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <>
      <Helmet>
        <title>Services-EcoCourtage</title>
      </Helmet>
      <div className="bg-gray-50">
        <div
          className="h-96 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#37D1C5] to-[#37D1C5] opacity-60"></div>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="flex flex-col items-center justify-center h-full relative z-10 text-center">
            <h1 className="text-white text-5xl font-bold mb-4">Services</h1>
            <p className="text-white text-xl max-w-md">
              Nous offrons des solutions innovantes pour répondre à vos besoins.
            </p>
          </div>
        </div>

        <div className="container mx-auto py-20" id="services">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: service.id * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-transform duration-200 hover:scale-105"
              >
                <img src={service.image} alt={service.title} className="w-full h-32 object-cover rounded-t-lg mb-4" />
                {service.icon}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-4"> {service.description.slice(0, 100)}{service.description.length > 100 ? '...' : ''}</p>
                <Link to={`/details_service/${service.id}`} className="text-[#37D1C5] hover:underline">En savoir plus</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
