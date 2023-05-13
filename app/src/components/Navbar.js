import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <Link to="/">
        <h1>Photos</h1>
      </Link>
    </header>
  );
};

export default Navbar;