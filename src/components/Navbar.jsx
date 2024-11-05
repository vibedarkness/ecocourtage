import { motion } from 'framer-motion';
import { useState } from 'react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
    
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
        className="fixed top-0 left-0 w-full bg-white text-[#37D1C5] py-2 px-6 shadow-lg z-50"
      >
      
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center"
          >
            <a href="/" className="hover:opacity-80 transition duration-300">
              <img src={logo} alt="Logo" className="h-12 w-12 mr-2" />
            </a>
          </motion.div>

          {/* Menu Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg className="w-8 h-8 text-[#37D1C5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Navigation items */}
          <ul className={`flex-col md:flex md:flex-row md:space-x-8 md:justify-center md:items-center ${isOpen ? 'flex' : 'hidden'} absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 z-20`}>
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="relative"
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <a
                  href={item.href}
                  className="block text-lg font-medium transition duration-300 hover:text-[#37D1C5] py-2 md:py-0"
                >
                  {item.name}
                </a>
                {isHovered === index && (
                  <motion.div
                    layoutId="hoverIndicator"
                    className="absolute left-0 right-0 h-[3px] bg-[#37D1C5] bottom-[-4px] transition duration-300"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
