import { Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react';

const ProductModal = ({setShowModal,showmodal,product}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
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
      </Modal>
    </>
  );
};

export default ProductModal;