import './Navbar.css';
import {BsCodeSlash} from "react-icons/bs";
import {AiOutlineGlobal} from "react-icons/ai";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
      <>
        <nav>
          <div className="navbar">
            <ul>
              <li className="logo center">
                <BsCodeSlash />
                <h3>Dev<span className="gray">Mundo</span></h3>
              </li>
              <li className="app-links">
                <div>
                  <Link to="/mapa">
                    <h5 className="cente">
                      <AiOutlineGlobal/>
                      <span>Abrir o mapa</span>
                    </h5>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </>
  );
};

export default Navbar;
