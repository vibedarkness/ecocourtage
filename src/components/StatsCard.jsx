import { motion } from 'framer-motion';
import { FaUsers, FaStar, FaUsersCog, FaBuilding } from 'react-icons/fa';
import CountUp from 'react-countup';

const stats = [
  { icon: FaUsers, title: 'Clients', end: 3500 },
  { icon: FaStar, title: 'Taux de Satisfaction', end: 95, suffix: '%' },
  { icon: FaUsersCog, title: 'Collaborateurs', end: 250 },
  { icon: FaBuilding, title: 'Agences', end: 15 },
];

const colors = [
  'from-[#37D1C5] to-[#5BF3E6]',
  'from-[#6D83F2] to-[#A3B4FF]',
  'from-[#FC5C7D] to-[#FF9A8B]',
  'from-[#FFAA5B] to-[#FFD56F]',
];

const StatsCard = () => {
  return (
    <div className="container mx-auto py-10">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              className={`flex flex-col items-center bg-gradient-to-r ${colors[index % colors.length]} p-8 rounded-lg shadow-xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              whileHover={{ rotate: index % 2 === 0 ? 5 : -5 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <Icon className="text-5xl text-white mb-4 transform transition-all duration-300 hover:scale-110" />
              <h3 className="text-xl font-semibold text-white">{stat.title}</h3>
              <p className="text-3xl text-white">
                <CountUp start={0} end={stat.end} suffix={stat.suffix || ''} duration={2.5} />
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default StatsCard;
