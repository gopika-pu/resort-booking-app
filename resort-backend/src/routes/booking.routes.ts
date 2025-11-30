import express from "express";
import Booking from "../models/booking.model";

const router = express.Router();

// CREATE booking
router.post("/bookings", async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json({ success: true, booking });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

// GET all bookings
router.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json({ success: true, bookings });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

export default router;
