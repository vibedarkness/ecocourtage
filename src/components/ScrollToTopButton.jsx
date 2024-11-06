import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Importation de l'icône "Flèche vers le haut"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Afficher ou masquer l'icône en fonction de la position de défilement
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // Changez cette valeur pour la position souhaitée
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Ajouter un événement de défilement pour surveiller la position
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Effet de défilement fluide
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#37D1C5] p-4 rounded-full shadow-lg text-white hover:bg-[#2FB7A8] transition-colors"
        aria-label="Retour en haut"
      >
        <FaArrowUp size={24} />
      </button>
    )
  );
};

export default ScrollToTopButton;
