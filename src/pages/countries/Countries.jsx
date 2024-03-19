// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Countries.css";
import { AiOutlineSearch, AiOutlineLoading } from "react-icons/ai";
import CountriesCards from "../../UI/card";

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
      name: "America",
      code: "america",
    },
    {
      name: "Oceania",
      code: "oceania",
    },
  ];
  const [countries, setCountries] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const searchCountry = (e) => {
    setSearchWord(e.target.value);
    const filteredData = countries.filter(
        (country) =>
            country.name.common
                .toLowerCase()
                .startsWith(searchWord.toLowerCase()) ||
            country.name.official.toLowerCase().includes(searchWord.toLowerCase())
    );
    setData(filteredData);
  };

  const [activeBtn, setActiveBtn] = useState("all");
  const handleClick = (e) => {
    const category = e.currentTarget.dataset.gh;
    const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);
    setActiveBtn(category);
    if (category === "all") {
      setData(countries);
    } else {
      const filteredData = countries.filter((country) =>
          country.region.includes(capitalize(category))
      );
      setData(filteredData);
    }
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(countries);
  }, [countries]);

  return (
      <>
        <header>
          <div className="filter-options center">
            <div className="search">
              <form>
                <div className="center">
                  <AiOutlineSearch />
                  <input
                      type="text"
                      placeholder="Buscar países"
                      spellCheck={false}
                      onChange={searchCountry}
                      value={searchWord}
                  />
                  <button className="btn">Buscar</button>
                </div>
              </form>
            </div>

            <div className="buttons center">
              {continents.map((continent, index) => {
                const { code, name } = continent;
                return (
                    <button
                        key={index}
                        onClick={handleClick}
                        className={activeBtn === code ? "active btn bn" : "btn bn"}
                        data-gh={code}
                    >
                      {name}
                    </button>
                );
              })}
            </div>
          </div>
        </header>

        {loading ? (
            <div style={{ textAlign: "center" }}>
              <h3>carregando ...</h3>
              <AiOutlineLoading />
            </div>
        ) : (
            <CountriesCards data={data} />
        )}
      </>
  );
};

export default Countries;