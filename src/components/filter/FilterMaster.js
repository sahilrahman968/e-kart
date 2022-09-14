import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getAllCategories} from "../../apiCall"
import { setApplied, updateCategoryFilter, updatePriceFilter } from '../../redux/filter/filterActions';
import CategoryFilter from './CategoryFilter'
import _ from "lodash"
import PriceFilter from './PriceFilter';
import {Button} from "antd"
import { getFilteredProducts } from '../../redux/allProducts/allProductActions';
import { strings } from '../../constants/stringConstants';

function FilterMaster({language}) {
  const productsFromRedux = useSelector(state => state.allproducts.products)
  const categoriesFromRedux = useSelector(state=>state.filter.category)
  const [selectedCategory,setSelectedCategory] = useState(categoriesFromRedux);
  const [selectedPrice,setSelectedPrice] = useState([0,0]);
  const [activeFilter, setActiveFilter] = useState("category")
  const dispatch = useDispatch()

  
  const getSelectedCategoryFilter = (categories) => {
    setSelectedCategory([...categories])
  }

  const getSelectedPriceFilter = (price) => {
    setSelectedPrice(price)
  }

  const applyHandler = () => {
    dispatch(updateCategoryFilter(selectedCategory))
    dispatch(updatePriceFilter(selectedPrice))
    if(selectedPrice[0] === 0 && selectedPrice[1] === 0 && selectedCategory.filter(e => e.is_selected === true).length === 0)
    dispatch(setApplied(false))
    else{
      dispatch(setApplied(true))
    }

    /* ==== */
    let product=[];
    let selectedCatgories = selectedCategory?.filter(e=>e.is_selected);
      if(selectedCatgories.length > 0 ){
        selectedCatgories.forEach((category)=>{
          const data = productsFromRedux.filter(product=>product?.category===category.category_name); /* get data about particular product api */
          let present = false;
          data.forEach(e => {
           present = product.find(elem=>elem?.id===e?.id)
           if(!present)
           {
            product.push(e)
           }
          })
        })
      }
      if(selectedPrice[0] >= 0 && selectedPrice[1] > 0){
        if(selectedCatgories.length > 0 ){
          product = product.filter(item=>item?.price>=selectedPrice[0]&&item?.price<=selectedPrice[1])
        }
        else{
          product = productsFromRedux.filter(item=>item?.price>=selectedPrice[0]&&item?.price<=selectedPrice[1])
        }
      }

      dispatch(getFilteredProducts(product));
  }

  const resetHandler = () => {
    let selectedCategoryClone = _.cloneDeep(selectedCategory)
    selectedCategory.forEach((item,index)=>{
      selectedCategoryClone[index].is_selected = false;
    })
    dispatch(updateCategoryFilter(selectedCategoryClone))
    dispatch(updatePriceFilter([0,0]))

    setSelectedCategory([...selectedCategoryClone]);
    setSelectedPrice([0,0]);
    dispatch(setApplied(false))
  }

  const activeFilterHandler = (type) => {
    setActiveFilter(type);
  }

  return (
    <div>
      <div style={{margin:"20px",height:"20vh" ,display:"flex", justifyContent:"flex-start"}}>
        <div style={{marginRight:"20px"}} className='left'>
          <h3 style={{backgroundColor : activeFilter === "category"?"#B0C4DE":""}} onClick={()=>{activeFilterHandler("category")}}>Category</h3>
          <h3 style={{backgroundColor : activeFilter === "price"?"#B0C4DE":""}} onClick={()=>{activeFilterHandler("price")}}>Price</h3>
        </div>
        <div className='right' style={{paddingLeft:"20px",backgroundColor:"#B0C4DE",width:"200px"}}>
          {
            activeFilter === "category" ? <CategoryFilter getSelectedCategoryFilter={getSelectedCategoryFilter}/> :
            activeFilter === "price" ? <PriceFilter getSelectedPriceFilter={getSelectedPriceFilter}/> : "" 
          }
        </div>
      </div>
      <Button style={{marginLeft:"20px"}} onClick={()=>{applyHandler()}}>{language==="english"?strings.APPLY_EN:strings.APPLY_HI}</Button>
      <Button style={{marginLeft:"20px"}} onClick={()=>{resetHandler()}}>{language==="english"?strings.RESET_EN:strings.RESET_HI}</Button>
    </div>
  )
}

export default FilterMaster