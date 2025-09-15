import React from 'react';
import useLenis from "../pages/Layout";
import hotelVideo from "../assets/hotel.mp4";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReviewsPage from "./ReviewsPage";
import HotelCards from "./Hotelcard";
import { useNavigate, Link } from "react-router-dom";
import Button from "../Components/Button";
import AnimatedHotelFeatures from "./AnimatedHotelFeatures";

function Home() {
  useLenis();
  const navigate = useNavigate(); // 🔹 Router navigation

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
        <div className="absolute inset-0" />

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide text-white drop-shadow-lg">
            Discover Your Perfect Stay
          </h1>
          <h2 className="text-2xl md:text-4xl font-light mb-8 text-[#CFFFDC]">
            Luxury Meets Comfort
          </h2>
          <p className="text-lg md:text-xl font-light text-white leading-relaxed max-w-3xl mb-10">
            Experience world-class accommodations in the most beautiful locations.
            Where every stay becomes an unforgettable memory.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              onClick={() => navigate("/hotel-finder")}
              variant="primary"
              size="lg"
              className="px-8 py-4 text-lg"
            >
              Find Hotels
            </Button>
            <Button
              onClick={() => document.getElementById('featured-hotels').scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg border-white text-white hover:bg-white/10"
            >
              Explore
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section id="featured-hotels" className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2E6F40] mb-4">Featured Hotels</h2>
            <div className="w-20 h-1 bg-[#68BA7F] mx-auto"></div>
          </div>
          <HotelCards />
        </div>
      </section>

      {/* Hotel Features */}
      <AnimatedHotelFeatures />

      {/* Reviews */}
      <section className="py-20 px-6 md:px-16 bg-[#F8FAF9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2E6F40] mb-4">
              What Our Guests Say
            </h2>
            <div className="w-20 h-1 bg-[#68BA7F] mx-auto mb-12"></div>
            <ReviewsPage />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#2E6F40] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Book Your Dream Stay?
          </h2>
          <p className="mb-10 text-lg text-[#CFFFDC]">
            Start exploring our curated selection of luxury hotels and resorts today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
             onClick={() => navigate("/hotel-finder")}
              variant="secondary"
              size="lg"
              className="px-8 py-4 text-lg"
            >
              Explore Hotels
            </Button>
            <Button
             onClick={() => navigate("/contact")}
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
