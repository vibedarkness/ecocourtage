import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home'; 
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Service from './pages/Service';
import PostPage from './pages/DetailsBlog';
import ServiceDetails from './pages/DetailService';
// import Login from './views/LoginPage'; 
// import Admin from './views/Admin';
// import Details from './views/DishDetailPage';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/blog" element={<Blog />} />   
        <Route path="/services" element={<Service />} /> 
        <Route path="/details_posts" element={<PostPage />} /> 
        <Route path="/details_service" element={<ServiceDetails />} /> 

      </Routes>
    </Router>
  );
};

export default AppRoutes;
