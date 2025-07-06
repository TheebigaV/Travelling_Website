'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Plan', href: '/travel' },
  { name: 'Hotels', href: '/hotels' },
  { name: 'Vehicles', href: '/hire' },
  { name: 'Review', href: '/review' },
];

// Container animation for staggering
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

// Individual item animation
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function Header() {
  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-blue-600 font-bold text-xl">
            <Link href="/">🌴 Sri Lanka Travel</Link>
          </div>

          {/* Animated Nav Links */}
          <motion.nav
            className="hidden md:flex gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className="relative text-gray-700 font-medium transition-colors duration-200 hover:text-blue-600"
                >
                  {/* Underline animation */}
                  <span className="relative group">
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        </div>
      </div>
    </motion.header>
  );
}
