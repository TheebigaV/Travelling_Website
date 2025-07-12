'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, User, Search } from 'react-feather';
import styles from './Header.module.css';

const navLinks = [
  { id: 1, name: 'Home', href: '/' },
  { id: 2, name: 'About Us', href: '/about' },
  { id: 3, name: 'Contact', href: '/contact' },
];

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
            {navLinks.map((link, index) => (
              <NavItem
                key={link.id}
                link={link}
                delay={index * 100}
              />
            ))}
          </ul>

          {/* Right Side Controls */}
          <div className={styles.controls}>
            {/* Search Bar */}
            <form onSubmit={handleSearch} className={styles.searchForm}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              <Search className={styles.searchIcon} />
            </form>

            {/* User Icon */}
            <button
              className={styles.iconButton}
              aria-label="User account"
            >
              <User size={20} />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={styles.iconButton}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={styles.mobileMenuButton}
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
              className={`${styles.mobileMenu} dark:bg-gray-800`}
            >
              <div className={styles.mobileMenuContent}>
                <ul className={styles.mobileNavList}>
                  {navLinks.map((link, index) => (
                    <NavItem
                      key={link.id}
                      link={link}
                      delay={index * 100}
                    />
                  ))}
                </ul>

                {/* Mobile Search */}
                <form onSubmit={handleSearch} className={styles.mobileSearchForm}>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.mobileSearchInput}
                  />
                  <Search className={styles.mobileSearchIcon} />
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
