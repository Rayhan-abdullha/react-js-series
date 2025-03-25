import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const OfferModal = () => {
  const [isOpen, setIsOpen] = useState(() => {
    return sessionStorage.getItem("offerModalClosed") === "true" ? false : true;
  });

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
        sessionStorage.setItem("offerModalClosed", "true"); // Save modal state
      }, 5000);
    }
  }, [isOpen]);

  return (
    <div>
      <h1>Home Page</h1>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="bg-white px-8 rounded-2xl shadow-xl w-96 relative text-center border border-gray-200">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 bg-gray-200 p-1 rounded-full"
              onClick={() => {
                setIsOpen(false);
                sessionStorage.setItem("offerModalClosed", "true");
              }}
            >
              <X size={22} />
            </button>
            <h2 className="text-2xl font-extrabold text-gray-900">🔥 Exclusive Offer! 🔥</h2>
            <p className="text-gray-700 mt-3 text-lg">
              Enjoy <span className="text-red-500 font-bold">30% OFF</span> on all products. Limited time only!
            </p>
            <button className="mt-5 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:scale-105 transition-transform">
              Shop Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferModal;
