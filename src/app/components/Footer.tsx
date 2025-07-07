'use client';

import { FaFacebook, FaTwitter, FaInstagram, FaGlobeAmericas, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Function to handle email click
  const handleEmailClick = () => {
    window.location.href = 'mailto:info@wanderlust.com';
  };

  // Function to handle phone click
  const handlePhoneClick = () => {
    window.location.href = 'tel:+94771234567';
  };

  // Function to handle location click
  const handleLocationClick = () => {
    window.open('https://www.google.com/maps/place/Jaffna,+Sri+Lanka/', '_blank');
  };

  return (
<<<<<<< Updated upstream

=======
<<<<<<< HEAD
=======

>>>>>>> 2dbe9c2f5354de66c8dd39ceed9d20b085359650
>>>>>>> Stashed changes
    <footer className="bg-[#0a1a3a] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaGlobeAmericas className="text-[#f8c537] text-2xl" />
              <span className="text-xl font-bold text-[#f8c537]">Wanderlust</span>
            </div>
            <p className="text-[#a3b3d8]">
<<<<<<< Updated upstream

             
=======
<<<<<<< HEAD
=======

             
>>>>>>> 2dbe9c2f5354de66c8dd39ceed9d20b085359650
>>>>>>> Stashed changes
              Making your travel dreams a reality since 2010. Explore the world
              with our expertly crafted adventures.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a3b3d8] hover:text-[#f8c537] transition-colors duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a3b3d8] hover:text-[#f8c537] transition-colors duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a3b3d8] hover:text-[#f8c537] transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#f8c537] pb-2 text-[#f8c537]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-[#a3b3d8] hover:text-[#f8c537] transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#a3b3d8] hover:text-[#f8c537] transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#a3b3d8] hover:text-[#f8c537] transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#f8c537] pb-2 text-[#f8c537]">
              Contact Us
            </h3>
            <ul className="space-y-3">
<<<<<<< Updated upstream
              <li
=======
<<<<<<< HEAD
              <li 
=======
              <li
>>>>>>> 2dbe9c2f5354de66c8dd39ceed9d20b085359650
>>>>>>> Stashed changes
                className="flex items-start space-x-2 cursor-pointer text-[#a3b3d8] hover:text-[#f8c537] transition-colors duration-300"
                onClick={handleEmailClick}
              >
                <MdEmail className="mt-1" />
                <span>info@wanderlusttravel.com</span>
              </li>
              <li 
                className="flex items-start space-x-2 cursor-pointer text-[#a3b3d8] hover:text-[#f8c537] transition-colors duration-300"
                onClick={handlePhoneClick}
              >
                <MdPhone className="mt-1" />
                <span>+94 771234567</span>
              </li>
              <li 
                className="flex items-start space-x-2 cursor-pointer text-[#a3b3d8] hover:text-[#f8c537] transition-colors duration-300"
                onClick={handleLocationClick}
              >
                <FaMapMarkerAlt className="mt-1" />
                <span>Jaffna, Sri Lanka.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
        <div className="border-t border-[#1a2d5a] pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#a3b3d8] text-sm mb-4 md:mb-0">
=======
>>>>>>> Stashed changes

        <div className="border-t border-[#1a2d5a] pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#a3b3d8] text-sm mb-4 md:mb-0">

<<<<<<< Updated upstream
=======
>>>>>>> 2dbe9c2f5354de66c8dd39ceed9d20b085359650
>>>>>>> Stashed changes
            &copy; {currentYear} Wanderlust Travels. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
<<<<<<< Updated upstream

              className="text-[#a3b3d8] hover:text-[#f8c537] text-sm transition-colors duration-300"

=======
<<<<<<< HEAD
              className="text-[#a3b3d8] hover:text-[#f8c537] text-sm transition-colors duration-300"
=======

              className="text-[#a3b3d8] hover:text-[#f8c537] text-sm transition-colors duration-300"

>>>>>>> 2dbe9c2f5354de66c8dd39ceed9d20b085359650
>>>>>>> Stashed changes
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[#a3b3d8] hover:text-[#f8c537] text-sm transition-colors duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}