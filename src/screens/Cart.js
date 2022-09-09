import React,{useEffect,useState} from "react"
import {useSelector} from "react-redux"
import ProductCard from "../components/ProductCard"

function Cart() {
    
 const [cart,setCart] = useState([]);
    
 const cartProducts = useSelector(state => state.cartProducts.cartProducts)

  useEffect(()=>{
    setCart(cartProducts)
    console.log("inside useEffect")
  },[cartProducts])
  console.log("inside cart file -->>", cartProducts)
  return (
    <div>
      {
        cart.length ? 
        <div style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap"
        }}
        
    >
        {
          cart.map((product)=>{
            return <ProductCard url={product?.image} title={product.title} description={product?.description} price={product?.price} product={product}/>
          })
        }
        </div>:"NO PRODUCTS IN CART"
      }
    </div>
  )
}

export default Cart