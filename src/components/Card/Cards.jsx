import Card from "./Card";
import CardData from "./Cards.json";

const Cards = () => {
  return (
    <div className="container">
      <div className="cardsContainer">
        <h1>All Blog Posts</h1>
        <div className="cardsBody">
          {CardData.map((card, idx) => (
            <Card
              key={idx}
              img={card.img}
              author={card.author}
              link={card.link}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
