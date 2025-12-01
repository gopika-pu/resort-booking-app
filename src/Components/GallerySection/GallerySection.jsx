import React, { useState, useEffect } from "react";

// Original image list
const galleryImages = [
  "https://i.ibb.co/C5sZyTYN/premium-photo-1687960116497-0dc41e1808a2.jpg",
  "https://i.ibb.co/fVD25xcC/pexels-pixabay-258154.jpg",
  "https://i.ibb.co/B2sBfH02/pexels-boonkong-boonpeng-442952-1134176.jpg",
  "https://i.ibb.co/TMw5xVZh/istockphoto-641448082-612x612.jpg",
  "https://i.ibb.co/Rkpv1w50/new-camp-della-exterior-v4.webp",
  "https://i.ibb.co/jYgcNkM/caption.jpg"
];

// Function to divide array into chunks
const chunkImages = (arr, size) =>
  arr.reduce((chunks, item, index) => {
    const chunkIndex = Math.floor(index / size);
    if (!chunks[chunkIndex]) chunks[chunkIndex] = [];
    chunks[chunkIndex].push(item);
    return chunks;
  }, []);

const GallerySection = () => {
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState([]);

  // 💡 Detect screen size and update slides count
  const updateSlides = () => {
    let size = 3; // default desktop

    if (window.innerWidth < 768) {
      size = 1; // mobile
    } else if (window.innerWidth < 1024) {
      size = 2; // tablet
    }

    const newSlides = chunkImages(galleryImages, size);
    setSlides(newSlides);

    // prevent slide index overflow
    if (current >= newSlides.length) setCurrent(0);
  };

  useEffect(() => {
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // Auto-slide every 5 sec
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides]);

  if (slides.length === 0) return null;

  return (
    <section className="py-16 gallery">
      <h2 className="text-4xl font-bold text-center mb-10">Resort Views</h2>

      <div className="max-w-6xl mx-auto px-4" style={{ scrollBehavior: "smooth" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-700 ease-out">
          {slides[current].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt=""
              className="w-full h-60 object-cover rounded-xl shadow-md"
            />
          ))}
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
