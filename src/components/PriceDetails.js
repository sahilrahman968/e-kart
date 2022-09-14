import React, { useEffect, useState } from 'react'
import {Checkbox, Button} from 'antd';
import { strings } from '../constants/stringConstants';

function PriceDetails({selectedProducts,language}) {
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
        <h1>{language==="english"?strings.PAYMENT_DETAILS_EN:strings.PAYMENT_DETAILS_HI}</h1>
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
        <h2>{language==="english"?strings.TOTAL_EN:strings.TOTAL_HI} : ${total}</h2>
        <Button>{language==="english"?strings.PROCEED_TO_BUY_EN:strings.PROCEED_TO_BUY_HI}</Button>
    </div>
  )
}

export default PriceDetails