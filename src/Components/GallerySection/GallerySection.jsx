import React, { useState, useEffect } from "react";


const galleryImages = [
  "https://i.ibb.co/C5sZyTYN/premium-photo-1687960116497-0dc41e1808a2.jpg",
  "https://i.ibb.co/fVD25xcC/pexels-pixabay-258154.jpg",
  "https://i.ibb.co/B2sBfH02/pexels-boonkong-boonpeng-442952-1134176.jpg",
  "https://i.ibb.co/TMw5xVZh/istockphoto-641448082-612x612.jpg",
  "https://i.ibb.co/Rkpv1w50/new-camp-della-exterior-v4.webp",
  "https://i.ibb.co/jYgcNkM/caption.jpg"
];

// Split into groups of 3
const chunkImages = (arr, size) =>
  arr.reduce((chunks, item, index) => {
    const chunkIndex = Math.floor(index / size);
    if (!chunks[chunkIndex]) chunks[chunkIndex] = [];
    chunks[chunkIndex].push(item);
    return chunks;
  }, []);

const slides = chunkImages(galleryImages, 3);

const GallerySection = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 gallery">
      <h2 className="text-4xl font-bold text-center mb-10">Resort Views</h2>

      {/* Slide container */}
      <div className="max-w-6xl mx-auto px-4" style={{scrollBehavior:"smooth"}}>
        <div className="grid grid-cols-3 gap-4 transition-all duration-700 ease-out img-card">
          {slides[current].map((img, idx) => (
            <img key={idx} src={img} alt="" className="w-full h-60 object-cover rounded-xl shadow-md" />
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
