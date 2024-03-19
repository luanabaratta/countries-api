import {useState} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
const Header = ( { placeholder }) => {
  const continents = [
    {
      name: "Mundo",
      code: "all",
    },
    {
      name: "África",
      code: "africa",
    },
    {
      name: "Ásia",
      code: "asia",
    },
    {
      name: "Europa",
      code: "europe",
    },
    {
      name: "América",
      code: "america",
    },
    {
      name: "Oceania",
      code: "oceania",
    },
  ];

  const [activeBtn, setActiveBtn] = useState("all");

  const handleClick = e => {
    const category = e.currentTarget.dataset.gh;
    setActiveBtn(category);
    console.log(category)
  }
  return (
      <>
        <header>
          <div className="filter-options">
            <div className="search">
              <form>
                <div>
                  <AiOutlineSearch/>
                  <input
                      type="text"
                      placeholder={placeholder}
                      spellCheck={false}
                  />
                  <button className="btn">Buscar</button>
                </div>
              </form>
            </div>

            <div className="buttons center">
              {
                continents.map((continent, index) => {
                  const {code, name} = continent;
                  return (
                      <button
                          key={index}
                          onClick={handleClick}
                          className={activeBtn === code ? "active btn bn" : "btn bn"}
                          data-gh={code}
                      >
                        {name}
                      </button>
                  )
                })
              }
            </div>
          </div>
        </header>
      </>
  );
};

export default Header;
