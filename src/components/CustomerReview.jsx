import React from "react";
import CustomerCard from "./CustomerCard"; // Import CustomerCard

const CustomerReview = () => {
  // Mock customer reviews
  const reviews = [
    {
      id: 1,
      image: "https://media.istockphoto.com/id/1254871086/photo/surprised-soccer-player-holding-a-ball-and-looking-at-a-mobile-phone.jpg?s=612x612&w=0&k=20&c=ZGdjWwWAYFqBr4eeG3LOh8uj8MlbO1WcJrP7Q0_mv-I=",
      name: "John Doe",
      rating: 5,
      description: "Amazing product! Totally worth the price. Highly recommended!",
    },
    {
      id: 2,
      image: "https://media.istockphoto.com/id/1254871086/photo/surprised-soccer-player-holding-a-ball-and-looking-at-a-mobile-phone.jpg?s=612x612&w=0&k=20&c=ZGdjWwWAYFqBr4eeG3LOh8uj8MlbO1WcJrP7Q0_mv-I=",
      name: "Jane Smith",
      rating: 4,
      description:
        "The product quality is excellent. Delivery could be faster, though.",
    },
    {
      id: 3,
      image: "https://media.istockphoto.com/id/1254871086/photo/surprised-soccer-player-holding-a-ball-and-looking-at-a-mobile-phone.jpg?s=612x612&w=0&k=20&c=ZGdjWwWAYFqBr4eeG3LOh8uj8MlbO1WcJrP7Q0_mv-I=",
      name: "Mark Wilson",
      rating: 4,
      description:
        "Great value for money. The design is sleek, and it works perfectly.",
    },
  ];

  return (
    <section className="py-8 bg-gray-50">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8">
        Customer Reviews
      </h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8">
        {reviews.map((review) => (
          <CustomerCard
            key={review.id}
            image={review.image}
            name={review.name}
            rating={review.rating}
            description={review.description}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
