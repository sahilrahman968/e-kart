import { AutoComplete } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { updateRecentlyViewed } from '../../redux/recentlyViewed/recentlyViewedAction';

const SearchFilter = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector(state => state.allproducts.products)
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);
  const recentlyViewed = useSelector(state => state.recentlyViewed.products);


  const onSearch = (searchText) => {
    let options = products.filter( e => e.title.toLowerCase().includes(searchText.toLowerCase()));
    let optionsText = options.map(e=>({value:e.title}));
    setOptions([...optionsText]);
  };
  const onSelect = (data) => {
    let selectedProduct = products.filter( e => e.title.toLowerCase().includes(data.toLowerCase()))[0];
    navigate("/product", { state:{productId : selectedProduct?.id} });
    addToRecentlyViewed(selectedProduct)
    setValue("")
};

  const onChange = (data) => {
    setValue(data);
  };


  const addToRecentlyViewed = (product) => {
    let present = recentlyViewed.find(e => e.id === product.id)
    if(!present){
      dispatch(updateRecentlyViewed([product,...recentlyViewed]))
    }  
  }

  return (
    <>
      <AutoComplete
        options={options}
        style={{
          width: 600,
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="search for products"
        value={value}
      />
    </>
  );
};

export default SearchFilter;