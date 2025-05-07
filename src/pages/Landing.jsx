import React, { useState } from "react";
import { motion } from "framer-motion";
import { ProductCard, ProductList, ViewToggle } from "../components";

const products = [
  {
    id: 1,
    title: "Silk Evening Gown",
    price: 499,
    image: "https://via.placeholder.com/300x400/FFFFFF/000000?text=Silk+Gown",
    description: "Handmade Italian silk with pearl embroidery",
    category: "Dresses",
    isNew: true,
  },
  {
    id: 2,
    title: "Leather Crossbody Bag",
    price: 350,
    image: "https://via.placeholder.com/300x400/FFFFFF/000000?text=Leather+Bag",
    description: "Premium calf leather with gold hardware",
    category: "Bags",
  },
  // Add 6-8 more luxury items...
];

const Landing = () => {
  const [isGridView, setIsGridView] = useState(true);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-12 text-center bg-gradient-to-r from-rose-50 to-white/50 py-16 px-4 rounded-lg"
      >
        <h1 className="font-playfair italic text-4xl md:text-5xl mb-4 text-gray-900">
          Spring Collection
        </h1>
        <p className="font-cormorant text-xl text-gray-600 max-w-2xl mx-auto">
          Timeless pieces crafted for elegance
        </p>
      </motion.section>

      {/* Controls */}
      <div className="flex justify-between items-center mb-8">
        <span className="font-cormorant">{products.length} items</span>
        <ViewToggle isGridView={isGridView} setIsGridView={setIsGridView} />
      </div>

      {/* Products */}
      {isGridView ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {products.map((product) => (
            <ProductList key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Landing;
