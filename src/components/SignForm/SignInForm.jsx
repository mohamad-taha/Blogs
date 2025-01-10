import { Link } from "react-router-dom";
import Input from "../input/Input";
import "./SignForm.css";

const SignForm = (props) => {
  return (
    <div className="container">
      <div className="formContainer">
        <form className="signForm">
          <div>
            <h1>{props.title}</h1>
            <p>{props.paragraph}</p>
          </div>
          <Input
            type="email"
            id="email"
            helperText="Enter your email"
            name="email"
          />
          <Input
            type="password"
            id="password"
            helperText="Enter your Password"
            name="password"
          />
          <button className="primaryBtn" type="submit">
            {props.btn}
          </button>
          <Link to={props.to}>{props.link}</Link>
        </form>
      </div>
    </div>
  );
};

export default SignForm;
