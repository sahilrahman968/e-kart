import { Button, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { getSingleProduct } from '../apiCall'
import { selectCartAction } from '../redux/cartProducts/cartProductActions';
import { selectLikedAction } from '../redux/ikedProducts/likedProductActions';
import {strings} from "../constants/stringConstants"

function ProductPage({language}) {
const location = useLocation();
const productId = location?.state?.productId;
const [product , setProduct] = useState(0)   
const [dummy, setDummy] = useState(false);

const cartProducts = useSelector(state => state.cartProducts.cartProducts)
const likedProducts = useSelector(state => state.likedProducts.likedProducts)

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

const checkPresent = (a) => {
  let present = a.find( e => e.id === product.id)
  return present;
}

console.log("product",language)

  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", height:"100vh"}}>
        {
            !product ? <Spin/> :
            <> 
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <div>
                <img style={{heighyt:"600px",width:"400px"}} src={product?.image} alt="product-image"/>
              </div>
              <div>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <h2>${product.price}</h2>
              </div>
            </div>
            <Button onClick={(e)=>{
              setDummy(!dummy)
              selectLikedAction(product)
              e.stopPropagation();
              }}>{checkPresent(likedProducts)?`${language==="english"?strings.REMOVE_FROM_WISHLIST_EN:strings.REMOVE_FROM_WISHLIST_HI}`:`${language==="english"?strings.ADD_TO_WISHLIST_EN:strings.ADD_TO_WISHLIST_HI}`}
            </Button>

            <Button onClick={(e)=>{
              setDummy(!dummy)
              selectCartAction(product)
              e.stopPropagation();
              }}>{checkPresent(likedProducts)?`${language==="english"?strings.REMOVE_FROM_CART_EN:strings.REMOVE_FROM_CART_HI}`:`${language==="english"?strings.ADD_TO_CART_EN:strings.ADD_TO_CART_HI}`}
            </Button>
            </>
        }
            
    </div>
  )
}

export default ProductPage