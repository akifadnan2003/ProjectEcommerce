import React, { useContext, useState } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import axios from 'axios';


const ShopCategory = (props) => {
  const [allproducts, setAllProducts] = useState([]);
  axios.get('http://localhost:4000/product')
    .then((res) => setAllProducts(res.data.data))
    
  return (
    <div className='shop-category'>

      <div className="shopcategory-indexSort">
        <p>
          {/* <span>Showing 1</span> out of {allproducts.length} products */}
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {allproducts.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item._id} name={item.title} image={item.imageCover} priceAfterDiscount={item.priceAfterDiscount} price={item.price} category={item.category}/>
          }
          else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
