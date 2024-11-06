// src/components/BlogSection.js
import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion';
import { blogPosts } from '../data'; // Importez les articles ici

const BlogSection = () => {
    const titleVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
        hover: {
          scale: 1.05,
          color: '#37D1C5',
          transition: { type: 'spring', stiffness: 200, damping: 10 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <section className="py-16 text-gray-800">
            <div className="container mx-auto text-center">
                <motion.h2 
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    variants={titleVariants}
                    className="text-4xl font-bold mb-12 cursor-pointer"
                >
                    Dernières Actualités
                </motion.h2>
                <motion.div 
                    className="flex gap-8 overflow-x-auto px-6"
                    whileTap={{ cursor: "grabbing" }}
                    initial="hidden"
                    animate="visible"
                >
                    {blogPosts.map((post) => (
    <motion.div
        key={post.id}
        className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:shadow-2xl min-w-[300px]"
        variants={cardVariants}
    >
        <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
        />
        <div className="p-6">
            <h3 className="text-2xl font-bold mb-2 text-gray-800 hover:text-[#37D1C5] transition duration-200 cursor-pointer">
                {post.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.excerpt.slice(0, 100)}{post.excerpt.length > 100 ? '...' : ''}</p>
            <Link to={`/details_posts/${post.id}`} className="text-[#37D1C5] font-semibold hover:underline transition duration-200">
                Lire plus
            </Link>
        </div>
    </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default BlogSection;
