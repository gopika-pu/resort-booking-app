import React, { useState } from "react";
import axios from "axios";

const BookingForm = ({ closeBooking }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: 1,
    date: "",
    time: "",
    roomType: "Deluxe",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ Your Render backend URL
      const BACKEND_URL = "https://resort-booking-app-4sqm.onrender.com";

      await axios.post(`${BACKEND_URL}/api/bookings`, formData);

      setMessage("Booking successful! We will contact you shortly.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        guests: 1,
        date: "",
        time: "",
        roomType: "Deluxe",
      });

      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      console.error(err);
      setMessage("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-lg w-full relative shadow-lg">
        <button
          onClick={closeBooking}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold text-xl"
        >
          ×
        </button>

        <h2 className="text-4xl font-bold mb-6 text-center">Book Your Stay</h2>

        <form className="grid gap-4" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="p-3 border rounded" />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="p-3 border rounded" />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="p-3 border rounded" />
          <input type="number" name="guests" placeholder="Guests" value={formData.guests} onChange={handleChange} min="1" max="10" required className="p-3 border rounded" />
          <input type="date" name="date" value={formData.date} onChange={handleChange} required className="p-3 border rounded" />
          <input type="time" name="time" value={formData.time} onChange={handleChange} required className="p-3 border rounded" />
          <select name="roomType" value={formData.roomType} onChange={handleChange} className="p-3 border rounded">
            <option value="Deluxe">Deluxe Room</option>
            <option value="Suite">Suite</option>
            <option value="Villa">Villa</option>
          </select>

          <button type="submit" disabled={loading} className="p-3 bg-black text-white rounded transition">
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-black font-medium">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
