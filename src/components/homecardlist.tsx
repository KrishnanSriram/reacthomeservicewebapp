type CardData = {
  title: String;
  text: String;
};

type HomeCard = {
  cards: CardData[];
};

const CardList = (props: HomeCard) => {
  console.log('Size of list - ', props.cards.length);
  return (
    <div>
      {props.cards.map((card, index) => (
        <p key={index}>{card.text}</p>
      ))}
    </div>
  );
};

export default CardList;
