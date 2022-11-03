import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

export default function Shop() {
  const [products,setProducts]= useState([]);
  useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[]);

  return (
    <>
      <div className="shop-container">
        <div className="produts-container">
          {
            products.map((product:object,index:number)=><Product key={index} {...product}></Product>)
          }
        </div>
        <div className="cart-container">
          <h4>Order Summary</h4>
        </div>
      </div>
    </>
  );
}
