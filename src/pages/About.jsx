import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white/80 rounded-lg p-8 shadow-lg max-w-xl mx-auto mt-32">
          <h1 className="text-3xl font-bold mb-4 text-center">About Hotel Finder</h1>
          <p className="text-gray-700 text-center">
            Hotel Finder is a modern web app to help you search and discover hotels in any city.
            Enter your destination, date, and number of persons to find the best options for your stay.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;