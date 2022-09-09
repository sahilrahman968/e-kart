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


export const getProductSpecificCategory = () => {
    fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json=>console.log(json))
}


/* export const search = (searchTerm,type="Any") => {
    return (dispatch) => {
        dispatch(searchResultsRequest());
        const options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/find',
            params: {q: searchTerm},
            headers: {
              'X-RapidAPI-Key': '0e32187380msh81bb930f061ede1p10d526jsn6e25bfffc627',
              'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
            if(type==="Any")
              dispatch(searchResultsSuccess(response.data.results))
            if(type==="Person")
              dispatch(searchResultsSuccess(response.data.results.filter(item => item?.legacyNameText)))
            if(type==="TV Mini-series")
              dispatch(searchResultsSuccess(response.data.results.filter(item => item?.titleType === "tvMiniSeries")))
            if(type==="TV Series")
              dispatch(searchResultsSuccess(response.data.results.filter(item => item?.titleType === "tvSeries")))    

          }).catch(function (error) {
              dispatch(searchResultsFailure(error))
          });
    }
} */
