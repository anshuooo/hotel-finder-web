import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const Hotels = [
    {
      name: "The Grand Palace Hotel",
      phone: "+91 98765 43210",
      email: "info@grandpalace.com",
      address: "MG Road, Lucknow, Uttar Pradesh",
    },
    {
      name: "Royal Residency",
      phone: "+91 91234 56789",
      email: "contact@royalresidency.com",
      address: "Hazratganj, Lucknow, Uttar Pradesh",
    },
    {
      name: "City Comfort Inn",
      phone: "+91 99887 76655",
      email: "support@citycomfort.com",
      address: "Gomti Nagar, Lucknow, Uttar Pradesh",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#CFFFDC]">
      <Navbar />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="bg-[#2E6F40] p-6">
              <h1 className="text-4xl font-bold text-white text-center">Contact Us</h1>
            </div>
            <div className="p-8">
              <div className="text-center mb-8">
                <p className="text-lg text-[#253D2C] mb-4">
                  Have questions or need assistance? Reach out to our team.
                </p>
                <div className="space-y-2">
                  <p className="text-[#2E6F40] font-medium">Email: info@hotelfinder.com</p>
                  <p className="text-[#2E6F40] font-medium">Phone: +1 (555) 123-4567</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold text-[#2E6F40] mb-4">Send us a Message</h2>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#253D2C] mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#68BA7F] focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#253D2C] mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#68BA7F] focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#253D2C] mb-1">Message</label>
                      <textarea
                        id="message"
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#68BA7F] focus:border-transparent"
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#2E6F40] text-white py-2 px-6 rounded-md hover:bg-[#255a33] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#68BA7F] focus:ring-offset-2"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-[#2E6F40] mb-4">Our Hotels</h2>
                  <div className="space-y-4">
                    {Hotels.map((hotel, idx) => (
                      <div key={idx} className="border-l-4 border-[#68BA7F] bg-[#F0F8F2] p-4 rounded-r-lg">
                        <h3 className="font-bold text-lg text-[#2E6F40]">{hotel.name}</h3>
                        <div className="mt-2 space-y-1">
                          <p className="flex items-center text-sm text-[#253D2C]">
                            <svg className="w-4 h-4 mr-2 text-[#68BA7F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            {hotel.phone}
                          </p>
                          <p className="flex items-center text-sm text-[#253D2C]">
                            <svg className="w-4 h-4 mr-2 text-[#68BA7F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            {hotel.email}
                          </p>
                          <p className="flex items-start text-sm text-[#253D2C]">
                            <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#68BA7F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            {hotel.address}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
