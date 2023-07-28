import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";


const Header = () => {
  
  

  return (
    <div>
     
      <Link to={"/"}>main page</Link>
      <Link to={"/create"}>create page</Link>
    </div>
  );
};

export default Header;