// src/pages/Home.jsx
import { useState } from "react";
import useLenis from "../pages/Layout";
import hotelVideo from "../assets/hotel.mp4";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReviewsPage from "./ReviewsPage";
import Hero from "../Components/Hero";
import HotelCards from "./Hotelcard";

function Home() {
  useLenis();

  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [persons, setPersons] = useState(1);

  const searchHotels = () => {
    console.log("Searching Hotels:", { location, date, persons });
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />

      {/* Hero Section with Video */}
      <section className="relative h-[90vh] w-full">
        {/* Background Video */}
        <video
          src={hotelVideo}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide">
            Experience Luxury
          </h1>
          <h2 className="text-2xl md:text-4xl font-light mb-8 opacity-90">
            The Class You Deserve
          </h2>
          <p className="text-lg md:text-xl font-light opacity-80 leading-relaxed max-w-3xl">
            Discover world-class accommodations crafted for the discerning traveler.
            Where every moment becomes an unforgettable memory.
          </p>

          {/* Hero Search Form */}
          <div className="mt-10 w-full max-w-4xl">
            <Hero
              location={location}
              setLocation={setLocation}
              date={date}
              setDate={setDate}
              persons={persons}
              setPersons={setPersons}
              searchHotels={searchHotels}
            />
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-20 px-6 md:px-16 bg-white text-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Hotels</h2>
        <HotelCards />
      </section>

      {/* Reviews */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Guests Say
        </h2>
        <ReviewsPage />
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Book Your Dream Stay?
        </h2>
        <p className="mb-8 text-lg">
          Start exploring luxury hotels and resorts today.
        </p>
        <a
          href="/hotel-finder"
          className="inline-block bg-white text-indigo-600 hover:bg-gray-200 px-6 py-3 rounded-xl font-semibold"
        >
          Get Started
        </a>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
