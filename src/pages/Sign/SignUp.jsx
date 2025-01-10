import SignForm from "../../components/SignForm/SignUpForm";

const Sign = () => {
  return (
    <>
      <SignForm
        title="Sign Up"
        paragraph="Enter your email and username , password to sign up!"
        btn="Sign Up"
        link="Have an account? Log in"
        to="/signIn"
      />
    </>
  );
};

export default Sign;
