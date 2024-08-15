import { createContext, useContext, useState } from "react";

const BACKEND_URL = "https://mern-cc3.vercel.app";
// const BACKEND_URL = "http://localhost:5000";

const globalContext = createContext({
  backendURL: "",
});

const GlobalContextProvider = ({ children }) => {
  const [backendURL, setBackendURL] = useState(BACKEND_URL);

  return (
    <globalContext.Provider value={{ backendURL }}>
      {children}
    </globalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(globalContext);
export default GlobalContextProvider;
