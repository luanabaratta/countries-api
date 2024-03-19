// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./Countries.css";
import { AiFillCaretRight, AiOutlineShareAlt } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

const CountryDetails = () => {
  const { countryname } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
            `https://restcountries.com/v3.1/name/${countryname}`
        );
        const [country] = response.data;
        setCountryData(country);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchData();
  }, [countryname]);

  return (
      <>
        <div className="country-details">
          {countryData ? (
              <>
                <header>
                  <div className="path-links center">
                    <Link to="/">
                      <h4>Home</h4>
                    </Link>
                    <AiFillCaretRight />
                    <h4>{countryData.name.common}</h4>
                  </div>
                  <div className="name-details center">
                    <div>
                      <h1>{countryData.name.common}</h1>
                      <h3>{countryData.capital}</h3>
                    </div>
                    <div>
                      <AiOutlineShareAlt />
                      <FaHeart />
                    </div>
                  </div>
                </header>
                <section>
                  <main>
                    <img src={countryData.flags.png} alt="" />
                    <div className="country-specifications">
                      <h3>Info</h3>
                      <div className="specs center">
                        <div>
                          <h3>Official Name: </h3>
                          <h4>{countryData.name.official}</h4>
                        </div>
                        <div>
                          <h3>Continent:</h3>
                          <h4>{countryData.region}</h4>
                        </div>
                        <div>
                          <h3>Capital:</h3>
                          <h4>{countryData.capital}</h4>
                        </div>
                        <div>
                          <h3>Timezones:</h3>
                          <h4>{countryData.timezones}</h4>
                        </div>
                        <div>
                          <h3>Population:</h3>
                          <h4>{countryData.population}</h4>
                        </div>
                      </div>
                    </div>
                  </main>
                  <aside>
                    <div className="country-location">
                      <h3>Location</h3>
                      <img src={mapimg} alt="" />
                      <Link to={countryData.maps.googleMaps}>
                        <p>{countryData.maps.googleMaps}</p>
                      </Link>
                    </div>
                    <div className="languages">
                      <h3>Languages</h3>
                      <ul>
                        {Object.values(countryData.languages).map(
                            (language, index) => (
                                <li key={index}>{language}</li>
                            )
                        )}
                      </ul>
                    </div>
                  </aside>
                </section>
              </>
          ) : (
              "country details loading"
          )}
        </div>
      </>
  );
};

export default CountryDetails;