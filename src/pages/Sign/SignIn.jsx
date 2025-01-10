import SignForm from "../../components/SignForm/SignInForm";

const Sign = () => {
  return (
    <>
      <SignForm
        title="Sign In"
        paragraph="Enter your email and password to sign in !"
        btn="Sign In"
        link="Don't have an account ? Sign up"
        to="/signUp"
      />
    </>
  );
};

export default Sign;
