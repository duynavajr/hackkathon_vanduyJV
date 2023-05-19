import React, { useState } from "react";

function Cart({ carts, setCarts }) {
  const [hideCart, setHideCart] = useState(false);
  const [hideCart2, setHideCart2] = useState(false);

  const totalPrice = carts.reduce(
    (total, product) => total + product.price * product.amount,
    0
  );

  const totalAmount = carts.reduce(
    (total, product) => total + product.amount,
    0
  );

  console.log(totalAmount);
  const handleClearCart = () => {
    setCarts([]);
    setHideCart(false);
  };

  // Hàm Sellllllllllllllllllllllllllllllllll
  const handleSell = (e) => {
    const existingProductSell = carts.find(
      (product) => product.name === e.name
    );
    if (existingProductSell) {
      const updatedCarts = carts.map((product) => {
        if (product.name === e.name) {
          const updatedAmount = product.amount - 1;
          if (updatedAmount === 0) {
            return null;
          }
          return {
            ...product,
            amount: updatedAmount,
          };
        }
        return product;
      });
      setCarts(updatedCarts.filter((product) => product !== null));
    }
  };

  // Hàm Buyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
  const handleBuy = (e) => {
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
  const handleDelete = (i) => {
    const deleteProduct = [...carts];
    deleteProduct.splice(i, 1);
    setCarts(deleteProduct);
  };
  const handlePay = () => {
    setHideCart2(!hideCart2);
    setHideCart(!hideCart);
  };
  return (
    <div className="cart">
      <div className="container_amount">
        <b className="amount_cart">{totalAmount}</b>
        <i
          onClick={() => setHideCart(!hideCart)}
          className="fa-solid fa-cart-shopping"
        ></i>
      </div>
      <div className={hideCart ? "container_carthide" : "container_cart"}>
        {carts.map((e, i) => (
          <div className="cart_user" key={i}>
            <img src={e.imageUrl} />
            <p>{e.name}</p>
            <span
              onClick={() => handleBuy(e)}
              className="fa-solid fa-plus"
            ></span>
            <p>{e.amount}</p>
            <span
              onClick={() => handleSell(e)}
              className="fa-solid fa-minus"
            ></span>
            <p>{e.price * e.amount}</p>

            <span
              onClick={() => handleDelete(i)}
              className="fa-solid fa-trash"
            ></span>
          </div>
        ))}
        <div className="total_cart">
          <p> Tổng tiền: {totalPrice} </p>
          <div className="nav_cart">
            <button onClick={handlePay}>
              Mua Hàng<span className="fa-solid fa-sack-dollar"></span>
            </button>
            <button onClick={handleClearCart}>
              Xoá Hàng<span className="fa-solid fa-trash"></span>
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Cart;
