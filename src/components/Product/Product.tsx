import React from 'react';
import './Product.css';

interface ProductProps {
    name: string;
    price: number;
    img:string;
    ratings: number;
    seller: string;
}

export default function Product(props:object) {
   const {name ,img, ratings , price , seller} = props as ProductProps;

  return (
    <div className="product">
       <img src={img} alt="" />
    </div>
  )
}
