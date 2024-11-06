import { useState, useEffect } from 'react';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AppRoutes from './Routes';
import Loader from "./components/Loader";
import ScrollToTopButton from './components/ScrollToTopButton'; // Importer le composant de retour en haut

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
  }, []); 

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <AppRoutes />
      <ScrollToTopButton /> {/* Ajouter le bouton ici */}
      <Footer />
    </>
  );
}

export default App;
