import { createContext, useContext, useState } from "react";

const homeContext = createContext();

const HomeContextProvider = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <homeContext.Provider value={{ toggleMenu, setToggleMenu }}>
      {children}
    </homeContext.Provider>
  );
};

export const useHomeContext = () => useContext(homeContext);
export default HomeContextProvider;
