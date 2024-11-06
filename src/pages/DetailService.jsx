/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { motion } from 'framer-motion';

import imageFeature1 from '../assets/2.jpeg';
import imageFeature2 from '../assets/3.jpeg';
import imageFeature3 from '../assets/7.jpeg';
import imageFeature4 from '../assets/5.jpeg';
import backgroundImage from '../assets/7.jpeg';
import Modal from '../components/Modal'; 
import { services } from '../data';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {

  const { id } = useParams(); // Récupérer l'ID du post depuis l'URL
  const serv = services.find((serv) => serv.id === parseInt(id)); // Trouver le post correspondant

  if (!serv) {
    return <div>Service non trouvé</div>; // Message d'erreur si le post n'existe pas
  }
  const [setSelectedFeature] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      id: 1,
      title: "Fonctionnalité 1",
      description: "Découvrez cette première fonctionnalité incroyable qui rend notre service unique et performant.",
      imageUrl: imageFeature1,
    },
    {
      id: 2,
      title: "Fonctionnalité 2",
      description: "Apprenez en plus sur notre deuxième fonctionnalité qui optimise votre expérience.",
      imageUrl: imageFeature2,
    },
    {
      id: 3,
      title: "Fonctionnalité 3",
      description: "Explorez cette troisième fonctionnalité innovante qui vous simplifie la vie.",
      imageUrl: imageFeature3,
    },
    {
        id: 4,
        title: "Fonctionnalité 4",
        description: "Explorez cette quatriéme fonctionnalité innovante qui vous simplifie la vie.",
        imageUrl: imageFeature4,
      },
  ];

  return (
    <div className="bg-gray-100">
      {/* Section principale */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center space-y-4"
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-4" style={{ color: '#37D1C5' }}>
          Détails du Service
        </h1>
        <p className="text-lg leading-relaxed text-gray-600">
          Découvrez en détail les éléments essentiels de notre service et comment il peut vous apporter une valeur inestimable.
        </p>
      </motion.div> */}
      <div 
  className="h-96 bg-cover bg-center relative" 
  style={{ backgroundImage: `url(${backgroundImage})` }} 
>
  {/* Overlay avec le dégradé */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#37D1C5] to-[#37D1C5] opacity-60"></div>
  
  {/* Overlay noir */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Contenu central */}
  <div className="flex items-center justify-center h-full relative z-10">
    <h1 className="text-white text-5xl font-bold">Details Service</h1>
  </div>
</div>

<motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center space-y-4"
      >
        <h1 className="text-5xl py-20 font-bold text-gray-800 mb-4" style={{ color: '#37D1C5' }}>
          <strong style={{color:'black'}}>Services </strong><br />
          <u> {serv.title}</u>
        </h1>
        
      </motion.div>
      {/* Section de présentation avec image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center py-0 space-y-6 md:space-y-0 md:space-x-8"
      >
        <motion.img
          src={serv.image}
          alt="Service Presentation"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800">Présentation du Service</h2>
          <p className="text-lg text-gray-600">
          {serv.description}
          </p>
          
        </div>
      </motion.div>

      {/* Section des fonctionnalités */}
      <div className="space-y-8">
        <h3 className="text-3xl font-semibold text-gray-800 text-center" style={{ color: '#37D1C5' }}>
          Fonctionnalités Clés
        </h3>
        <div className="flex flex-wrap gap-8 justify-center">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setSelectedFeature(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={feature.imageUrl} alt={feature.title} className="rounded-md mb-4 h-40 w-full object-cover" />
              <h4 className="text-2xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section pour la fonctionnalité sélectionnée */}
      

      {/* Section pour le CTA final */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-12"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Prêt à commencer ?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Contactez-nous dès aujourd'hui pour découvrir comment notre service peut transformer votre expérience.
        </p>
        <button
        onClick={() => setIsModalOpen(true)}
          className="bg-teal-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-teal-600 transition-all"
          style={{ backgroundColor: '#37D1C5' }}
        >
          Demander Devis
        </button>
      </motion.div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ServiceDetails;
