import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../Assets/upload_area.svg";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    priceAfterDiscount: "",
    productSize: "",
    imageCover: "",
    images: [],
    category: "",
    sold: 0,
    ratingsAverage: 4.0,
    ratingsQuantity: 0,
  });

  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/product/', product, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      setFeedback("Upload successful!");
    } catch (error) {
      console.error(error);
      setFeedback("Upload failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="addproduct">

      <div className="addproduct-itemfield">
        <input name="title" value={product.title} onChange={handleChange} placeholder="Title" required />
      </div>
      <div className="addproduct-itemfield">
        <input name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
      </div>
      <div className="addproduct-itemfield">
        <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" required />
      </div>
      <div className="addproduct-itemfield">
        <input name="priceAfterDiscount" value={product.priceAfterDiscount} onChange={handleChange} placeholder="Price After Discount" />
      </div>
      <div className="addproduct-itemfield">
        <input name="productSize" value={product.productSize} onChange={handleChange} placeholder="Product Size" required />
      </div>
      <div className="addproduct-itemfield">
        <input name="imageCover" value={product.imageCover} onChange={handleChange} placeholder="Image Cover URL" required />
      </div>
      <div className="addproduct-itemfield">
        <select name="category" value={product.category} onChange={handleChange} className="add-product-selector" required>
          <option value="">Select Category</option>
          <option value="Thick Curtains">Thick Curtains</option>
          <option value="UV Curtains">UV Curtains</option>
          <option value="Window Blinds">Windows Blinds</option>
        </select>
      </div>
      <button type="submit" className="addproduct-btn">Add Product</button>
      <span className="feedback">{feedback}</span> 
    </form>
  );
};

export default AddProduct;