import "./HeroSection.css"
import { motion } from "framer-motion";

export default function HeroSection({ openBooking }: { openBooking: () => void }) {
  return (
    <div className="w-full h-[600px] bg-center flex flex-col items-center justify-center text-white relative banner" style={{backgroundImage: "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80')"}}>
      <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">Mantras Resort</h1>
      <ul className="flex list-block text-xl mt-3 gap-6 relative">
        <li>Relax</li>
        <li>Explore</li>
        <li>Experience Luxury</li>
      </ul>
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 12px rgba(255,255,255,0.8)" }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={openBooking}
        className="px-8 py-3 mt-6 bg-white text-black rounded-full font-semibold"
      >
        Book Now
      </motion.button>
    </div>
  );
}

