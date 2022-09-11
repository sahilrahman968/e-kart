import { Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartAction } from '../redux/cartProducts/cartProductActions';
import { selectLikedAction } from '../redux/ikedProducts/likedProductActions';

const ProductModal = ({setShowModal,showmodal,product}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dummy, setDummy] = useState(false);

  const cartProducts = useSelector(state => state.cartProducts.cartProducts)
  const likedProducts = useSelector(state => state.likedProducts.likedProducts)

  console.log("product=",product)

  useEffect(()=>{showModal()},[showmodal])

  const showModal = () => {
    if(showmodal)
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setShowModal(false)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setShowModal(false)
  };

  const checkPresent = (a) => {
    let present = a.find( e => e.id === product.id)
    return present;
  }

  return (
    <>
      <Modal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div style={{display:"flex"}}>
            <div>
                <img style={{height:"400px",width:"300px",padding:"10px"}} src={product?.image} alt="product-image"/>
            </div>
            <div>
                <h2>{product?.title}</h2>
                <p>{product?.description}</p>
                <h2>price:${product?.price}</h2>
            </div>
        </div>
        <Button onClick={(e)=>{
          setDummy(!dummy)
          selectLikedAction(product)
          e.stopPropagation();
          }}>{checkPresent(likedProducts)?"Remove from wishlist":"Add to wishlist"}
        </Button>

        <Button onClick={(e)=>{
          setDummy(!dummy)
          selectCartAction(product)
          e.stopPropagation();
          }}>{checkPresent(cartProducts)?"Remove from cart":"Add to cart"}
        </Button>
      </Modal>
    </>
  );
};

export default ProductModal;