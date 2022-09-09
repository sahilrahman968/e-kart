import React, { useEffect, useState } from "react"
import {getAllProducts} from "../apiCall"
import {useDispatch,useSelector} from "react-redux"
import {getAllProductsRequest,getAllProductsSuccess,getAllProductsFailure} from "../redux/allProducts/allProductActions"
import ProductCard from "../components/ProductCard"
import {Spin} from "antd"
import _ from "lodash"
import ProductModal from "../components/ProductModal"
import { updateRecentlyViewed } from "../redux/recentlyViewed/recentlyViewedAction"

function Home() {
  const dispatch = useDispatch();
  const [products,setProducts] = useState([]);
  const [showModal,setShowModal] = useState(false)
  const [selectedProduct,setSelectedProduct] = useState({})
  
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
    <div>
      {
        productsState.loading ? <><Spin/></> :
        products.length ? 
        <div style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap"
        }}
        
    >
        {
          products.map((product)=>{
            return <>
              <div onClick={()=>{
                setShowModal(true);
                setSelectedProduct(product) 
                addToRecentlyViewed(product);
                }}>
                <ProductCard url={product?.image} title={product.title} description={product?.description} price={product?.price} product={product}/>
              </div>
            </>
          })
        }
        </div>:"SOMETHING WENT WRONG"
      }
      {
        showModal&& <ProductModal product={selectedProduct} setShowModal={setShowModal} showmodal={showModal}/>
      } 
    </div>
  )
}

export default Home