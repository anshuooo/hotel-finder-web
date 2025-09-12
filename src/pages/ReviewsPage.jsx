import React from "react";
import { motion } from "framer-motion";

// ReviewsPage.jsx
// A single-file React component (default export) that shows 4 review cards
// Uses Tailwind CSS utility classes and Framer Motion for animations.

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Software Engineer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "Great experience! Website is very easy to use and responsive on all devices.",
    },
    {
      id: 2,
      name: "Priya Verma",
      role: "UI/UX Designer",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4,
      text: "I loved the clean design and fast performance. Definitely recommend it!",
    },
    {
      id: 3,
      name: "Amit Singh",
      role: "Entrepreneur",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      rating: 5,
      text: "The customer support was very helpful and solved my queries instantly.",
    },
    {
      id: 4,
      name: "Sneha Gupta",
      role: "Digital Marketer",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      text: "Amazing platform! Smooth navigation and very user-friendly.",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold">What People Say About Us</h1>
          <p className="text-gray-600 mt-2">Real feedback from our users — responsive, fast and reliable.</p>
        </motion.header>

        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reviews.map((r) => (
            <motion.article
              key={r.id}
              variants={cardVariant}
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-200 flex flex-col items-center text-center"
            >
              <img
                src={r.avatar}
                alt={r.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-gray-200"
              />

              <p className="text-gray-700 mb-4">“{r.text}”</p>

              <h4 className="font-semibold text-gray-900">{r.name}</h4>
              <p className="text-sm text-gray-500 mb-2">{r.role}</p>

              <div className="flex items-center justify-center gap-1 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill={i < r.rating ? "currentColor" : "none"}
                    className={`w-4 h-4 ${i < r.rating ? "text-yellow-400" : "text-gray-300"}`}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.945a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.945c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.945a1 1 0 00-.364-1.118L2.669 9.372c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69L9.049 2.927z" />
                  </svg>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.section>

        <footer className="mt-10 text-center text-sm text-gray-500">
          <p>Showing 4 verified reviews · Mobile-friendly & responsive layout</p>
        </footer>
      </div>
    </div>
  );
}
