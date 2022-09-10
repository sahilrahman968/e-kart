import React from 'react'
import { Link } from 'react-router-dom'
import SearchFilter from './filter/SearchFilter'

function Navbar() {
  return (
    <div style={{display:"flex",justifyContent:"space-around", padding:"20px", backgroundColor:"#B0C4DE",width:"100%"}}>
          <Link to="/"><h2>Home</h2></Link>
          <SearchFilter/>
          <Link to="/cart"><h2>Cart</h2></Link>
          <Link to="/wishlist"><h2>Wishlist</h2></Link>
    </div>
  )
}

export default Navbar