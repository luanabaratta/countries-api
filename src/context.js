import React, { useState, useContext } from "react";
const AppContext = React.createContext();

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [selectedContinent, setSelectedContinent] = useState("");

  return (
      <AppContext.Provider
          value={{
            selectedContinent,
            setSelectedContinent,
          }}
      >
        {children}
      </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };