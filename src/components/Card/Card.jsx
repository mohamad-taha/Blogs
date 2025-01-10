import { MdArrowOutward } from "react-icons/md";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="card-img" />
      <small>{props.author}</small>
      <a href="#">
        <span>{props.link}</span>
        <MdArrowOutward fontSize={30} />
      </a>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
