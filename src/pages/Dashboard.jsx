import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  useEffect(() => {
    const userRole = localStorage.getItem("role"); // 🔑 role backend se aya tha
    if (!userRole) {
      navigate("/login"); // agar login nahi hai to wapas bhejo
    } else {
      setRole(userRole);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  const goHome = () => {
    navigate("/"); // Home page pe le jayega
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[90%] max-w-3xl">
        <h1 className="text-2xl font-bold text-center mb-6">Dashboard</h1>

        {/* Customer Dashboard */}
        {role === "customer" && (
          <div>
            <h2 className="text-xl font-semibold text-emerald-600 mb-4">
              Customer Dashboard
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Search Hotels</li>
              <li>Book Rooms</li>
              <li>View Your Bookings</li>
            </ul>
          </div>
        )}

        {/* Hotel User Dashboard */}
        {role === "hotelUser" && (
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Hotel User Dashboard
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Add / Manage Hotels</li>
              <li>View Bookings</li>
              <li>Update Availability</li>
            </ul>
          </div>
        )}

        {/* Admin Dashboard */}
        {role === "admin" && (
          <div>
            <h2 className="text-xl font-semibold text-red-600 mb-4">
              Admin Dashboard
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Manage Users</li>
              <li>View All Hotels</li>
              <li>System Reports</li>
            </ul>
          </div>
        )}

        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={handleLogout}
            className="w-full bg-gray-800 text-white py-2 rounded-lg"
          >
            Logout
          </button>

          <button
            onClick={goHome}
            className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
