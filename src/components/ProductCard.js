import { Button, Card } from 'antd';
import React from 'react';
import { selectCartAction } from '../redux/cartProducts/cartProductActions';
const { Meta } = Card;

const UpcomingCard = ({url,title,description,price,product}) => (
  <Card
    hoverable
    style={{
      width: 300,
      height:550,
      padding: "20px",
      margin: "20px"
    }}
    cover={<img style={{height:"300px"}} alt="example" src={url}/>}
  >
    <Meta title={title} description={`${description.substring(0,100)}...`} price={price} />
    <h2>${price}</h2>
    <div style={{display:"flex",justifyContent:"flex-end"}}>
      <Button>Add to wishlist</Button>
      <Button onClick={(e)=>{
        selectCartAction(product)
        e.stopPropagation();
      }}>Add to cart</Button>
    </div>
  </Card>
);

export default UpcomingCard;