import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/Error";

const Error = () => {
  const error = useRouteError();

  return (
    <Wrapper>
      {error.status === 404 ? (
        <>
          <article>
            <h1>oops!</h1>
            <p>We can't seem to find the page you're looking for.</p>
            <p>
              Error code: {error.status} ({error.statusText})
            </p>
          </article>
          <Link to="/" className="btn btn-primary">
            Go back to home
          </Link>
        </>
      ) : (
        <article>
          <h1>oops!</h1>
          <p>Something went wrong</p>
        </article>
      )}
    </Wrapper>
  );
};

export default Error;
