import { Request, Response } from "express";
import Booking from "../models/booking.model";

export const createBooking = async (req: Request, res: Response) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Booking saved", booking });
  } catch (error) {
    res.status(400).json({ error: "Invalid data", details: error });
  }
};

export const getBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
