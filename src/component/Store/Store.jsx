import React from 'react'
import "./Store.css";
import { Link } from "react-router-dom";
const  data = await require("../../lib/data.json");
function Store({HandleClick}) {
  return (
    <div className='store'>
    <h2>our Store</h2>
    <div className='items-container'>
        {data.product.map(item => {
            return (<div className='item-product_container' key={item.id}>
                <div className='productImg'><Link onClick={()=> HandleClick(item)} to={`/product`}><img alt={item.productName} src={item.img}/></Link></div>
                <div className='product-name'>{item.productName}</div>
                <div className='price'><span className='lastPrice'>{item.price}</span><span className="firstPrice">100DH</span></div>
            </div>);
        })}
    </div>
    </div>
  )
}

export default Store