import { Button, Card } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartAction } from '../redux/cartProducts/cartProductActions';
import { selectLikedAction } from '../redux/ikedProducts/likedProductActions';
import { strings } from '../constants/stringConstants';

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
      }}>{checkPresent(likedProducts)?`${language==="english"?strings.REMOVE_FROM_WISHLIST_EN:strings.REMOVE_FROM_WISHLIST_HI}`:`${language==="english"?strings.ADD_TO_WISHLIST_EN:strings.ADD_TO_WISHLIST_HI}`}</Button>

      <Button onClick={(e)=>{
        setDummy(!dummy)
        selectCartAction(product)
        e.stopPropagation();
      }}>{checkPresent(cartProducts)?`${language==="english"?strings.REMOVE_FROM_CART_EN:strings.REMOVE_FROM_CART_HI}`:`${language==="english"?strings.ADD_TO_CART_EN:strings.ADD_TO_CART_HI}`}</Button>
    </div>
  </Card>
);
}

export default UpcomingCard;