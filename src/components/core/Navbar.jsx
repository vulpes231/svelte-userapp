/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiShoppingBag, FiUser, FiMenu, FiX } from "react-icons/fi";
import { FaInstagram, FaPinterest } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "New Arrivals", href: "#" },
    { name: "Dresses", href: "#" },
    { name: "Bags", href: "#" },
    { name: "Accessories", href: "#" },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Desktop Navbar */}
      <div className="container mx-auto px-4 py-4 hidden md:block">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-playfair italic font-semibold"
          >
            Svelte Accessories
          </motion.div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-black font-medium font-cormorant text-lg"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <motion.button whileTap={{ scale: 0.9 }}>
              <FiSearch className="text-xl" />
            </motion.button>
            <motion.button whileTap={{ scale: 0.9 }}>
              <FiUser className="text-xl" />
            </motion.button>
            <motion.button whileTap={{ scale: 0.9 }} className="relative">
              <FiShoppingBag className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden py-4 px-4">
        <div className="flex justify-between items-center">
          {/* Hamburger Menu */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-playfair italic font-semibold"
          >
            Svelte Accessories
          </motion.div>

          {/* Cart Icon */}
          <motion.button whileTap={{ scale: 0.9 }} className="relative">
            <FiShoppingBag className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 pb-8 space-y-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-lg font-cormorant text-gray-700 hover:text-black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex space-x-4 pt-4">
                  <a href="#" className="text-gray-700">
                    <FiSearch className="text-xl" />
                  </a>
                  <a href="/signin" className="text-gray-700">
                    <FiUser className="text-xl" />
                  </a>
                  <a href="#" className="text-gray-700">
                    <FaInstagram className="text-xl" />
                  </a>
                  <a href="#" className="text-gray-700">
                    <FaPinterest className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
