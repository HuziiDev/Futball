import React from "react";
import Card from './CardType2' // Import Card component

const OurProducts = () => {
  // Product data
  const products = [
    { id: 1, image: "https://i.ebayimg.com/thumbs/images/g/rD8AAOSwSgBl7VYJ/s-l1200.jpg", title: "Product 1" },
    { id: 2, image: "https://i.ebayimg.com/thumbs/images/g/rD8AAOSwSgBl7VYJ/s-l1200.jpg", title: "Product 2" },
    { id: 3, image: "https://i.ebayimg.com/thumbs/images/g/rD8AAOSwSgBl7VYJ/s-l1200.jpg", title: "Product 3" },
    { id: 4, image: "https://i.ebayimg.com/thumbs/images/g/rD8AAOSwSgBl7VYJ/s-l1200.jpg", title: "Product 4" },
    { id: 1, image: "https://i.ebayimg.com/thumbs/images/g/rD8AAOSwSgBl7VYJ/s-l1200.jpg", title: "Product 1" },
    { id: 2, image: "https://i.ebayimg.com/thumbs/images/g/rD8AAOSwSgBl7VYJ/s-l1200.jpg", title: "Product 2" },
    { id: 3, image: "https://i.ebayimg.com/thumbs/images/g/rD8AAOSwSgBl7VYJ/s-l1200.jpg", title: "Product 3" },
    { id: 4, image: "https://i.ebayimg.com/thumbs/images/g/rD8AAOSwSgBl7VYJ/s-l1200.jpg", title: "Product 4" },
  ];

  return (
    <section className="w-full py-8 bg-slate-300 rounded-md">
      {/* Heading */}
      <h2 className="text-2xl text-gray-700 sm:text-4xl font-bold text-center mb-8">
        Our Products
      </h2>

      {/* Card Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8">
        {products.map((product) => (
          <Card key={product.id} image={product.image} title={product.title} />
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
