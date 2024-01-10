import './App.css';
import gsap from 'gsap';
import {useEffect, useState} from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './component/Header/Header';
import Store from './component/Store/Store';
import Product from './component/Product/Product';
import Footer from './component/Footre/Footer';
import Contact from './component/Contact/Contact';

function App() {
const [product, setProduct] = useState({});
useEffect(()=>{
  const products =  require("../src/lib/data.json");
  setProduct(products.product[0])
},[]);
  function HandleClick(item) {
    setProduct(item);
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Store HandleClick={HandleClick}/>
    },
    {
      path:"/product",
      element:<Product itemSelected={product}/>
    }
  ]);
  return (
    <div className="App">
      <Header gsap={gsap} />
      <RouterProvider router={router} />
      <Contact />
      <Footer />
    </div>
  );

}

export default App;
