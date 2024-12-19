import React from "react";
import { FiArrowRight } from "react-icons/fi";

const CardType1 = ({ image, title, onButtonClick }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden transition-transform transform hover:scale-105 sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] 2xl:min-h-[500px] duration-500">
      {/* Image */}
      <div className="w-full h-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="p-4 sm:p-6 md:p-8">
        <h3 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-semibold mb-4 text-gray-800 text-center">
          {title}
        </h3>
        <div className="flex justify-center mt-4">
          <button
            onClick={onButtonClick}
            className="w-12 h-12 flex justify-center items-center border-2 border-black  text-white rounded-full hover:bg-slate-200 transition-transform transform hover:scale-110 shadow-lg"
          >
            <FiArrowRight className="text-black" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardType1;
