import React from 'react'
import { Link } from 'react-router-dom'
import SearchFilter from './filter/SearchFilter'
import {strings} from "../constants/stringConstants"

function Navbar({language}) {
  return (
    <div style={{display:"flex",justifyContent:"space-around", padding:"20px", backgroundColor:"#B0C4DE",width:"100%"}}>
          <Link to="/"><h2>{language==="english"?strings.HOME_PAGE_EN:strings.HOME_PAGE_HI}</h2></Link>
          <SearchFilter/>
          <Link to="/wishlist"><h2>{language==="english"?strings.WISHLIST_EN:strings.WISHLIST_HI}</h2></Link>
          <Link to="/cart"><h2>{language==="english"?strings.CART_EN:strings.CART_HI}</h2></Link>
    </div>
  )
}

export default Navbar