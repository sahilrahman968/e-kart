import store from './redux/store'; 
import Home from "./screens/Home";
import "antd/dist/antd.css" 
import Cart from "./screens/Cart";
import { useDispatch, useSelector } from 'react-redux';
import FilterMaster from './components/filter/FilterMaster';
import { getAllCategories } from './apiCall';
import { updateCategoryFilter } from './redux/filter/filterActions';
import { useEffect } from 'react';
import SearchFilter from './components/filter/SearchFilter';
import RecentlyViewed from './components/RecentlyViewed';
import Navbar from './components/Navbar';

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
      <div style={{backgroundColor:"#F5F5F5",width:"100%",height:"100%"}} className="App">
        <div style={{display:"flex",justifyContent:"space-around"}}>
          <Navbar/>
        </div>
       <div style={{display:"flex",justifyContent:"space-around"}}>
          <div style={{width:"20vw"}}>
            <h2 style={{margin:"10px",marginTop:"20px"}}>Apply Filter</h2>
            <FilterMaster/>
            {
              recentlyViewed?.length > 0 &&
              <>
                <h2 style={{margin:"10px",marginTop:"20px"}}>Recently Viewed</h2>
                <RecentlyViewed/>
              </>
            }
            
          </div>
          <div style={{width:"80vw"}}><Home/></div>
       </div> 
        
        {/* CART PRODUCTS
        <Cart/> */}
        {}
      </div>
  );
}

export default App;
