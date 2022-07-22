import axios from "axios";
import Noty from "noty";
import { initAdmin } from "./admin";
let addToCart = document.querySelectorAll(".add-to-cart");
let cartCounter = document.querySelector("#cartCounter");

const updateCart = (product) => {
  axios
    .post("/update-cart", product)
    .then((res) => {
      cartCounter.innerText = res.data.totalQty;
      new Noty({
        text: "Item added to cart",
        timeout: 1000,
        type: "success",
      }).show();
    })
    .catch((err) => {
      new Noty({
        text: "Something went wrong",
        timeout: 1000,
        type: "error",
      }).show();
    });
};

addToCart.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let product = JSON.parse(btn.dataset.product);
    updateCart(product);
  });
});

const alertMsg = document.querySelector("#success-alert");
if (alertMsg) {
  setTimeout(() => {
    alertMsg.remove();
  }, 2000);
}

initAdmin();
