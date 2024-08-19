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
        <article className="section-inner">
          <div>
            <h1 className="section-title">Take charge of your matches</h1>
            <p>
              Manage queueing, sequencing and tournaments all in one web app!
            </p>
          </div>
          <div className="btn-group">
            <button className="btn btn-primary">Start Queueing</button>
            <button className="btn btn-secondary">
              Join an existing group
            </button>
          </div>
        </article>
      </section>
    </Wrapper>
  );
};

export default Landing;
