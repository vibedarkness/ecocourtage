import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Importez Link pour la navigation
import backgroundImage from '../assets/7.jpeg';
import { blogPosts } from '../data'; 

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog-EcoCourtage</title>
      </Helmet>
      <div className="bg-gray-100 min-h-screen">
        <div
          className="h-96 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#37D1C5] to-[#37D1C5] opacity-60"></div>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="flex items-center justify-center h-full relative z-10">
            <h1 className="text-white text-5xl font-bold">Blog</h1>
          </div>
        </div>

        <main className="container mx-auto py-20 px-4">
          <h1 className="text-3xl font-bold text-center mb-12">Tous nos Posts</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: post.id * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Link to={`/details_posts/${post.id}`}> {/* Ajoutez le lien ici */}
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt.slice(0, 100)}{post.excerpt.length > 100 ? '...' : ''}</p>
                    <span className="text-gray-400 text-sm">{post.date}</span>
                    <div className="mt-4">
                    <Link to={`/details_posts/${post.id}`} className="text-yellow-500 hover:underline">Lire la suite</Link>                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Blog;
