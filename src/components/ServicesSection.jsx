import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    { title: 'Analyse et Audit Énergétique', description: 'Optimisation de votre consommation pour réduire vos coûts.', icon: '🔍' },
    { title: 'Comparaison de Tarifs', description: 'Comparez les offres et choisissez le meilleur fournisseur.', icon: '💡' },
    { title: 'Accompagnement pour les Énergies Renouvelables', description: 'Transition vers des solutions plus vertes.', icon: '🌱' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: {
      scale: 1.1,
      boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.2)',
      transition: { type: 'spring', stiffness: 300, damping: 15 }
    }
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
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto text-center">
        <motion.h2
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={titleVariants}
          className="text-4xl font-bold mb-12 cursor-pointer"
        >
          Nos Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              className="p-8 bg-white rounded-lg shadow-lg hover:bg-gradient-to-r from-[#37D1C5] to-[#3ae6db] transition-colors duration-500"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
