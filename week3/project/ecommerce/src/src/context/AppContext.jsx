import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [favList, setFavList] = useState([]);
  return (
    <AppContext.Provider value={{ favList, setFavList }}>
      {children}
    </AppContext.Provider>
  );
};
