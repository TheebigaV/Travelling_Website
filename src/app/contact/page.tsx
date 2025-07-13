"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch {
      setSubmitMessage('There was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Contact Us | Wanderlust Travels</title>
        <meta name="description" content="Get in touch with Wanderlust Travels for your next adventure" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Wanderlust</div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600">About Us</a>
            <a href="/contact" className="text-blue-600 font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <div className="relative h-140">
        <Image
          src="/images/Contact.avif"
          alt="Travel background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center text-white">
            <motion.h1 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-2xl mx-auto"
            >
              We'd love to hear from you! Reach out for bookings, questions, or travel advice.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 py-16 relative -mt-16 bg-white rounded-t-3xl shadow-lg"
      >
        {/* Form Section */}
        <motion.div 
          variants={itemVariants}
          className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Form */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Send Us a Message
              </h2>
              
              {submitMessage && (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={`mb-6 p-4 rounded-lg ${submitMessage.includes('error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}
                >
                  {submitMessage}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  ></textarea>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" /> Send Message
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </div>

            {/* Image on the right side (visible on larger screens) */}
            <div className="hidden lg:block w-150 flex-shrink-0">
              <div className="relative h-full rounded-lg overflow-hidden">
                <Image
                  src="/images/Contact 2.jpeg"
                  alt="Prayer Bodhi"
                  fill
                  className="object-cover rounded-lg"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Information Section - Now below the form */}
        <motion.div 
          variants={itemVariants}
          className="relative bg-white p-8 rounded-xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* New paragraph section on the left */}
            <div className="lg:w-1/2 bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                How We Can Help
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Whether you're seeking travel inspiration or need help finalizing your itinerary, our support team is just a message away. We specialize in providing tailored travel recommendations, including scenic routes, top-rated restaurants, budget to luxury hotels, and reliable nearby vehicle options based on your current location.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We believe in making travel seamless and memorable, so don't hesitate to reach out with your questions, feedback, or special requests.
              </p>
            </div>

            {/* Contact cards on the right */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-8 text-gray-800 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Contact Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  className="flex items-start bg-blue-50 p-5 rounded-lg hover:bg-blue-100 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="text-blue-600 mr-4 mt-1">
                    <FaPhone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">Phone</h3>
                    <p className="text-gray-600">+94 77 567 3456</p>
                    <p className="text-gray-600">+94 74 689 3213</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start bg-blue-50 p-5 rounded-lg hover:bg-blue-100 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="text-blue-600 mr-4 mt-1">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">Email</h3>
                    <p className="text-gray-600">info@wanderlusttravels.com</p>
                    <p className="text-gray-600">bookings@wanderlusttravels.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start bg-blue-50 p-5 rounded-lg hover:bg-blue-100 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="text-blue-600 mr-4 mt-1">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">Address</h3>
                    <p className="text-gray-600">Jaffna</p>
                    <p className="text-gray-600">Sri Lanka</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;