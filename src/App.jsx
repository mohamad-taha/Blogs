import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SignIn from "./pages/Sign/SignIn";
import SignUp from "./pages/Sign/SignUp";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="appContainer">
        <Navbar />
        <div className="contentContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="signUp" element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
