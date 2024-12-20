import React from "react";

const CustomerCard = ({ image, name, rating, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center space-y-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Customer Image */}
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover"
      />

      {/* Customer Name */}
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

      {/* Customer Rating */}
      <div className="flex items-center space-x-1">
        {Array(rating)
          .fill()
          .map((_, index) => (
            <span key={index} className="text-yellow-400">&#9733;</span> // Star icon
          ))}
        {Array(5 - rating)
          .fill()
          .map((_, index) => (
            <span key={index} className="text-gray-300">&#9733;</span> // Faded stars
          ))}
      </div>

      {/* Customer Review */}
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default CustomerCard;
