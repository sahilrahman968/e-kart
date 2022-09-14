import store from './redux/store'; 
import Home from "./screens/Home";
import "antd/dist/antd.css" 
import Cart from "./screens/Cart";
import Wishlist from "./screens/Wishlist";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from './apiCall';
import { updateCategoryFilter } from './redux/filter/filterActions';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from './screens/ProductPage';
import { Switch } from 'antd';

function App() {
  const dispatch = useDispatch()
  const recentlyViewed = useSelector(state => state.recentlyViewed.products);
  const [language , setLanguage] = useState("english")


  useEffect(()=>{
    let categories = [];
    const helperFunction = async () => {
      try{
        const res = await getAllCategories();
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

  const onChange = (checked) => {
    if(checked)
    setLanguage("hindi")
    else
    setLanguage("english")
    console.log(checked)
  };

  console.log("home")

  return (
    <BrowserRouter>
      <div style={{backgroundColor:"#F5F5F5",width:"100%",height:"100%"}} className="App">
        <div style={{display:"flex",justifyContent:"space-around"}}>
          <Navbar language={language}/>
        </div>
          <div style={{display:"flex",justifyContent:"flex-end",margin:"10px"}}>
            <Switch defaultChecked onChange={onChange}/><h3>Hindi</h3>
          </div>
          <Routes>
            <Route path="/" element={<Home language={language}/>}/>
            <Route path="/cart" element={<Cart language={language}/>}/> 
            <Route path="/wishlist" element={<Wishlist language={language}/>}/>
            <Route path="/product" element={<ProductPage language={language}/>}/> 
          </Routes>
        </div>
     </BrowserRouter>  
  );
}

export default App;
