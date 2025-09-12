import React from "react";
import { motion } from "framer-motion";

// AnimatedHotelFeatures.jsx

const features = [
  {
    id: 1,
    title: "Swimming Pool",
    desc: "Indoor & outdoor pool — loungers, pool bar, and kids' area.",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Spa & Wellness",
    desc: "Massage rooms, sauna, steam, and personalized therapies.",
    img: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Gym & Fitness",
    desc: "Open 24/7 with cardio, weights, and personal trainers.",
    img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Dining & Bar",
    desc: "Multi-cuisine restaurant, rooftop bar and 24/7 room service.",
    img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop",
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
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 16 } },
  hover: { scale: 1.05, y: -6, transition: { duration: 0.25 } },
};

export default function AnimatedHotelFeatures() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero area */}
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#dbeafe33,#fef3c733)] animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">Find hotels with the best facilities</h2>
              <p className="text-gray-600 mb-4">Pool, gym, spa and more — instantly filter hotels that match your comfort.</p>
              <div className="flex gap-3">
                <input
                  placeholder="Search city or hotel name..."
                  className="w-full sm:w-auto flex-1 sm:flex-none px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold">Search</button>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full sm:w-96 grid grid-cols-2 gap-2"
            >
              <div className="h-28 rounded-lg bg-[url('https://images.unsplash.com/photo-1559599078-5c9e5f2aebd3?q=80&w=1080&auto=format&fit=crop')] bg-cover bg-center shadow-inner" />
              <div className="h-28 rounded-lg bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1080&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="h-28 rounded-lg bg-[url('https://images.unsplash.com/photo-1542317854-f9596c8e2f17?q=80&w=1080&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="h-28 rounded-lg bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4e28c?q=80&w=1080&auto=format&fit=crop')] bg-cover bg-center" />
            </motion.div>
          </div>
        </div>

        {/* Features grid */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <motion.div key={f.id} variants={cardVariant} whileHover="hover" className="bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer">
              <img src={f.img} alt={f.title} className="h-40 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{f.desc}</p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  <button className="text-sm px-3 py-1 rounded-md border text-gray-700">View hotels</button>
                  <button className="text-sm px-3 py-1 rounded-md bg-gradient-to-r from-blue-500 to-indigo-500 text-white">Filter</button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Showcase card */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-10">
          <div className="relative rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1400&auto=format&fit=crop" alt="hotel pool" className="w-full h-64 object-cover brightness-90" />
            <div className="absolute inset-0 flex items-center justify-between p-6">
              <div>
                <h4 className="text-2xl font-bold text-white drop-shadow">Luxury pool with sunset view</h4>
                <p className="text-sm text-white/90 mt-1">Poolside bar, private cabanas and evening music.</p>
                <div className="mt-4">
                  <button className="px-4 py-2 rounded-md bg-white text-gray-800 font-semibold">See rooms</button>
                </div>
              </div>
              <div className="text-white text-right">
                <div className="text-sm">Starting from</div>
                <div className="text-2xl font-bold">₹3,499</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
