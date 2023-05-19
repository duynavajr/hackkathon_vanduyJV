import React, { useState } from "react";
// import Products from "./Products";
import Cart from "./Cart";
import Products from "./Producst";

function Home() {
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "Airpods Pro",
      price: 24900,
      imageUrl:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/54/289781/s16/airpods-pro-2-thumb-650x650.png",
      qty: 10,
      // heading: "Wireless Noise Cancelling Earphones",
      // des: "AirPods Pro have been designed to deliver active Noise Cancellation for immersive sound. Transparancy mode so much can hear your surroundings.",
    },
    {
      id: 1,
      name: "Apple Watch",
      price: 40900,
      imageUrl: "https://purepng.com/public/uploads/large/apple-watch-pcq.png",
      qty: 15,
      // heading: "You’ve never seen a watch like this",
      // des: "The most advanced Apple Watch yet, featuring the Always-On Retina display, the ECG app, international emergency calling, fall detection and a built‑in compass.",
    },
    {
      id: 2,
      name: "Macbook Pro",
      price: 199900,
      imageUrl: "https://pngimg.com/uploads/macbook/macbook_PNG8.png",
      qty: 20,
      // heading: "The best for the brightest",
      // des: "Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we’ve ever made. it’s the ultimate pro notebook for the ultimate user.",
    },
    {
      id: 3,
      name: "iPhone 11 pro",
      price: 106600,
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
      qty: 35,
      // heading: "Pro cameras. Pro display. Pro performance",
      // des: "A mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.",
    },
    {
      amount: 0,
      id: 4,
      name: "iPad Pro",
      price: 71900,
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
      qty: 25,

    },
  ]);
  const [carts, setCarts] = useState([]);
  return (
    <div className="bodybody">
      <Cart carts={carts} setCarts={setCarts} />
      <Products
        carts={carts}
        setCarts={setCarts}
        products={products}
        setProducts={setProducts}
      />
    </div>
  );
}

export default Home;
