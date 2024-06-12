import React, { useState, useEffect, useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productId >= 1 && productId < 100) {
      const productFromContext = all_product.find((e) => e.id === Number(productId));
      setProduct(productFromContext);
    } else {
      const fetchProduct = async () => {
        try {
          const response = await axios.get('http://localhost:4000/product/' + productId);
          setProduct(response.data.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchProduct();
    }
  }, [productId, all_product]);


  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product