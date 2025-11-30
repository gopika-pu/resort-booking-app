import { HomeModernIcon, SparklesIcon, SunIcon } from "@heroicons/react/24/outline";

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        
     
        <div className="flex flex-col items-center text-center p-6 shadow-xl rounded-xl">
          <HomeModernIcon className="h-12 w-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Accommodation</h3>
          <p className="text-gray-600">
            Comfortable rooms, cottages, and luxury suites with beautiful views.
          </p>
        </div>

       
        <div className="flex flex-col items-center text-center p-6 shadow-xl rounded-xl">
          <SunIcon className="h-12 w-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Adventure Activities</h3>
          <p className="text-gray-600">
            Trekking, kayaking, campfire nights and more thrilling experiences.
          </p>
        </div>

       
        <div className="flex flex-col items-center text-center p-6 shadow-xl rounded-xl">
          <SparklesIcon className="h-12 w-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Wellness & Spa</h3>
          <p className="text-gray-600">
            Relaxing spa therapies to refresh your mind and body.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;
