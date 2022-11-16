import { useState } from "react";
import { Destination } from "./Components/Destination/Destination";
import { Destination2 } from "./Components/Destination/Destination2";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import HeaderAPI from "./Components/Header/HeaderAPI";
import { Trip } from "./Components/Trip/Trip";

function App() {
  const [ImageList] = useState(HeaderAPI);
  return (
    <>
      <Header ImageLists={ImageList} />
      <Destination />
      <Destination2 />
      <Trip />
      <Footer />
    </>
  );
}

export default App;
