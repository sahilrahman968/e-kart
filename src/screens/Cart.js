import React,{useEffect,useState} from "react"
import {useSelector} from "react-redux"
import CartProductCard from "../components/CartProductCard"
import { selectCartAction } from '../redux/cartProducts/cartProductActions';
import {Checkbox, Button} from 'antd';

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
          justifyContent: "center",
          alignItems : "center",
          flexDirection : "column"
        }}   
    >
        {
          cart.map((product)=>{
            return (
            <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
              <Checkbox>
                <CartProductCard url={product?.image} title={product.title} description={product?.description} price={product?.price} product={product}/>
                <Button onClick={()=>{selectCartAction(product)}}>Remove from cart</Button> 
              </Checkbox>
            </div>)
          })
        }
        </div>:<h1>CART EMPTY</h1>
      }
    </div>
  )
}

export default Cart