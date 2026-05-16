"use client";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6">
      
      <motion.h1
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-5xl md:text-7xl font-bold"
>
  Shape Your Future
</motion.h1>

      <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 1 }}
  className="mt-6 text-lg"
>
  Learn industry-ready skills with modern education.
</motion.p>
      <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 1 }}
  className="mt-8"
>
  <button className="bg-white text-blue-600 px-6 py-3 rounded-full">
    Get Started
  </button>
</motion.div>
    </section>
  );
}