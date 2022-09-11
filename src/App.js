import store from './redux/store'; 
import Home from "./screens/Home";
import "antd/dist/antd.css" 
import Cart from "./screens/Cart";
import Wishlist from "./screens/Wishlist";
import { useDispatch, useSelector } from 'react-redux';
import FilterMaster from './components/filter/FilterMaster';
import { getAllCategories } from './apiCall';
import { updateCategoryFilter } from './redux/filter/filterActions';
import { useEffect } from 'react';
import SearchFilter from './components/filter/SearchFilter';
import RecentlyViewed from './components/RecentlyViewed';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch()
  const recentlyViewed = useSelector(state => state.recentlyViewed.products);


  useEffect(()=>{
    let categories = [];
    const helperFunction = async () => {
      try{
        const res = await getAllCategories();
        console.log(res.data);
        res?.data.forEach((item)=>{
            categories.push({category_name: item, is_selected : false})
        })
        dispatch(updateCategoryFilter(categories));
      }
      catch(err){
        console.log(err)
      }
    }
    helperFunction();
  },[])

  return (
    <BrowserRouter>
      <div style={{backgroundColor:"#F5F5F5",width:"100%",height:"100%"}} className="App">
        <div style={{display:"flex",justifyContent:"space-around"}}>
          <Navbar/>
        </div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/> 
            <Route path="/wishlist" element={<Wishlist/>}/> 
          </Routes>
        </div>
     </BrowserRouter>  
  );
}

export default App;
