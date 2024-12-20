import React from 'react'

const CardType2 = ({ image, title }) => {
  return (
    <div className="relative w-full bg-gray-100 overflow-hidden rounded-md shadow-lg">
    {/* Image */}
    <img
      src={image}
      alt={title}
      className="w-[95%] h-[95%] object-cover mx-auto rounded-md"
    />
    {/* Title */}
    <div className="absolute bottom-6 left-1/2  text-2xl transform -translate-x-1/2 bg-opacity-60 text-white font-bold text-center px-2 py-1 rounded-md">
      {title}
    </div>
  </div>
  )
}

export default CardType2