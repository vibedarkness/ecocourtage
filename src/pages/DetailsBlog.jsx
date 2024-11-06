/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data';
import { useParams, Link } from 'react-router-dom';

const PostPage = () => {
  const { id } = useParams(); // Récupérer l'ID du post depuis l'URL
  const post = blogPosts.find((post) => post.id === parseInt(id)); // Trouver le post correspondant

  if (!post) {
    return <div>Post non trouvé</div>; // Message d'erreur si le post n'existe pas
  }

  // État pour les commentaires et le nouvel ajout
  const [comments, setComments] = useState(post.comments || []);
  const [newComment, setNewComment] = useState("");

  // Fonction pour ajouter un commentaire
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        { id: comments.length + 1, author: "Utilisateur", content: newComment },
      ]);
      setNewComment(""); // Réinitialiser le champ de commentaire après soumission
    }
  };

  // Filtrer les autres posts pour les afficher dans "Posts récents"
  const recentPosts = blogPosts.filter((recentPost) => recentPost.id !== parseInt(id));

  return (
    <div className="flex flex-col md:flex-row container mx-auto py-40 p-6 space-y-6 md:space-y-0 md:space-x-8">
      {/* Section principale du post */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 bg-white rounded-lg shadow-lg p-8 transform hover:shadow-2xl transition-shadow"
      >
        <motion.img
          src={post.image}
          alt="Post"
          className="rounded-lg mb-6 w-full h-80 object-cover shadow-md"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-3">{post.title}</h1>
        <p className="text-sm text-gray-400 mb-6">
          Par <span className="font-medium text-[#37D1C5]">{post.author}</span> • {post.date}
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-8">{post.excerpt}</p>

        {/* Section des commentaires */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Commentaires</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            {comments.map((comment) => (
              <motion.div
                key={comment.id}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#37D1C5] shadow-md"
              >
                <p className="font-semibold text-gray-700">{comment.author}</p>
                <p className="text-gray-600 mt-1">{comment.content}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Ajouter un commentaire */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ajouter un commentaire</h3>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#37D1C5]"
              rows="4"
              placeholder="Écrivez votre commentaire ici..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <motion.button
              onClick={handleAddComment}
              whileHover={{ scale: 1.1 }}
              className="bg-[#37D1C5] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#2FB7A8] transition-colors"
            >
              Soumettre
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Barre latérale des posts récents */}
      <motion.aside
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="w-full md:w-64 bg-gray-50 rounded-lg shadow-lg p-6 transform hover:shadow-2xl transition-shadow"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Posts récents</h2>
        <div className="space-y-6">
          {recentPosts.map((recentPost) => (
            <div key={recentPost.id} className="flex space-x-4">
              <img src={recentPost.image} alt={recentPost.title} className="w-16 h-16 rounded-md object-cover" />
              <div>
                <Link to={`/details_posts/${recentPost.id}`} className="text-sm font-semibold text-gray-700 hover:text-[#37D1C5]">
                  {recentPost.title}
                </Link>
                <p className="text-xs text-gray-400">
                  Par {recentPost.author} • {recentPost.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.aside>
    </div>
  );
};

export default PostPage;
