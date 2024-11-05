import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-2 sm:px-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        className="bg-white rounded-lg shadow-lg p-3 sm:p-4 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
      >
        <div className="flex flex-col items-center mb-4 sm:mb-6">
          <img src={logo} alt="Logo" className="h-8 sm:h-10 w-8 sm:w-10 mb-2" />
          <h2 className="text-base sm:text-lg font-bold text-center">Demande de Devis</h2>
        </div>

        <form>
          {/* Champs de formulaire en grille */}
          <div className="grid grid-cols-1 gap-3 mb-4 sm:mb-5 md:grid-cols-2">
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-1">Nom Complet</label>
              <input type="text" className="border border-gray-300 rounded-md w-full px-2 py-1 sm:px-3 sm:py-2" required />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-1">Email</label>
              <input type="email" className="border border-gray-300 rounded-md w-full px-2 py-1 sm:px-3 sm:py-2" required />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-1">Téléphone</label>
              <input type="tel" className="border border-gray-300 rounded-md w-full px-2 py-1 sm:px-3 sm:py-2" required />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-1">Adresse</label>
              <input type="text" className="border border-gray-300 rounded-md w-full px-2 py-1 sm:px-3 sm:py-2" required />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-1">Type de contrat souhaité</label>
              <select className="border border-gray-300 rounded-md w-full px-2 py-1 sm:px-3 sm:py-2" required>
                <option value="">Sélectionnez un type de contrat</option>
                <option value="residential">Résidentiel</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industriel</option>
              </select>
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-1">Consommation estimée (kWh)</label>
              <input type="number" className="border border-gray-300 rounded-md w-full px-2 py-1 sm:px-3 sm:py-2" required />
            </div>
          </div>

          {/* Zone de texte pour message */}
          <div className="mb-3 sm:mb-4">
            <label className="block text-xs sm:text-sm font-medium mb-1">Message</label>
            <textarea className="border border-gray-300 rounded-md w-full px-2 py-1 sm:px-3 sm:py-2" rows="3" required></textarea>
          </div>

          {/* Boutons d'action */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-3 py-1 text-xs sm:text-sm bg-gray-300 rounded-md hover:bg-gray-400 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-3 py-1 text-xs sm:text-sm bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition-colors"
            >
              Soumettre
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
