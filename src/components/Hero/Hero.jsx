import "./hero.css";

const Hero = () => {
  return (
    <div className="container">
      <div className="hero">
        <h1>Stories and interviews</h1>
        <p>
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates.
        </p>
        <form>
          <input
            className="signInputs"
            type="email"
            placeholder="Enter your email"
          />
          <button aria-label="subscribe" className="primaryBtn">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
