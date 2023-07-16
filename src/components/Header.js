import { Link, NavLink } from "react-router-dom";

const Header = () => {

  const navLinkStyles = ({isActive})=>{
    return{
      textDecoration: isActive ? "none" : "underline",
      color: isActive? "Blue" : "Black"
    }
  }
  return (
    <div className="header">
      {/* <h1>Movies Review</h1> */}
      {/* <Link to={"/"}>
        <h1>Home</h1>
      </Link>
      <Link to={"/about"}>
        <h1>About</h1>
      </Link>
      <Link to="/contact">
        <h1>Contact</h1>
      </Link> */}

      <NavLink style={navLinkStyles} to={"/app"}>
        <h1>Home</h1>
      </NavLink>
      <NavLink style={navLinkStyles} to={"/about"}>
        <h1>About</h1>
      </NavLink>
      <NavLink style={navLinkStyles} to="/contact">
        <h1>Contact</h1>
      </NavLink>
    </div>
  );
};

export default Header;
