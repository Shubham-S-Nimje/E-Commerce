import React from "react";
import { useParams } from "react-router-dom";
import AuthPage from "../Auth/AuthPage";
import ProductLeftBar from "./ProductLeftBar";
import ProductMidBar from "./ProductMidBar";
import ProductRightBar from "./ProductRightBar";
import { useEffect } from "react";
import { useState } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => alert(error));
    // console.log(data)
  }, []);
  //  console.log(products)

  const params = useParams();

  const newid = `${params.id}`;
  const product = products.find((obj) => obj.id == newid);
  //  console.log(product)
  const state = localStorage.getItem("token");
  return (
    <>
      {product && (
        <section>
          <div className="row p-2 m-2 text-center">
            <div className="col-12 col-lg p-2 m-0">
              <ProductLeftBar imageUrl={product.image} />
            </div>
            <div className="col-12 col-lg p-2 m-0">
              <ProductMidBar title={product.title} price={product.price} />
            </div>
            <div className="col-12 col-lg-3 p-2 m-0">
              <ProductRightBar price={product.price} />
            </div>
          </div>
          <div className="row text-start m-2 p-2">
            <h3 className="text-white py-2 text-center bg-dark">
              About this item
            </h3>
            <div className="text-start">{product.description}</div>
          </div>

          <div className="row text-start m-2 p-2">
            <h3 className="text-white py-2 text-center bg-dark">
              Related Products
            </h3>
            <div>
              <h2>more products</h2>
            </div>
          </div>
        </section>
      )}
      {!state && <AuthPage />}
    </>
  );
};

export default ProductPage;
