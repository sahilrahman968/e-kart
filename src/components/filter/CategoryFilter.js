import { Checkbox } from 'antd';
import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
import _ from "lodash"

function CategoryFilter({getSelectedCategoryFilter}) {
    
    const categoriesFromRedux = useSelector(state=>state.filter.category)
    const [categories , setCategories] = useState([]);
    
  
    useEffect(()=>{
        setCategories([...categoriesFromRedux])
    },[categoriesFromRedux])

    const onChange = (e,item) => {
        let categoriesClone = _.cloneDeep(categories)
        const index = categoriesClone.findIndex(e=>e?.category_name === item.category_name)
        if(index > -1){
            categoriesClone[index].is_selected = e.target.checked
        }
        setCategories(categoriesClone);
    };

    useEffect(()=>{getSelectedCategoryFilter(categories)},[JSON.stringify(categories)])

  return (
    <div>
        {
            categories?.length ?
            categories?.map((item,idx)=>{
                return <div key={idx}><Checkbox checked={item?.is_selected} key = {item?.category_name} onChange={(e)=>onChange(e,item)}><h4>{item?.category_name}</h4></Checkbox></div>
            }) :""
        }
    </div>
  )
}

export default CategoryFilter