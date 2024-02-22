import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            I'm baby raw denim cred plaid hell of cupping. Mixtape blue bottle
            photo booth activated charcoal, cornhole chia typewriter ascot
            portland next level solarpunk affogato. Hot chicken poke retro
            disrupt chambray.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
