import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p>123 kochi infopark Road, Kerala, India</p>
          <p>Phone: +91 98765 43210</p>
          <p>Email: info@mantraresort.com</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">

            <a href="/#" className="hover:text-blue-500">
              <FaFacebookF />
            </a>

            <a href="/#" className="hover:text-pink-500">
              <FaInstagram />
            </a>

            <a href="/#" className="hover:text-blue-400">
              <FaTwitter />
            </a>

            <a href="/#" className="hover:text-red-500">
              <FaYoutube />
            </a>

            <a href="/#" className="hover:text-blue-600">
              <FaLinkedinIn />
            </a>

          </div>
        </div>

        {/* Copyright */}
        <div className="md:text-right">
          <h3 className="text-xl font-semibold mb-3">Mantras Resorts</h3>
          <p>© {new Date().getFullYear()} Mantras. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
