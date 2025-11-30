import HeroSection from "./Components/HeroSection/HeroSection";
import ServicesSection from "./Components/ServiceSection/ServicesSection";
import GallerySection from "./Components/GallerySection/GallerySection";
import Footer from "./Components/Footer/Footer";
import BookingForm from "./Components/BookingForm";
import { useState } from "react";

function App() {
const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="w-full min-h-screen">
      <HeroSection openBooking={() => setShowBooking(true)} />
      {showBooking && <BookingForm closeBooking={() => setShowBooking(false)} />}
      <ServicesSection />
      <GallerySection />
      <Footer /> 
    </div>
  );
}

export default App;
