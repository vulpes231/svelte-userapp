import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiPlus, FiMinus, FiShoppingBag } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../features/cartSlice";

const Cart = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart); // Access the cart slice

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 1000 ? 0 : 50;
  const total = subtotal + shipping;

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={onClose}
          ></div>

          {/* Cart Container */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30 }}
            className="relative bg-white min-h-screen w-full max-w-md ml-auto shadow-xl"
          >
            {/* Header */}
            <div className="sticky top-0 bg-black text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FiShoppingBag className="text-xl" />
                <h2 className="font-playfair text-xl italic">
                  Your Bag ({items.length})
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-1 hover:text-rose-300 transition"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            {/* Cart Content */}
            <div className="p-4">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <p className="font-cormorant text-lg">Your bag is empty</p>
                  <button
                    onClick={onClose}
                    className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="space-y-6 mb-8">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex gap-4 border-b border-gray-100 pb-4"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-24 h-32 object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-playfair">{item.title}</h3>
                            <button
                              onClick={() => handleRemove(item.id)}
                              className="text-gray-400 hover:text-rose-400"
                            >
                              <FaRegTrashAlt />
                            </button>
                          </div>
                          {item.size && (
                            <p className="font-cormorant text-gray-500 mt-1">
                              Size: {item.size}
                            </p>
                          )}
                          <p className="font-cormorant mt-1">
                            ₦{item.price.toFixed(2)}
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3 mt-3">
                            <button
                              onClick={() =>
                                handleUpdateQuantity(item.id, item.quantity - 1)
                              }
                              className="p-1 border border-gray-200 rounded hover:bg-gray-100"
                            >
                              <FiMinus size={14} />
                            </button>
                            <span className="w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                handleUpdateQuantity(item.id, item.quantity + 1)
                              }
                              className="p-1 border border-gray-200 rounded hover:bg-gray-100"
                            >
                              <FiPlus size={14} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Order Summary */}
                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="font-playfair text-lg italic mb-4">
                      Order Summary
                    </h3>
                    <div className="space-y-3 font-cormorant">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>₦{subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>
                          {shipping === 0 ? "FREE" : `₦${shipping.toFixed(2)}`}
                        </span>
                      </div>
                      <div className="flex justify-between border-t border-gray-200 pt-3 font-medium">
                        <span>Total</span>
                        <span>₦{total.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <button className="w-full bg-black text-white py-3 mt-6 rounded hover:bg-gray-800 transition font-medium">
                      Proceed to Checkout
                    </button>

                    {/* Continue Shopping */}
                    <button
                      onClick={onClose}
                      className="w-full border border-black py-3 mt-2 rounded hover:bg-gray-100 transition font-medium"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;
