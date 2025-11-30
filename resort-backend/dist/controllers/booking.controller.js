"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookings = exports.createBooking = void 0;
const booking_model_1 = __importDefault(require("../models/booking.model"));
const createBooking = async (req, res) => {
    try {
        const booking = new booking_model_1.default(req.body);
        await booking.save();
        res.status(201).json({ message: "Booking saved", booking });
    }
    catch (error) {
        res.status(400).json({ error: "Invalid data", details: error });
    }
};
exports.createBooking = createBooking;
const getBookings = async (req, res) => {
    try {
        const bookings = await booking_model_1.default.find().sort({ createdAt: -1 });
        res.json(bookings);
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};
exports.getBookings = getBookings;
//# sourceMappingURL=booking.controller.js.map