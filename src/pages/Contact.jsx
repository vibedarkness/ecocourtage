/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { useState } from 'react';
import backgroundImage from '../assets/7.jpeg';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Helmet>
      <title>Contact-EcoCourtage</title>
    </Helmet>
    
    <div className="bg-gray-100">
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
    <h1 className="text-white text-5xl font-bold">Contactez-nous</h1>
  </div>
</div>


      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }} 
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-semibold mb-6">Contactez-nous Ici !</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Nom Complet</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="border border-gray-300 rounded-lg w-full p-3" 
                  required 
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="border border-gray-300 rounded-lg w-full p-3" 
                  required 
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="border border-gray-300 rounded-lg w-full p-3" 
                  rows="4" 
                  required 
                />
              </div>
              <button type="submit" className="bg-[#37D1C5] text-white rounded-lg px-6 py-3 hover:bg-[#31B1A8] transition duration-200">
                Envoyer
              </button>
            </form>
          </motion.div>

          <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: 0.2 }} 
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <h3 className="text-3xl font-bold mb-6 text-[#37D1C5]">Informations Complémentaires</h3>
      
      <motion.div whileHover={{ scale: 1.1 }} className="flex items-center mb-5">
        <FaEnvelope className="text-[#37D1C5] text-3xl mr-3" />
        <p className="text-gray-700 text-xl">
          Email: <a href="mailto:omzops14@outlook.fr" className="text-[#37D1C5] hover:underline font-semibold">omzops14@outlook.fr</a>
        </p>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} className="flex items-center mb-5">
        <FaPhone className="text-[#37D1C5] text-3xl mr-3" />
        <p className="text-gray-700 text-xl">
          Téléphone: <a href="tel:+221786351787" className="text-[#37D1C5] hover:underline font-semibold">+221 786351787</a>
        </p>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} className="flex items-center">
        <FaMapMarkerAlt className="text-[#37D1C5] text-3xl mr-3" />
        <p className="text-gray-700 text-xl">Adresse: 123 Rue de l'énergie, Dakar, Sénégal</p>
      </motion.div>
    </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.3 }} 
          className="bg-white rounded-lg shadow-lg mt-8"
        >
          <div className="h-80">
            <iframe 
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2013.0861994925028!2d-17.4625!3d14.6785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe1f617ed1d1f693%3A0x7d21a1e5f2637ed8!2sOuakam%20C%C3%ADt%C3%A9%20Comico!5e0!3m2!1sfr!2ssn!4v1633823196545!5m2!1sfr!2ssn" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
            />
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Contact;
