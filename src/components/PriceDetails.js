import React, { useEffect, useState } from 'react'
import {Checkbox, Button} from 'antd';

function PriceDetails({selectedProducts}) {
 const [total , setTotal] = useState(0);
  useEffect(()=>{
    let total = 0;
    selectedProducts.forEach(e=>{
        total+=(e.price*e.qty)
    })
    setTotal(total);
  },[selectedProducts])  
  return (
    <div>
        <h1>PRICE DETAILS</h1>
        <hr/>
        <div>
            {
               selectedProducts.map(product => {
                return <div>
                 <b>{product.title} - </b>
                 <b>( {product.qty} * ${product.price} )</b>
                </div>
               }) 
            }
        </div>
        <hr/>
        <h2>Grand Total : ${total}</h2>
        <Button>Proceed to buy</Button>
    </div>
  )
}

export default PriceDetails