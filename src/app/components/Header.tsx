'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, User, Search } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Plan', href: '/travel' },
  { name: 'Hotels', href: '/hotels', id: 'hotels' },
  { name: 'Vehicles', href: '/hire' },
  { name: 'Review', href: '/review' },
];

const NavItem = ({ link, delay }: { link: { href: string; name: string }; delay: number }) => {
  return (
    <li style={{
      animationDelay: `${delay}ms`
    }}
      className="relative group cursor-pointer animate-slideIn"
    >
      <Link href={link.href} className="block py-2 text-gray-600 transition-all duration-300 transform hover:text-[#0a1a3a] hover:scale-105 dark:text-gray-300 dark:hover:text-blue-400">
        {link.name}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0a1a3a] transition-all duration-300 group-hover:w-full dark:bg-blue-400" />
      </Link>
    </li>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      // Default to system preference if no theme is saved
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
        document.documentElement.classList.add('dark');
      } else {
        setTheme('light');
        document.documentElement.classList.add('light');
      }
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement actual search logic here
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'
    }`}>
      {/* Backdrop Blur Effect */}
      <div className="absolute inset-0 bg-white/75 dark:bg-gray-900/75 backdrop-blur-sm -z-10" />
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50">
            <Image
              src="/logo.png"
              alt="Sri Lanka Travel Logo"
              width={40}
              height={40}
              className="rounded-lg"
              priority
            />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-[#0a1a3a] to-[#1a3a7a] bg-clip-text text-transparent dark:from-blue-400 dark:to-blue-600">
              Wanderlust
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <NavItem // Assuming NavItem needs an 'id' prop, add it to navLinks if not present
                key={link.id}
                link={link}
                delay={index * 100}
              />
            ))}
          </ul>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0a1a3a] dark:focus:ring-blue-400 focus:border-transparent text-sm w-40 transition-all duration-300 bg-white dark:bg-gray-800"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400 dark:text-gray-300" />
            </form>

            {/* User Icon */}
            <button
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-[#0a1a3a] dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="User account"
            >
              <User size={20} />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-[#0a1a3a] dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-[#0a1a3a] dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Animated Nav Links */}
          <motion.ul
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
          </motion.ul>
        </div>


        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white dark:bg-gray-800 shadow-lg rounded-b-lg overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-4">
                <ul className="space-y-2">
                  {navLinks.map((link, index) => (
                    <NavItem
                      key={link.id || index} // Fallback to index if id is not present
                      link={link}
                      delay={index * 100}
                    />
                  ))}
                </ul>

                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="relative px-3">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0a1a3a] dark:focus:ring-blue-400 focus:border-transparent text-sm bg-white dark:bg-gray-700"
                  />
                  <Search className="absolute left-6 top-3 h-4 w-4 text-gray-400 dark:text-gray-300" />
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
