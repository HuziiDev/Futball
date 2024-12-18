import React from "react";
import Slider from "react-slick"; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme CSS

const HeroSection = () => {
 


  // Slick Carousel Settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop
    speed: 500, // Speed of slide transition
    autoplay: true, // Auto slide
    autoplaySpeed: 2500, // Time interval between auto slides (3 seconds)
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    draggable: true, // Enable dragging by mouse
    pauseOnHover: true, // Pause autoplay on hover
    arrows: false, // Remove default arrows

    
  };

  return (
    <section className="relative w-full h-screen bg-gray-900">
      {/* Hero Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate__animated animate__fadeIn">
          Welcome to Our Website
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 animate__animated animate__fadeIn animate__delay-1s">
          Discover amazing products and services.
        </p>
        <button className="bg-red-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors duration-300">
          Shop Now
        </button>
      </div>

      {/* Carousel */}
      <div className="w-full  max-w-full overflow-hidden" style={{ height: "calc(100vh - 100px)" }}>
        <Slider {...settings}>
          <div className="relative">
            <img
              src="https://img.chelseafc.com/image/upload/f_auto,w_1440,c_fill,g_faces,q_90/editorial/news/2023/10/10/GettyImages-1141292107.jpg"
              alt="Carousel Image 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
          <div className="relative">
            <img
              src="https://images.news18.com/ibnlive/uploads/2023/10/edenhazardretirementreason-2023-10-4d94f31adfe216e6110d7d7eb8a89337.jpg"
              alt="Carousel Image 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
          <div className="relative">
            <img
              src="https://via.placeholder.com/1920x1080?text=Image+3"
              alt="Carousel Image 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
        </Slider>
      </div>

      {/* Dots for Carousel Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
        <div className="slick-dots">
          {/* Default dots will be rendered here */}
        </div>
      </div>
    </section>

    
    
  );
};

export default HeroSection;
