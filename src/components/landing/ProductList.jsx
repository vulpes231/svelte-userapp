import { motion } from "framer-motion";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cartSlice";
// import { useCart } from "./CartContext";

const ProductList = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      whileHover={{ backgroundColor: "#fafafa" }}
      className="flex gap-4 p-4 border-b border-gray-100 hover:bg-rose-50/30 transition-colors"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-24 h-32 object-cover rounded-lg border border-gray-100"
      />
      <div className="flex-1">
        <h3 className="font-playfair text-lg text-gray-900">{product.title}</h3>
        <p className="text-gray-500 font-cormorant italic">
          {product.description}
        </p>
        <div className="flex justify-between items-center mt-3">
          <span className="font-semibold text-gray-800">
            &#8358;{product.price}
          </span>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-rose-50 rounded-full">
              <FiHeart className="text-gray-400 hover:text-rose-300" />
            </button>
            <button
              onClick={() => dispatch(addItem(product))}
              className="p-2 hover:bg-rose-50 rounded-full"
            >
              <FiShoppingCart className="text-gray-600 hover:text-rose-400" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default ProductList;
