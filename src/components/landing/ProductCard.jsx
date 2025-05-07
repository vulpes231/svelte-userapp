import { motion } from "framer-motion";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      className="bg-white p-4 rounded-lg overflow-hidden border border-gray-100 
                 shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative group">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        {product.isNew && (
          <span
            className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs 
                          font-cormorant tracking-wider"
          >
            New Arrival
          </span>
        )}
        <button
          className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-2 
                          rounded-full opacity-0 group-hover:opacity-100 transition"
        >
          <FiHeart className="text-gray-600 hover:text-rose-300" />
        </button>
      </div>
      <div className="mt-4">
        <h3 className="font-playfair text-lg text-gray-900">{product.title}</h3>
        <p className="text-gray-500 font-cormorant mt-1 italic">
          {product.category}
        </p>
        <div className="flex justify-between items-center mt-3">
          <span className="font-semibold text-gray-800">
            {" "}
            &#8358;{product.price}
          </span>
          <button className="p-2 hover:bg-rose-50 rounded-full transition-colors">
            <FiShoppingCart className="text-gray-600 hover:text-rose-400" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
export default ProductCard;
