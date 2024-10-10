import React, {useState } from 'react'
import "./Store.css";
import { Link } from "react-router-dom";
const  data = await require("../../lib/data.json");
const filterIems=["all", "pack", "visage","yeux","lèvres", "mains", "palettes"];
function Store({HandleClick}) {
   const [itemSelect, setItemSelect] =useState("all");
  return (
    <div className='store'>
    <h2>our Store</h2>
    <ul id="listFillter">
      {filterIems.map(item=>(<li><button className="btn_chooseItem" id={item===itemSelect ? 'selectedItems' : ""} key={item} onClick={()=>setItemSelect(item)}>{item}</button></li>))}
    </ul>
    <div className='items-container'>
        {itemSelect==="all" ? (data.product.map(item => {
            return (<div className='item-product_container' key={item.id}>
                <div className='productImg'><Link onClick={()=> HandleClick(item)} to={`/product`}><img alt={item.productName} src={item.img}/></Link></div>
                <div className='product-name'>{item.productName}</div>
                <div className='price'><span className='lastPrice'>{item.price}</span><span className="firstPrice">100DH</span></div>
            </div>);
        })) : (data.product.map(item => {if(item.type===itemSelect){
          return (<div className='item-product_container' key={item.id}>
                <div className='productImg'><Link onClick={()=> HandleClick(item)} to={`/product`}><img alt={item.productName} src={item.img}/></Link></div>
                <div className='product-name'>{item.productName}</div>
                <div className='price'><span className='lastPrice'>{item.price}</span><span className="firstPrice">100DH</span></div>
            </div>)
        }}))}
    </div>
    </div>
  )
}

export default Store