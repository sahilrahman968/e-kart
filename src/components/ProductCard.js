import { Button, Card } from 'antd';
import React from 'react';
import { selectCartAction } from '../redux/cartProducts/cartProductActions';
const { Meta } = Card;

const UpcomingCard = ({url,title,description,price,product}) => (
  <Card
    hoverable
    style={{
      width: 240,
      padding: "20px",
      margin: "20px"
    }}
    cover={<img alt="example" src={url}/>}
  >
    <Meta title={title} description={description} price={price} />
    <h2>${price}</h2>
    <div style={{display:"flex",justifyContent:"flex-end"}}>
      <Button>like</Button>
      <Button onClick={()=>{selectCartAction(product)}}>cart</Button>
    </div>
  </Card>
);

export default UpcomingCard;