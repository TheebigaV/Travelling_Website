'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
<<<<<<< Updated upstream
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, User, Search } from 'react-feather';
=======
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, User, Search } from 'react-feather';
import styles from './Header.module.css';
>>>>>>> Stashed changes

const navLinks = [
  { id: 1, name: 'Home', href: '/' },
  { id: 2, name: 'About Us', href: '/about' },
  { id: 3, name: 'Contact', href: '/contact' },
];

<<<<<<< Updated upstream
const NavItem = ({ link, delay }) => {
  return (
    <li
      style={{ animationDelay: ${delay}ms }}
      className="relative group cursor-pointer animate-slideIn"
    >
      <Link href={link.href} className="block py-2 text-gray-600 transition-all duration-300 transform hover:text-[#0a1a3a] hover:scale-105 dark:text-gray-300 dark:hover:text-blue-400">
        {link.name}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0a1a3a] transition-all duration-300 group-hover:w-full dark:bg-blue-400" />
=======
type NavLink = {
  id: number;
  name: string;
  href: string;
};

type NavItemProps = {
  link: NavLink;
  delay: number;
};

const NavItem = ({ link, delay }: NavItemProps) => {
  return (
    <li
      style={{ animationDelay: `${delay}ms` }}
      className={styles.navItem}
    >
      <Link href={link.href} className={styles.navLink}>
        {link.name}
        <span className={styles.navLinkUnderline} />
>>>>>>> Stashed changes
      </Link>
    </li>
  );
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
<<<<<<< Updated upstream

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  if (!mounted) return null;

  return (
    <header className={fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'}}>
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
=======
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const scrollToTop = () => {
    if (pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  if (!mounted) return null;

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.backdrop} />
      
      <nav className={styles.navContainer}>
        <div className={styles.navInner}>
          {/* Logo with scroll to top functionality */}
          <Link 
            href="/" 
            className={styles.logo}
            onClick={scrollToTop}
            scroll={false}
          >
            <span className={styles.logoText}>
              <span className={styles.wander}>Wander</span>
              <span className={styles.lust}>lust</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className={styles.navList}>
>>>>>>> Stashed changes
            {navLinks.map((link, index) => (
              <NavItem
                key={link.id}
                link={link}
                delay={index * 100}
              />
            ))}
          </ul>

          {/* Right Side Controls */}
<<<<<<< Updated upstream
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative hidden md:block">
=======
          <div className={styles.controls}>
            {/* Search Bar */}
            <form onSubmit={handleSearch} className={styles.searchForm}>
>>>>>>> Stashed changes
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
<<<<<<< Updated upstream
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0a1a3a] dark:focus:ring-blue-400 focus:border-transparent text-sm w-40 transition-all duration-300 bg-white dark:bg-gray-800"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400 dark:text-gray-300" />
=======
                className={styles.searchInput}
              />
              <Search className={styles.searchIcon} />
>>>>>>> Stashed changes
            </form>

            {/* User Icon */}
            <button
<<<<<<< Updated upstream
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-[#0a1a3a] dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
=======
              className={styles.iconButton}
>>>>>>> Stashed changes
              aria-label="User account"
            >
              <User size={20} />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
<<<<<<< Updated upstream
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-[#0a1a3a] dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
=======
              className={styles.iconButton}
>>>>>>> Stashed changes
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
<<<<<<< Updated upstream
              className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-[#0a1a3a] dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
=======
              className={styles.mobileMenuButton}
>>>>>>> Stashed changes
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
<<<<<<< Updated upstream
              className="md:hidden bg-white dark:bg-gray-800 shadow-lg rounded-b-lg overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-4">
                <ul className="space-y-2">
=======
              className={`${styles.mobileMenu} dark:bg-gray-800`}
            >
              <div className={styles.mobileMenuContent}>
                <ul className={styles.mobileNavList}>
>>>>>>> Stashed changes
                  {navLinks.map((link, index) => (
                    <NavItem
                      key={link.id}
                      link={link}
                      delay={index * 100}
                    />
                  ))}
                </ul>

                {/* Mobile Search */}
<<<<<<< Updated upstream
                <form onSubmit={handleSearch} className="relative px-3">
=======
                <form onSubmit={handleSearch} className={styles.mobileSearchForm}>
>>>>>>> Stashed changes
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
<<<<<<< Updated upstream
                    className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0a1a3a] dark:focus:ring-blue-400 focus:border-transparent text-sm bg-white dark:bg-gray-700"
                  />
                  <Search className="absolute left-6 top-3 h-4 w-4 text-gray-400 dark:text-gray-300" />
=======
                    className={styles.mobileSearchInput}
                  />
                  <Search className={styles.mobileSearchIcon} />
>>>>>>> Stashed changes
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}