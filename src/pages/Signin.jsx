import { motion } from "framer-motion";
import { FiArrowRight, FiLock, FiMail, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-rose-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-100"
      >
        <h1 className="font-playfair text-3xl text-center mb-6 italic">
          Welcome Back
        </h1>

        <form className="space-y-5">
          <div className="space-y-1">
            <label className="font-cormorant text-gray-600">Email</label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-rose-300 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-cormorant text-gray-600">Password</label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-rose-300 focus:border-transparent"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition flex items-center justify-center gap-2"
          >
            Sign In <FiArrowRight />
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="font-cormorant text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-rose-400 hover:underline font-medium"
            >
              Register here
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignIn;
