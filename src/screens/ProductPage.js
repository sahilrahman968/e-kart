import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { getSingleProduct } from '../apiCall'

function ProductPage(state) {
const location = useLocation();
const productId = location?.state?.productId;
const [product , setProduct] = useState(0)   
console.log("productId=",productId)
useEffect(()=>{
  if(productId)
  getProduct()
},[productId])
    
const getProduct = async () => {
    try{
    const res = await getSingleProduct(productId);
    setProduct(res.data)
    }
    catch(err){
    }
}

console.log("product=",product)

  return (
    <div>
        {
            !product ? <Spin/> : "PRODUCT PAGE"
        }
    </div>
  )
}

export default ProductPage