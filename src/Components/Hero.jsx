import { motion } from "framer-motion";
import { Search, MapPin, Users } from "lucide-react";

function Hero({ location, setLocation, date, setDate, persons, setPersons, searchHotels }) {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 relative text-white text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4"
      >
        Find Your Perfect Luxury Stay
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-lg md:text-xl mb-8 max-w-2xl drop-shadow"
      >
        Explore world-class hotels and resorts designed for comfort and elegance.
      </motion.p>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col md:flex-row gap-4 bg-white/90 p-4 rounded-2xl shadow-xl w-full max-w-3xl"
      >
        {/* Location */}
        <div className="flex items-center gap-2 bg-gray-100 px-3 rounded-xl flex-1">
          <MapPin className="text-gray-500" />
          <input
            type="text"
            placeholder="Where to?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-transparent outline-none p-2 flex-1 text-gray-700"
          />
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 bg-gray-100 px-3 rounded-xl flex-1">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-transparent outline-none p-2 flex-1 text-gray-700"
          />
        </div>

        {/* Guests */}
        <div className="flex items-center gap-2 bg-gray-100 px-3 rounded-xl flex-1">
          <Users className="text-gray-500" />
          <input
            type="number"
            min={1}
            value={persons}
            onChange={(e) => setPersons(e.target.value)}
            className="bg-transparent outline-none p-2 flex-1 text-gray-700"
            placeholder="Guests"
          />
        </div>

        {/* Search Button */}
        <button
          onClick={searchHotels}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 justify-center"
        >
          <Search size={18} /> Search
        </button>
      </motion.div>
    </main>
  );
}

export default Hero;
