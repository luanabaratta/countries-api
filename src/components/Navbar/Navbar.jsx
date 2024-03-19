import './Navbar.css';
import {BsCodeSlash} from "react-icons/bs";

const Navbar = () => {
  return (
      <>
        <nav>
          <div className="navbar">
            <ul>
              <li className="logo">
                <BsCodeSlash />
                Dev<span className="danger">Moon</span>
              </li>
              <li className="app-links"></li>
            </ul>
          </div>
        </nav>
      </>
  );
};

export default Navbar;
