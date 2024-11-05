
import { motion } from 'framer-motion';
import backgroundImage from '../assets/7.jpeg';
import image10 from '../assets/10.jpg';
import image11 from '../assets/11.jpg';
import image12 from '../assets/12.jpg';
const blogPosts = [
  {
    title: 'Titre de l\'article 1',
    excerpt: 'Ceci est un extrait de l\'article 1. Une brève description du contenu.',
    date: '5 novembre 2024',
    image: image10
  },
  {
    title: 'Titre de l\'article 2',
    excerpt: 'Ceci est un extrait de l\'article 2. Une brève description du contenu.',
    date: '4 novembre 2024',
    image: image11
  },
  {
    title: 'Titre de l\'article 3',
    excerpt: 'Ceci est un extrait de l\'article 3. Une brève description du contenu.',
    date: '3 novembre 2024',
    image: image12
  },
  {
    title: 'Titre de l\'article 2',
    excerpt: 'Ceci est un extrait de l\'article 2. Une brève description du contenu.',
    date: '4 novembre 2024',
    image: image11
  },
  {
    title: 'Titre de l\'article 3',
    excerpt: 'Ceci est un extrait de l\'article 3. Une brève description du contenu.',
    date: '3 novembre 2024',
    image: image12
  },
 
];

const Blog = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
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
    <h1 className="text-white text-5xl font-bold">Blog</h1>
  </div>
</div>
      
      

      {/* Contenu principal */}
      <main className="container mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Tous nos Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <span className="text-gray-400 text-sm">{post.date}</span>
                <div className="mt-4">
                  <a href="#" className="text-yellow-500 hover:underline">Lire la suite</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      
    </div>
  );
};

export default Blog;
