"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-20 px-6 bg-gray-100 text-center"
    >

      <h2 className="text-4xl font-bold mb-6">
        About Us
      </h2>

      <p className="max-w-3xl mx-auto text-gray-600 text-lg">
        We provide modern education with practical learning,
        industry-focused programs, and expert mentorship to help
        students build successful careers.
      </p>

    </motion.section>
  );
}