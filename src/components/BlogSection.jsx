import { motion } from 'framer-motion';
import image1 from '../assets/1.jpeg';
import image2 from '../assets/2.jpeg';
import image3 from '../assets/6.jpeg';

    const BlogSection = () => {
    const articles = [
        {
        title: 'Tendances 2024 en Énergie Renouvelable',
        date: '01/11/2024',
        snippet: 'Découvrez les dernières avancées dans le secteur de l’énergie renouvelable, y compris les nouvelles technologies et les tendances du marché.',
        image: image1,
        link: '/details_posts'
        },
        {
        title: 'Comment Économiser sur vos Factures',
        date: '15/10/2024',
        snippet: 'Des astuces pratiques pour réduire votre consommation d’énergie et économiser sur vos factures mensuelles.',
        image: image2,
        link: '/details_posts'
        },
        {
            title: 'L’Avenir des Énergies Solaires',
            date: '05/11/2024',
            snippet: 'Explorez comment les nouvelles technologies solaires transforment le paysage énergétique mondial, offrant des solutions plus durables et efficaces.',
            image: image3, 
            link: '/details_posts'
          },
        
        
    ];
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
            <motion.h2 initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={titleVariants}
          className="text-4xl font-bold mb-12 cursor-pointer">Dernières Actualités</motion.h2>
            <motion.div 
            className="flex gap-8 overflow-x-auto px-6"
            whileTap={{ cursor: "grabbing" }}
            initial="hidden"
            animate="visible"
            >
            {articles.map((article, index) => (
                <motion.div
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:shadow-2xl ${
                    index >= 3 ? 'hidden' : 'block'
                } min-w-[300px]`}
                variants={cardVariants}
                >
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
                />
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800 hover:text-[#37D1C5] transition duration-200 cursor-pointer">
                    {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{article.date}</p>
                    <p className="text-gray-700 mb-4">{article.snippet}</p>
                    <a href={article.link} className="text-[#37D1C5] font-semibold hover:underline transition duration-200">
                    Lire plus
                    </a>
                </div>
                </motion.div>
            ))}
            </motion.div>
        </div>
        </section>
    );
    };

    export default BlogSection;
