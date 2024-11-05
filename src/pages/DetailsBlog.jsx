import { useState } from 'react'; 
import { motion } from 'framer-motion';
import image3 from '../assets/6.jpeg';

const post = {
  title: "Titre du Post",
  content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque maxime beatae, unde iure alias quaerat rerum, debitis tempora soluta illo, provident deserunt veniam vel voluptas et. Blanditiis quos id ullam!",
  author: "Auteur du Post",
  date: "5 Novembre 2024",
  imageUrl: image3,
};

const recentPosts = [
  { id: 1, title: "Post récent 1", date: "4 Novembre 2024", summary: "Résumé du post 1", imageUrl: image3 },
  { id: 2, title: "Post récent 2", date: "3 Novembre 2024", summary: "Résumé du post 2", imageUrl: image3 },
  { id: 3, title: "Post récent 3", date: "2 Novembre 2024", summary: "Résumé du post 3", imageUrl: image3 },
];

const PostPage = () => {
  const [comments, setComments] = useState([
    { id: 1, author: "Alice", content: "Très bon post !" },
    { id: 2, author: "Bob", content: "J'ai beaucoup appris, merci." },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        { id: comments.length + 1, author: "Utilisateur", content: newComment },
      ]);
      setNewComment("");
    }
  };

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
          src={post.imageUrl}
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
        <p className="text-lg leading-relaxed text-gray-700 mb-8">{post.content}</p>

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
            <motion.div
              key={recentPost.id}
              whileHover={{ scale: 1.05, backgroundColor: "#37D1C5" }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-4 bg-white rounded-lg shadow-md cursor-pointer flex items-start space-x-4 hover:bg-[#37D1C5] hover:text-white transition-colors"
            >
              <img src={recentPost.imageUrl} alt="Thumbnail" className="w-16 h-16 rounded-md object-cover" />
              <div>
                <h3 className="text-lg font-medium">{recentPost.title}</h3>
                <p className="text-sm">{recentPost.date}</p>
                <p className="text-sm">{recentPost.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.aside>
    </div>
  );
};

export default PostPage;
