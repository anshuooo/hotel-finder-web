import React, { useState } from "react";
import axios from "axios";
import { FaMapMarkerAlt, FaHotel } from "react-icons/fa";

const API_KEY = "24f1065610a04a109cd2a8b6e693d96b";

function HotelFinder() {
  const [location, setLocation] = useState("");
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Step 1: Get latitude & longitude for a city
  const getCoordinates = async (city) => {
    const geoUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
      city
    )}&apiKey=${API_KEY}`;
    const response = await axios.get(geoUrl);
    if (response.data.features.length > 0) {
      const { lat, lon } = response.data.features[0].properties;
      return { lat, lon };
    }
    throw new Error("Location not found");
  };

  // Step 2: Fetch hotels near that lat/lon
  const fetchHotels = async () => {
    if (!location) {
      setError("Please enter a location");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const { lat, lon } = await getCoordinates(location);

      const placesUrl = `https://api.geoapify.com/v2/places?categories=accommodation.hotel&filter=circle:${lon},${lat},5000&limit=20&apiKey=${API_KEY}`;
      const res = await axios.get(placesUrl);

      setHotels(res.data.features);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Could not fetch hotels. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        <FaHotel className="inline-block mr-2" />
        Hotel Finder
      </h1>

      {/* Search Input */}
      <div className="flex w-full max-w-lg mb-6">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city name (e.g. New Delhi)"
          className="flex-grow p-3 rounded-l-lg border border-gray-300 focus:outline-none"
        />
        <button
          onClick={fetchHotels}
          className="bg-blue-600 text-white px-5 rounded-r-lg hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {/* Error */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Loading */}
      {loading && <p className="text-gray-600">Searching hotels...</p>}

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {hotel.properties.name || "Unnamed Hotel"}
            </h2>
            <p className="text-gray-600 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-red-500" />
              {hotel.properties.address_line2 || "No address available"}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {hotel.properties.city}, {hotel.properties.country}
            </p>
          </div>
        ))}
      </div>

      {/* No results */}
      {!loading && hotels.length === 0 && !error && (
        <p className="text-gray-500 mt-6">No hotels found yet. Try searching a city!</p>
      )}
    </div>
  );
}

export default HotelFinder;
