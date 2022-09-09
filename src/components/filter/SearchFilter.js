import { AutoComplete } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateRecentlyViewed } from '../../redux/recentlyViewed/recentlyViewedAction';
import ProductModal from '../ProductModal';

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const SearchFilter = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.allproducts.products)
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);
  const [showModal,setShowModal] = useState(false)
  const [selectedProduct , setSelectedProduct] = useState({})
  const recentlyViewed = useSelector(state => state.recentlyViewed.products);


  const onSearch = (searchText) => {
    let options = products.filter( e => e.title.toLowerCase().includes(searchText.toLowerCase()));
    let optionsText = options.map(e=>({value:e.title}));
    console.log('options', options);
    console.log('options', optionsText);
    setOptions([...optionsText]);
  };
  //var selectedProduct = {}
  const onSelect = (data) => {
    let selectedProduct = products.filter( e => e.title.toLowerCase().includes(data.toLowerCase()))[0];
    setShowModal(true);
    console.log('onSelect', selectedProduct);
    setSelectedProduct(selectedProduct)
    addToRecentlyViewed(selectedProduct)
};

  const onChange = (data) => {
    setValue(data);
  };

  console.log('onSelect1', selectedProduct);

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
        placeholder="input here"
      />
      {
        showModal&& <ProductModal product={selectedProduct} setShowModal={setShowModal} showmodal={showModal}/>
      }
    </>
  );
};

export default SearchFilter;