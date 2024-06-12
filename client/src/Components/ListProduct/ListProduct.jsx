import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from '../Assets/cross_icon.png'
import axios from "axios";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = () => {
    axios.get('http://localhost:4000/product')
      .then((res) => {
        console.log(res.data);
        setAllProducts(res.data.data)
      })
  }

  useEffect(() => {
    fetchInfo();
  }, [])

  const removeProduct = async (id) => {
    await axios.delete(`http://localhost:4000/product/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })

    axios.get('http://localhost:4000/product')
      .then((res) => setAllProducts(res.data.data))

  }

  return (
    <div className="listproduct">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((e) => {
          return (
            <div>
              <div className="listproduct-format-main listproduct-format">
                <img className="listproduct-product-icon" src={e.imageCover} alt="" />
                <p cartitems-product-title>{e.title}</p>
                <p>${e.price}</p>
                <p>${e.priceAfterDiscount}</p>
                <p>{e.category}</p>
                <img className="listproduct-remove-icon" onClick={() => { removeProduct(e._id) }} src={cross_icon} alt="" />
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
