import React from 'react'
import './Sidebar.css'
import add_product_icon from '../Assets/Product_Cart.svg'
import list_product_icon from '../Assets/Product_list_icon.svg'
import ai_product_icon from '../Assets/ai_product_icon.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/adminPanel/addproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={add_product_icon} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to='/adminPanel/listproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={list_product_icon} alt="" />
          <p>Product List</p>
        </div>
      </Link>
      <Link to='/adminPanel/ai-design' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={ai_product_icon} alt="" style={{marginLeft: '1.25rem', width: '34px'}} />
          <p>Design with AI</p>
        </div>
      </Link>
      
    </div>
  )
}

export default Sidebar