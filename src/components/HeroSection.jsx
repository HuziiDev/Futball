import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <section className="relative w-full h-screen bg-gray-900">
      {/* Hero Content */}
      <div className="absolute top-20 sm:top-40 md:top-60 flex flex-col items-center justify-center text-center text-white z-20 px-4">
        <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 animate__animated animate__fadeIn">
          Welcome to Our Website
        </h1>
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light mb-4 sm:mb-8 animate__animated animate__fadeIn animate__delay-1s">
          Discover amazing products and services.
        </p>
        <button className="bg-red-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-lg hover:bg-blue-700 transition-colors duration-300">
          Shop Now
        </button>
      </div>

      {/* Carousel */}
      <div className="w-full h-full overflow-hidden" style={{ height: "calc(100vh - 100px)" }}>
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
        <div className="slick-dots"></div>
      </div>
    </section>
  );
};

export default HeroSection;
