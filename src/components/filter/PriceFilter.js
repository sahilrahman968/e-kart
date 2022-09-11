import { Input, Slider } from 'antd';
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
      <Slider max={1000} range defaultValue={priceRangeFromRedux} value={priceRange} onChange={(e)=>{onChange(e)}} />
      min:<Input value={priceRange[0]} style={{width:"100px"}} type="number" 
      onChange={(e)=>{
        if(e.target.value>=0)
        setPriceRange([e.target.value,priceRange[1]]) 
      }}/> <br/>
      max:<Input value={priceRange[1]} style={{width:"100px"}} type="number" 
      onChange={(e)=>{
        if(e.target.value<=1000)
        setPriceRange([priceRange[0],e.target.value]) 
      }}/>
    </div>
  );
};

export default PriceFilter;
