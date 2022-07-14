import axios from "axios";

let addToCart = document.querySelectorAll(".add-to-cart");
let cartCounter = document.querySelector("#cartCounter");

const updateCart = (product) => {
  axios.post("/update-cart", product).then((res) => {
    console.log(res);
    cartCounter.innerText = res.data.totalQty;
  });
};

addToCart.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let product = JSON.parse(btn.dataset.product);
    updateCart(product);
  });
});
