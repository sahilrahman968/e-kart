import React, { useEffect, useState } from "react"
import {getAllProducts} from "../apiCall"
import {useDispatch,useSelector} from "react-redux"
import {getAllProductsRequest,getAllProductsSuccess,getAllProductsFailure} from "../redux/allProducts/allProductActions"
import ProductCard from "../components/ProductCard"
import {Spin} from "antd"
import { updateRecentlyViewed } from "../redux/recentlyViewed/recentlyViewedAction"
import FilterMaster from "../components/filter/FilterMaster"
import RecentlyViewed from "../components/RecentlyViewed"
import { useNavigate } from "react-router-dom";
import {strings} from "../constants/stringConstants"


function Home({language}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [products,setProducts] = useState([]);
  
  /* useEffect(()=>{
    const res = getAllProducts(); //returns a promise
    console.log(res, 'response')
  },[]) */
  
  
  /* useEffect(()=>{
    const helperFun = async () => {
      try {
        const res = await getAllProducts();
        console.log(res, 'response')
        } catch (err) {
          console.log(err)
        }
    }
    helperFun()
    
  },[]) */
  
  
  /* useEffect(()=>{
    getAllProducts().then(res => console.log(res, 'response'))
    .catch(err=>console.log(err))
  },[]) */
  const productsState = useSelector(state => state.allproducts)
  const filterState = useSelector(state => state.filter);
  const recentlyViewed = useSelector(state => state.recentlyViewed.products);
  

  useEffect(()=>{dispatch(getProducts())},[]);
  
  useEffect(()=>{
    if(filterState.isApplied)
    setProducts(productsState.filteredProducts)
    else
    setProducts(productsState.products)
  },[productsState,filterState.isApplied])
  
  const getProducts = () => {
    return async (dispatch) => {
      dispatch(getAllProductsRequest());
      try{
        const res = await getAllProducts();
        dispatch(getAllProductsSuccess(res.data))
      }
      catch(err){
        dispatch(getAllProductsFailure(err))
      }
    }
  }

  const addToRecentlyViewed = (product) => {
    let present = recentlyViewed.find(e => e.id === product.id)
    if(!present){
      dispatch(updateRecentlyViewed([product,...recentlyViewed]))
    }  
  }

  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
        <div style={{width:"20vw"}}>
        {products?.length?<><h2 style={{margin:"10px",marginTop:"20px"}}>{language==="english"?strings.APPLY_FILTER_EN:strings.APPLY_FILTER_HI}</h2>
          <FilterMaster language={language}/></>:<></>}
          {
            recentlyViewed?.length > 0 &&
            <div style={{margin:"20px"}}>
              <h2 style={{margin:"10px",marginTop:"20px"}}>{language==="english"?strings.RECENTLY_VIEWED_EN:strings.RECENTLY_VIEWED_HI}</h2>
              <RecentlyViewed/>
            </div>
          }
        </div>  
        <div>
          {
            productsState.loading ? <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><Spin/></div> :
            products?.length ? 
            <div 
              style={{
                      display: "flex",
                      justifyContent: "space-around",
                      flexWrap: "wrap"
                    }}
            >
            {
              products.map((product)=>{
                return <>
                  <div onClick={()=>{
                    addToRecentlyViewed(product);
                    navigate(`/product`, { state:{productId : product?.id} });
                    }}>
                    <ProductCard url={product?.image} title={product.title} description={product?.description} price={product?.price} product={product} language={language}/>
                  </div>
                </>
              })
            }
            </div>:"SOMETHING WENT WRONG"
          }
        </div>
    </div>
  )
}

export default Home