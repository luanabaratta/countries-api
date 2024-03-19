import './Navbar.css';
import {BsCodeSlash} from "react-icons/bs";
import {AiOutlineGlobal} from "react-icons/ai";

const Navbar = () => {
  return (
      <>
        <nav>
          <div className="navbar">
            <ul>
              <li className="logo center">
                <BsCodeSlash />
                <h3>Dev<span className="gray">Moon</span></h3>
              </li>
              <li className="app-links">
                <div>
                  <h5 className="cente">
                    <AiOutlineGlobal />
                    <span>Abrir o mapa</span>
                  </h5>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </>
  );
};

export default Navbar;
