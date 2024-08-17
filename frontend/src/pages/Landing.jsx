import {
  badminton_smash,
  badminton_smash2,
  shuttlecock,
} from "../assets/images";
import Wrapper from "../assets/wrappers/Landing";

const Landing = () => {
  return (
    <Wrapper>
      <section className="section-hero">
        <div className="section-bg">
          <img src={badminton_smash} alt="badminton-smash" />
        </div>
        <div className="spacer"></div>
        <div className="section-inner">
          <h1 className="section-title">Take charge of your matches</h1>
          <p>Manage queueing, sequencing and tournaments all in one web app!</p>
          <div className="btn-group">
            <button className="btn btn-primary">Start Queueing</button>
            <button className="btn btn-secondary">
              Join an existing group
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="section-bg"></div>
        <div className="section-inner">
          <h1 className="section-title">Features</h1>
          <p>The following are features of Court Control</p>
          <div className="group-feature">
            <article>
              <h2>Feature 1</h2>
              <p>Description</p>
              <img src={shuttlecock} />
              <button className="btn btn-primary">See more</button>
            </article>
            <article>
              <h2>Feature 2</h2>
              <p>Description</p>
              <img src={shuttlecock} />
              <button className="btn btn-primary">See more</button>
            </article>
            <article>
              <h2>Feature 3</h2>
              <p>Description</p>
              <img src={shuttlecock} />
              <button className="btn btn-primary">See more</button>
            </article>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Landing;
