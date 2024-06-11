import React, { useEffect, useState } from "react";
import "./Orders.css";

const Orders = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = () => { 
    fetch('http://localhost:4000/allproducts') 
            .then((res) => res.json()) 
            .then((data) => setAllProducts(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])

   

  return (
    <div className="listproduct">
      <h1>All Orders List</h1>
      <div className="listproduct-format-main">
          <p>Products ID</p>
          <p>Title</p>
          <p>Order's Name</p>
          <p>Address</p>
          <p>Date</p>
          <p>Measurement</p>
          <p>Payment Method</p>
        </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((e) => {
          return (
            <div>
              <div className="listproduct-format-main listproduct-format">
                <img className="listproduct-product-icon" src={e.image} alt="" />
                <p cartitems-product-title>{e.name}</p>
                <p>${e.old_price}</p>
                <p>${e.new_price}</p>
                <p>{e.category}</p>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
