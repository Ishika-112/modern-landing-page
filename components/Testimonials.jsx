"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul",
    review: "Amazing learning experience and supportive mentors."
  },
  {
    name: "Priya",
    review: "The programs are practical and industry focused."
  },
  {
    name: "Aman",
    review: "Best platform to grow technical skills."
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100 px-6 text-center">

      {/* Heading Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12"
      >
        Student Testimonials
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">

        {testimonials.map((item, index) => (
          <motion.div
            key={index}

            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.6,
              delay: index * 0.2
            }}

            viewport={{ once: true }}

            whileHover={{
              scale: 1.05,
              y: -10
            }}

            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200"
          >

            {/* Quote */}
            <p className="text-gray-600 italic leading-relaxed">
              "{item.review}"
            </p>

            {/* Student Name */}
            <h4 className="mt-6 text-xl font-bold text-blue-600">
              - {item.name}
            </h4>

          </motion.div>
        ))}

      </div>

    </section>
  );
}