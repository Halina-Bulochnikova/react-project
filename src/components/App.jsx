import Product from "./Product.jsx";
import Button from "../components/Button.jsx";
import BookList from "../components/BookList.jsx";
import State from "../components/State.jsx";
import Promotion from "./Promotion.jsx";
import s. from "../components/styles.css";


 
export default function App() {
   return (
     <div className={CSS.container}>
       <h1>Best selling</h1> 
       <State>
       </State>

       <Button></Button>

       <Promotion></Promotion>  

       <Product />

       <Product />  

       <BookList></BookList>

       <State></State>
     </div>
   )
  };
 

 