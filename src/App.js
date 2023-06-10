import MainPage from "./component/MainPage";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState(null);
  let URL =
    "https://api.unsplash.com/photos/random/?client_id=zJ9f9avxrS-Tt2UYC4hK1eh7vRmny7QUiLxMQN9l4S8&&orientation=landscape&&query=travel%20dark";
  const fetchUrl = async (url) => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      setImageUrl(data?.urls?.regular);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchUrl(URL);
    // eslint-disable-next-line
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <MainPage />
    </div>
  );
}

export default App;
