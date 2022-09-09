import { Collapse } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
const { Panel } = Collapse;

const RecentlyViewed = () => {
  const recentlyViewed = useSelector(state => state.recentlyViewed.products);
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Collapse onChange={onChange}>
      {
        recentlyViewed?.length ? 
        recentlyViewed?.map((product,idx)=>{
            return <Panel header={product.title} key={idx}>
                        <div style={{display:"flex",justifyContent:"space-around"}}>
                            <div><img style={{height:"70px",width:"70px"}} src={product?.image}/></div>
                            <div><h2>${product?.price}</h2></div>
                        </div>    
                    </Panel>
        }):""
      }
    </Collapse>
  );
};

export default RecentlyViewed;