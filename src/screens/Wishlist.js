import React,{useEffect,useState} from "react"
import {useSelector} from "react-redux"
import CartProductCard from "../components/CartProductCard"
import {Button} from 'antd';
import _ from "lodash"
import empty_cart from '../assets/empty-cart.png'
import { selectLikedAction } from "../redux/ikedProducts/likedProductActions";
import { selectCartAction } from "../redux/cartProducts/cartProductActions";
 


function Wishlist() {
    
 const [liked,setLiked] = useState([]);
 const [selectedProducts,setSelectedProducts] = useState([]);   
 const [dummy , setDummy] = useState(false);
 const likedProducts = useSelector(state => state.likedProducts.likedProducts)

  useEffect(()=>{
    setLiked(likedProducts)
    console.log("inside useEffect")
  },[likedProducts,dummy])

  console.log("selected Products =",selectedProducts);

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
                  <Button onClick={()=>{selectLikedAction(product); setDummy(!dummy)}}>Remove from wishlist</Button>
                  <Button onClick={(e)=>{
                    selectCartAction(product)
                    selectLikedAction(product);
                    setDummy(!dummy);
                    e.stopPropagation();
                    }}
                   >
                        Move to cart
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