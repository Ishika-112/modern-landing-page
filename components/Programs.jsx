"use client";

import { motion } from "framer-motion";

const programs = [
  {
    title: "Web Development",
    desc: "Learn modern frontend and backend technologies."
  },
  {
    title: "Artificial Intelligence",
    desc: "Build smart AI-powered applications."
  },
  {
    title: "UI/UX Design",
    desc: "Design beautiful and user-friendly interfaces."
  },
];

export default function Programs() {
  return (
    <section className="py-20 px-6 bg-white text-center">

      {/* Section Heading Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12"
      >
        Our Programs
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">

        {programs.map((item, index) => (
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

            className="p-8 rounded-3xl shadow-lg bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200"
          >

            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {item.desc}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}