import { useState } from "react";
import { Header } from "./Components/Header/Header";
import HeaderAPI from "./Components/Header/HeaderAPI";


function App() {
  const [ImageList] = useState(HeaderAPI)
  return (
    <>
    <Header ImageList = {ImageList}/>
    </>
  );
}

export default App;
