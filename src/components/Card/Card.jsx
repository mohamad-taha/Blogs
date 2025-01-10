import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={`${props.img}`} alt="card-img" />
      <small>{props.author}</small>
      <a href="#">
        {props.link}
        <img
          src="./../public/assets/imgs/arrowUpRight.svg"
          alt="arrowUpRight"
        />
      </a>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
