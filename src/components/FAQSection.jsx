import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQSection = () => {
  const faqs = [
    { question: 'Comment choisir le bon fournisseur ?', answer: 'Nous comparons les offres pour vous aider à faire le meilleur choix.' },
    { question: 'Qu’est-ce qu’un audit énergétique ?', answer: 'Un audit analyse votre consommation pour identifier les économies possibles.' },
    { question: 'Quels sont les avantages des énergies renouvelables ?', answer: 'Les énergies renouvelables réduisent votre empreinte carbone et peuvent réduire vos factures d’énergie.' },
    { question: 'Comment puis-je réduire ma consommation d’énergie ?', answer: 'Il existe plusieurs façons, comme l’optimisation de votre utilisation d’appareils et l’isolation de votre maison.' },
    { question: 'Quelle est la différence entre énergies renouvelables et énergies fossiles ?', answer: 'Les énergies renouvelables sont durables et peu polluantes, tandis que les énergies fossiles sont limitées et polluantes.' },
    { question: 'Comment fonctionne un panneau solaire ?', answer: 'Les panneaux solaires convertissent la lumière du soleil en électricité grâce à des cellules photovoltaïques.' },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-12 text-center">Questions Fréquemment Posées</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              variants={containerVariants} 
              initial="hidden" 
              animate="visible" 
              className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl"
            >
              <div 
                className="flex items-center justify-between p-6 cursor-pointer" 
                onClick={() => toggleFAQ(index)}
              >
                <h4 className="font-semibold text-lg">{faq.question}</h4>
                <span className="text-2xl text-blue-600">{expandedIndex === index ? <FiChevronUp /> : <FiChevronDown />}</span>
              </div>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 text-gray-600 bg-gray-100"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
