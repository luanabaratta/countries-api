import './Countries.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from "react";

const Countries = () => {
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

  const [contries, setContries] = useState("");
  const [activeBtn, setActiveBtn] = useState("all");

  const handleClick = e => {
    const category = e.currentTarget.dataset.gh;
    setActiveBtn(category);
    console.log(category)
  };

  return (
      <>
        <header>
          <div className="filter-options">
            <div className="search">
              <form action="">
                <div>
                  <AiOutlineSearch/>
                  <input
                      type="text"
                      placeholder="Buscar o país aqui"
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

export default Countries;
