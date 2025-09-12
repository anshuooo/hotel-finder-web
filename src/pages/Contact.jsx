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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-6 max-w-xl w-full mx-auto flex flex-col justify-center">
        <div className="bg-white/80 rounded-lg p-8 shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-gray-700 text-center mb-6">
            You can contact us at: info@hotelfinder.com
          </p>
          <h2 className="text-xl font-semibold mb-4 text-center">Our Hotels</h2>
          <div className="space-y-4">
            {Hotels.map((hotel, idx) => (
              <div key={idx} className="border rounded-lg p-4 bg-white shadow">
                <h3 className="font-bold text-lg">{hotel.name}</h3>
                <p className="text-sm">Phone: {hotel.phone}</p>
                <p className="text-sm">Email: {hotel.email}</p>
                <p className="text-sm">Address: {hotel.address}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
