import { Button, Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { selectCartAction } from '../redux/cartProducts/cartProductActions';
import _ from "lodash"

const { Meta } = Card;

const CartProductCard = ({selectedProducts,setSelectedProducts,url,title,description,price,product}) =>{ 

    const [count , setCount] = useState(0);
    const [index, setindex] = useState("")
    useEffect(()=>{
        let index = selectedProducts.findIndex(e=>e.id === product.id);
        setCount(selectedProducts[index]?.qty)
        setindex(index);
    },[selectedProducts])

    const incrementHandler = () => {
        if(count<=10)
        setCount(count+1)
        let clone = _.cloneDeep(selectedProducts)
        clone[index].qty = count+1;
        setSelectedProducts([...clone])
    }

    const decrementHandler = () => {
        if(count>0)
        setCount(count-1)
        let clone = _.cloneDeep(selectedProducts)
        clone[index].qty = count-1;
        setSelectedProducts([...clone])
    }

    return(
    <Card
        hoverable
        style={{
        width: 1000,
        height:200,
        padding: "10px",
        margin: "10px"
        }}
    >
        <div style={{display:"flex"}}>
            <div>
                <img style={{height:"150px",width:"150px"}} alt="example" src={url}/>
            </div>
            <div style={{margin:"20px"}}>
                <h3><b>{title}</b></h3>
                <h4><i>{`${description.substring(0,100)}...`}</i></h4>
                <h3><b>${price}</b></h3>
            </div>
            <div style={{marginTop:"30px"}}>
                {index>=0&&<><Button onClick={()=>{decrementHandler()}}>-</Button>{count??1}<Button onClick={()=>{incrementHandler()}}>+</Button></>}
            </div>
        </div>
    </Card>
    );
}
export default CartProductCard;