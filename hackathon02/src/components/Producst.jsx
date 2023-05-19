import React, { useState } from "react";

function Products({ products, carts, setCarts }) {
  const handleBuy = (e, i) => {
    const existingProduct = carts.find((product) => product.name === e.name);

    if (existingProduct) {
      const updatedCarts = carts.map((product) => {
        if (product.name === e.name) {
          return {
            ...product,
            amount: product.amount + 1,
          };
        }
        return product;
      });
      setCarts(updatedCarts);
    } else {
      const addProduct = {
        name: e.name,
        price: e.price,
        imageUrl: e.imageUrl,
        qty: 25,
        amount: 1,
      };
      setCarts([...carts, addProduct]);
    }
  };

  return (
    <div id="content" className="content">
      {products.map((e, i) => (
        <div className="product" key={i}>
          <img src={e.imageUrl} alt="" />
          <h3 id="name-product">{e.name}</h3>
         
          <p id="price-product">$ {e.price}</p>
          <div className="shopping">
            {carts.map((product) =>
              product.name === e.name ? (
                <p id="textcontent">{product.amount}</p>
              ) : null
            )}
            <button onClick={() => handleBuy(e, i)} className="buy">
              ADD+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
