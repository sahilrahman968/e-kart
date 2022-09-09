import { Slider } from 'antd';
import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux"

const PriceFilter = ({getSelectedPriceFilter}) => {

  const priceRangeFromRedux = useSelector(state=>state.filter.price)
  const [priceRange , setPriceRange] = useState([0,0]);

  useEffect(()=>{
    setPriceRange(priceRangeFromRedux)
  },[priceRangeFromRedux])
  
  const onChange = (priceRange) => {
    console.log("e->",priceRange)
    setPriceRange(priceRange);
  };

  useEffect(()=>{getSelectedPriceFilter(priceRange)},[JSON.stringify(priceRange)])

  return (
    <div style={{width:"175px"}}>
      <Slider range defaultValue={priceRangeFromRedux} value={priceRange} onChange={(e)=>{onChange(e)}} />
    </div>
  );
};

export default PriceFilter;
