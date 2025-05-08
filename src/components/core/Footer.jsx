import React, { useState } from "react";
import {
  FiInstagram,
  FiTwitter,
  FiFacebook,
  FiPhone,
  FiMail,
  FiMapPin,
  FiArrowUp,
} from "react-icons/fi";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Show back-to-top button when scrolling
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="bg-black text-white pt-12 pb-8 px-4 md:px-8 relative">
      <div className="container mx-auto">
        {/* Grid Layout - Now 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 1. Quick Links */}
          <div>
            <h3 className="font-playfair text-xl italic mb-4 border-b border-rose-400 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2 font-cormorant">
              <li>
                <a href="#" className="hover:text-rose-300 transition">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-300 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-300 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* 2. Information */}
          <div>
            <h3 className="font-playfair text-xl italic mb-4 border-b border-rose-400 pb-2 inline-block">
              Information
            </h3>
            <ul className="space-y-2 font-cormorant">
              <li>
                <a href="#" className="hover:text-rose-300 transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-300 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-300 transition">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-300 transition">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-300 transition">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Contact */}
          <div>
            <h3 className="font-playfair text-xl italic mb-4 border-b border-rose-400 pb-2 inline-block">
              Contact
            </h3>
            <ul className="space-y-3 font-cormorant">
              <li className="flex items-center gap-2">
                <FiPhone className="text-rose-300" />
                <a
                  href="tel:+2348140580221"
                  className="hover:text-rose-300 transition"
                >
                  +2348140580221
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiMail className="text-rose-300" />
                <a
                  href="mailto:svelteoppie1@gmail.com"
                  className="hover:text-rose-300 transition"
                >
                  svelteoppie1@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiMapPin className="text-rose-300" />
                <span>Elega Housing Estate, Abk, Ogun Nigeria.</span>
              </li>
              <li className="flex items-center gap-4 mt-4">
                <a href="#" className="hover:text-rose-300 transition">
                  <FiInstagram size={20} />
                </a>
                <a href="#" className="hover:text-rose-300 transition">
                  <FiTwitter size={20} />
                </a>
                <a href="#" className="hover:text-rose-300 transition">
                  <FiFacebook size={20} />
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter (New Section) */}
          <div>
            <h3 className="font-playfair text-xl italic mb-4 border-b border-rose-400 pb-2 inline-block">
              Newsletter
            </h3>
            <p className="font-cormorant mb-4">
              Subscribe for exclusive offers and style inspiration
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-900 text-white px-4 py-2 rounded border border-gray-700 focus:border-rose-300 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-rose-300 text-black py-2 rounded hover:bg-rose-400 transition font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Payment Icons & Copyright */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <FaCcVisa className="text-2xl text-gray-400" />
              <FaCcMastercard className="text-2xl text-gray-400" />
              <FaCcPaypal className="text-2xl text-gray-400" />
            </div>
            <p className="font-cormorant text-gray-400 text-center md:text-right">
              © {new Date().getFullYear()} Svelte Accessories. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Back-to-Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-rose-300 text-black p-3 rounded-full shadow-lg hover:bg-rose-400 transition focus:outline-none"
          aria-label="Back to top"
        >
          <FiArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
