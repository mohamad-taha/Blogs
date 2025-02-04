import { Link } from "react-router-dom";
import Input from "../input/Input";

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
            type="text"
            id="username"
            helperText="Enter your username"
            name="username"
          />
          <Input
            type="email"
            id="email"
            helperText="Enter your email"
            name="email"
          />
          <Input
            type="text"
            id="password"
            helperText="Enter your Password"
            name="password"
          />
          <button aria-label="sign up" className="primaryBtn" type="submit">
            {props.btn}
          </button>
          <Link to={props.to}>{props.link}</Link>
        </form>
      </div>
    </div>
  );
};

export default SignForm;
