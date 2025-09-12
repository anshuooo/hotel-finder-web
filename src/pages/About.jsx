import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[#CFFFDC]">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full overflow-hidden">
          <div className="bg-[#2E6F40] p-6">
            <h1 className="text-4xl font-bold text-white text-center">About Hotel Finder</h1>
          </div>
          <div className="p-8">
            <div className="space-y-6 text-[#253D2C]">
              <p className="text-lg leading-relaxed">
                Welcome to <span className="font-semibold text-[#2E6F40]">Hotel Finder</span>, your premier destination for discovering and booking the perfect accommodations for your travels.
              </p>
              <div className="bg-[#F0F8F2] p-6 rounded-lg border-l-4 border-[#68BA7F]">
                <h2 className="text-2xl font-semibold text-[#2E6F40] mb-3">Our Mission</h2>
                <p className="text-[#253D2C] leading-relaxed">
                  We're dedicated to making hotel search effortless and enjoyable. Our platform helps you find the best hotels that match your preferences, whether you're traveling for business or leisure.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#68BA7F]">
                  <h3 className="text-xl font-semibold text-[#2E6F40] mb-3">Why Choose Us?</h3>
                  <ul className="space-y-2 text-[#253D2C]">
                    <li className="flex items-start">
                      <span className="text-[#68BA7F] mr-2">✓</span>
                      Extensive hotel database
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#68BA7F] mr-2">✓</span>
                      Best price guarantee
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#68BA7F] mr-2">✓</span>
                      Easy booking process
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#68BA7F]">
                  <h3 className="text-xl font-semibold text-[#2E6F40] mb-3">Our Vision</h3>
                  <p className="text-[#253D2C] leading-relaxed">
                    To become the most trusted and user-friendly hotel booking platform, connecting travelers with their ideal accommodations worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;