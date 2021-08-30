import { Link } from "react-router-dom";
const NoMatch = () => {
  return (
    <div>
      <h1>Ummm...</h1>
      <br></br>
      <p>Seems like we couldn't find that webpage</p>
      <Link to="/">
        <br></br>
        <p>Back to homepage?</p>
      </Link>
    </div>
  );
};

export default NoMatch;
