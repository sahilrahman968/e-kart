import React,{useEffect,useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import CartProductCard from "../components/CartProductCard"
import { selectCartAction } from '../redux/cartProducts/cartProductActions';
import {Checkbox, Button} from 'antd';
import PriceDetails from "../components/PriceDetails"
import _ from "lodash"
import empty_cart from '../assets/empty-cart.png'
import { setApplied } from "../redux/filter/filterActions";
 


function Cart({language}) {
    
 const [cart,setCart] = useState([]);
 const [selectedProducts,setSelectedProducts] = useState([]);   
 const cartProducts = useSelector(state => state.cartProducts.cartProducts)

 const dispatch = useDispatch()

  useEffect(()=>{
    setCart(cartProducts)
    dispatch(setApplied(false))
  },[cartProducts])

  const onChange = (e,product) => {
    e.stopPropagation();
    let clone = _.cloneDeep(selectedProducts);
    let index = selectedProducts.findIndex( e => e.id === product.id)

    if(index === -1 && e.target.checked){
      clone.push(product);
      clone[clone.length-1].qty = 1;
      setSelectedProducts(clone);
    }
    else{
      clone.splice(index,1);
      setSelectedProducts(clone);
    }
  };

  console.log("cart")


  return (
    <>
      {cart.length ? <div style={{backgroundColor:"#F5F5DC",width:"100%",height:"15%",textAlign:"center"}}>{language==="hindi"?`${cartProducts.length} में से ${selectedProducts.length} उत्पाद चुने गए`:`${selectedProducts.length}/${cartProducts.length} products selected`}</div> : ""}
      <div  style={{
        display: "flex",
        justifyContent: "space-around",
      }}>
        {
          cart.length ? 
          <div>
          {
            cart.map((product)=>{
              return (
              <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                <Checkbox onChange={(e)=>onChange(e,product)}>
                  <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                  <CartProductCard url={product?.image} title={product.title} description={product?.description} price={product?.price} product={product} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}/>
                  </div>
                </Checkbox>
              </div>)
            })
          }
          </div>:<img style={{height:"100vh",width:"100vw"}} src = {empty_cart}/>
        }
        <div>
          {selectedProducts.length ? <PriceDetails language={language} selectedProducts={selectedProducts} /> : ""}
        </div>
      </div>
    </>
  )
}

export default Cart