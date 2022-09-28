import { Button, Card } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartAction } from '../redux/cartProducts/cartProductActions';
import { selectLikedAction } from '../redux/ikedProducts/likedProductActions';
import { strings } from '../constants/stringConstants';
import like from "../assets/like.png";
import unlike from "../assets/unlike.png";
import kart from "../assets/kart.png";
import unkart from "../assets/unkart.png";



const { Meta } = Card;

const UpcomingCard = ({url,title,description,price,product,language}) => {

  const [dummy, setDummy] = useState(false);

  const cartProducts = useSelector(state => state.cartProducts.cartProducts)
  const likedProducts = useSelector(state => state.likedProducts.likedProducts)


  const checkPresent = (a) => {
    let present = a.find( e => e.id === product.id)
    return present;
  }

  return(
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
      
      <Button onClick={(e)=>{
        setDummy(!dummy)
        selectLikedAction(product)
        e.stopPropagation();
      }}>{checkPresent(likedProducts)?<img  style={{height:"20px",width:"20px"}} src={like}/>:<img style={{height:"20px",width:"20px"}} src={unlike}/>}</Button>

      <Button onClick={(e)=>{
        setDummy(!dummy)
        selectCartAction(product)
        e.stopPropagation();
      }}>{checkPresent(cartProducts)?<img  style={{height:"20px",width:"20px"}} src={kart}/>:<img style={{height:"20px",width:"20px"}} src={unkart}/>}</Button>
    </div>
  </Card>
);
}

export default UpcomingCard;