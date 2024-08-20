import { badminton_smash } from "../assets/images";
import Wrapper from "../assets/wrappers/Landing";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <section className="section-hero">
        <div className="section-bg">
          <img src={badminton_smash} alt="badminton-smash" />
        </div>
        <article className="section-inner">
          <div>
            <h1 className="section-title">Take charge of your matches</h1>
            <p>
              Manage queueing, sequencing and tournaments all in one web app!
            </p>
          </div>
          <div className="btn-group">
            <Link to="/login" className="btn btn-primary">
              Start Queueing
            </Link>
            <Link className="btn btn-secondary">Join an existing group</Link>
          </div>
        </article>
      </section>
    </Wrapper>
  );
};

export default Landing;
