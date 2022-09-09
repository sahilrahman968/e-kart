import React from 'react'
import SearchFilter from './filter/SearchFilter'

function Navbar() {
  return (
    <div style={{display:"flex",justifyContent:"space-around", padding:"20px", backgroundColor:"#B0C4DE",width:"100%"}}>
          <SearchFilter/>
    </div>
  )
}

export default Navbar