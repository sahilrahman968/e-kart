import React,{useEffect,useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import CartProductCard from "../components/CartProductCard"
import {Button} from 'antd';
import _ from "lodash"
import empty_cart from '../assets/empty-cart.png'
import { selectLikedAction } from "../redux/ikedProducts/likedProductActions";
import { selectCartAction } from "../redux/cartProducts/cartProductActions";
import { setApplied } from "../redux/filter/filterActions";
import { strings } from "../constants/stringConstants";


function Wishlist({language}) {
    
 const [liked,setLiked] = useState([]);
 const [selectedProducts,setSelectedProducts] = useState([]);   
 const [dummy , setDummy] = useState(false);
 const likedProducts = useSelector(state => state.likedProducts.likedProducts)

 const dispatch = useDispatch()


  useEffect(()=>{
    setLiked(likedProducts)
    dispatch(setApplied(false))
  },[likedProducts,dummy])

  console.log("wishlist")

  return (
    <>
      <div  style={{
        display: "flex",
        justifyContent: "space-around",
      }}>
        {
          liked.length ? 
          <div>
          {
            liked.map((product)=>{
              return (
              <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                  <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                  <CartProductCard url={product?.image} title={product.title} description={product?.description} price={product?.price} product={product} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}/>
                  <Button onClick={()=>{selectLikedAction(product); setDummy(!dummy)}}>{language==="english"?strings.REMOVE_FROM_WISHLIST_EN:strings.REMOVE_FROM_WISHLIST_HI}</Button>
                  <Button onClick={(e)=>{
                    selectCartAction(product)
                    selectLikedAction(product);
                    setDummy(!dummy);
                    e.stopPropagation();
                    }}
                   >
                    {language==="english"?strings.ADD_TO_CART_EN:strings.ADD_TO_CART_HI}
                  </Button>
                  </div>
              </div>)
            })
          }
          </div>:<img style={{height:"100vh",width:"100vw"}} src = {empty_cart}/>
        }
      </div>
    </>
  )
}

export default Wishlist