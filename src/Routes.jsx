import { Routes, Route } from 'react-router-dom'; // Supprimez BrowserRouter
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Service from './pages/Service';
import PostPage from './pages/DetailsBlog';
import ServiceDetails from './pages/DetailService';

const AppRoutes = () => {
  return (
    <Routes>  {/* Supprimez BrowserRouter ici */}
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/services" element={<Service />} />
      <Route path="/details_posts/:id" element={<PostPage />} />
      <Route path="/details_service/:id" element={<ServiceDetails />} />
    </Routes>
  );
};

export default AppRoutes;
