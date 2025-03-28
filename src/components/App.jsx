import Product from "../components/Product.jsx";
import Button from "../components/Button.jsx";
import BookList from "../components/BookList.jsx";
import State from "../components/State.jsx";
import Promotion from "./Promotion.jsx";
import { useState } from "react";


 
const App = () => {
  const[state, setState] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("state")) ||
      {
      morning: 0,
      noon: 0,
      evening: 0,
    }
  );
});



}

  export default App;

 