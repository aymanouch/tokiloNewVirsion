import React, { useEffect, useState } from 'react'
import Rating from 'react-rating'
import { CiStar } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import "./product.css";

function Product({itemSelected}) {
  useEffect(()=> {
    scrollFunction("product_container");

  }, []);
  const [errorData, setError] = useState(false);
  return (
    <div className="product_container" id='product_container'>
        <div className='product-container_img'>
          <img alt={itemSelected.productName} src={itemSelected.img} />
        </div>
        <div className='product-container_box' id='product-container_box'>
            <h2>{itemSelected.productName}</h2>
            <h3>{itemSelected.price}</h3>
            <div className="reviews"><Rating initialRating={4} emptySymbol={<CiStar size='2rem' color="#FF8A80"/>} fullSymbol={<IoIosStar size='2rem' color="#FF8A80"/>}/> <span>{itemSelected.reviews} reviews</span></div>
            <div className="description">{itemSelected.desc}</div>
            <div className='formulaire'>
              {errorData ? <div className='errorAlert'>المرجو ادخال اسم مكون من اربع حروف او اكثر ورفم هاتف صحيح</div>:""}
                <form>
                    <label>Quantity (between 1 and 5):</label>
                    <input type="number" id="quantity" placeholder='1' name="quantity" min="1" max="5" />
                    <input type="text"id="fullname" placeholder='fullname' name="fullname"/>
                    <input type="text" id="phone" placeholder='phone'name="phone"/>
                    <input type="button" value="buy" onClick={()=> {getInfo()}}/>
                </form>
            </div>
        </div>
    </div>
  )
function getInfo(){
  let fullname = document.getElementById("fullname").value;
  let phone = document.getElementById("phone").value;
  let quantity = document.getElementById("quantity").value;
   buy( fullname, phone, quantity);
}
function scrollFunction(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: 'smooth'});
}

  async function buy(name, phone, quantity){
    console.log(name)
   if(typeof(name)!=="undefined" && name.length>3 && phone.length>9) {
    await fetch(process.env.REACT_APP_API_SHEET, {
      method : "POST",
      body: JSON.stringify({"data": {"phone":phone,"quantity":`${quantity.length > 0 ? quantity : "1"}`,"fullname":name}}),
    }).then(res =>{
      if (res.status === 201){
        // SUCCESS
        console.log("redirect the client");
        window.location.href = "/";
      }
      else{
      console.error("something wrong in you buy function")
      }	// ERROR
    })
   } else {
    setError(true);
   }
  }
}


export default Product