import axios from "axios"
import { getAllProductsFailure, getAllProductsRequest, getAllProductsSuccess } from "./redux/allProducts/allProductActions"

// export const getAllProducts = () => {
//    return(dispatch) => {
//     dispatch(getAllProductsRequest());
//     fetch('https://fakestoreapi.com/products1')
//             .then(res=>{
//                 res.json()
//             })
//             .then(json=>{
//                 console.log(json, 'sdasd')
//                 dispatch(getAllProductsSuccess())
//             })
//             .catch(err=>{
//                 console.log('err')
//                 dispatch(getAllProductsFailure(err))
//             })
//         }
    
    
// }

export const getAllProducts = () => {
     return new Promise((resolve, reject) => {
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            resolve(res)
        })
        .catch(err => reject(err))
     })
}


export const getSingleProduct = (id) => {
  return new Promise((resolve, reject) => {
     axios.get(`https://fakestoreapi.com/products/${id}`)
     .then(res => {
         resolve(res)
     })
     .catch(err => reject(err))
  })
}

// export const getAllProducts = async () => {
//     let res
//     try {
//         const data = await axios.get('https://fakestoreapi.com/products')
//         res = data
//     } catch (err) {
//         console.log(err.message)
//     } finally {
//         return res
//     }
// }

/* export const getAllCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))
} */

export const getAllCategories = () => {
  return new Promise((resolve, reject) => {
    axios.get('https://fakestoreapi.com/products/categories')
    .then(res=>resolve(res))
    .catch( err => reject(err))
  })
}


export const getProductSpecificCategory = (category) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
    .then(res=>resolve(res))
    .catch( err => reject(err))
  })
}


/* export const getProductSpecificCategory = () => {
    fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json=>console.log(json))
} */
