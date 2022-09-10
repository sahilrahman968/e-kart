import { Button, Card } from 'antd';
import React from 'react';
import { selectCartAction } from '../redux/cartProducts/cartProductActions';
const { Meta } = Card;

const CartProductCard = ({url,title,description,price,product}) => 
(
  <Card
    hoverable
    style={{
      width: 900,
      height:400,
      padding: "20px",
      margin: "20px"
    }}
  >
    <div style={{display:"flex"}}>
        <div>
            <img style={{height:"300px",width:"300px"}} alt="example" src={url}/>
        </div>
        <div style={{margin:"40px"}}>
            <h2>{title}</h2>
            <h3>{`${description.substring(0,300)}...`}</h3>
           {/*  <Button onClick={()=>{
              selectCartAction(product);
            }}>Remove from cart</Button> */}
        </div>
    </div>
  </Card>
);

export default CartProductCard;