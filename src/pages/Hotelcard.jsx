import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const hotels = [
  {
    id: 1,
    name: "The Grand Palace Hotel",
    location: "Lucknow, Uttar Pradesh",
    price: "$450/night",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Ocean Pearl Resort",
    location: "Maldives",
    price: "$680/night",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Desert Oasis",
    location: "Dubai, UAE",
    price: "$320/night",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Mountain View Lodge",
    location: "Aspen, Colorado",
    price: "$520/night",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  },
];

function HotelCards() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Select a Room
        </h2>
        <p className="text-gray-300 text-lg">Premium accommodations for your perfect stay</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-20">
        {hotels.map((hotel, index) => (
          <motion.div
            key={hotel.id}
            className="relative group perspective-1000"
            initial={{ opacity: 0, y: 80, rotateX: 45 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            whileHover={{ 
              rotateY: 15, 
              rotateX: -10, 
              scale: 1.05,
              z: 50
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 transform-gpu">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {hotel.name}
                </h3>
                <p className="text-gray-300 text-sm mb-3 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {hotel.location}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-400">
                    {hotel.price}
                  </span>
                  <motion.button
                    className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
              
              {/* 3D Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default HotelCards;
