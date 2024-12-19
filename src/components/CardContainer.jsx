import React from "react";
import CardType1 from "./CardType1";

const CardContainer = () => {
  // Internal Card Data
  const cards = [
    {
      image: "https://assets.goal.com/images/v3/blt62d267964ce29051/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202024-07-15T091826.563.jpg",
      title: "Chelsea Mens 2024",
      buttonLabel: "Learn More",
     
    },
    {
      image: "https://assets.goal.com/images/v3/blt62d267964ce29051/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202024-07-15T091826.563.jpg",
      title: "Chelsea Mens 2024",
      buttonLabel: "Learn More",
      
    },
    {
      image: "https://assets.goal.com/images/v3/blt62d267964ce29051/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202024-07-15T091826.563.jpg",
      title: "Chelsea Mens 2024",
      buttonLabel: "Learn More",
      
    },
    {
      image: "https://assets.goal.com/images/v3/blt62d267964ce29051/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202024-07-15T091826.563.jpg",
      title: "Chelsea Mens 2024",
      buttonLabel: "Learn More",
      
    },
  ];

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Cards Container */}
        <div className="flex flex-wrap -mx-4">
          {cards.map((card, index) => (
            <div key={index} className="w-full lg:w-1/2 px-4 mb-6">
              <CardType1
                image={card.image}
                title={card.title}
                buttonLabel={card.buttonLabel}
                onButtonClick={card.onButtonClick}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardContainer;
