import { useEffect, useState } from "react";
import { useGlobalContext } from "./contexts/GlobalContextProvider";

const App = () => {
  // test fetch
  const [message, setMessage] = useState("");
  const { backendURL } = useGlobalContext();

  const fetchMessage = async () => {
    try {
      const res = await fetch(`${backendURL}/api/test`);
      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      setMessage(error);
    }
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <>
      <h1>Hello!</h1>
      <p>Server says:</p>
      <p>{message}</p>
    </>
  );
};

export default App;
