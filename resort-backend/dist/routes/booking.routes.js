"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const booking_model_1 = __importDefault(require("../models/booking.model"));
const router = express_1.default.Router();
// POST /api/bookings
router.post("/bookings", async (req, res) => {
    try {
        const booking = await booking_model_1.default.create(req.body);
        res.json({ success: true, booking });
    }
    catch (error) {
        res.status(500).json({ success: false, error });
    }
});
// GET /api/bookings
router.get("/bookings", async (req, res) => {
    try {
        const bookings = await booking_model_1.default.find();
        res.json({ success: true, bookings });
    }
    catch (error) {
        res.status(500).json({ success: false, error });
    }
});
exports.default = router;
//# sourceMappingURL=booking.routes.js.map