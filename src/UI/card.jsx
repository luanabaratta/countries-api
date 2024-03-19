import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CountriesCards = ({ data }) => {
  return (
      <>
        <div className="countries projcard-container">
          {data.map((item, index) => {
            const {
              name,
              capital,
              currencies,
              flags,
              languages,
              population,
              area,
              timezones,
            } = item;

            return (
                <div className="projcard projcard-red" key={index}>
                  <Link to={`/paises/${name.common}`}>
                    <div className="projcard-innerbox">
                      <img
                          className="projcard-img"
                          src={flags.png}
                          alt={`${name.common} flag`}
                      />
                      <div className="projcard-textbox">
                        <div className="projcard-title">{name.common}</div>
                        <div className="projcard-subtitle">
                          Capital: {capital ? capital[0] : ""}
                        </div>
                        <div className="projcard-bar"></div>
                        <div className="projcard-description">
                      <span>
                        {languages ? Object.keys(languages).length : ""}{" "}
                      </span>
                          idioma(s),
                          <span>{population}</span> hab.,
                          <span>{area}</span>km<sup>2</sup>,
                          <span>{currencies ? currencies[0]?.name : ""} </span>{" "}
                          <span>{timezones}</span> fuso-horário(s)
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
            );
          })}
        </div>
      </>
  );
};

export default CountriesCards;