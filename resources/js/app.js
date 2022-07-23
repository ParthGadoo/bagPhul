import axios from "axios";
import Noty from "noty";
import { initAdmin } from "./admin";
import moment from "moment";
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

let statuses = document.querySelectorAll(".status_line");
let hiddenInput = document.querySelector("#hiddenInput");
let order = hiddenInput ? hiddenInput.value : null;
order = JSON.parse(order);

let time = document.createElement("small");
function updateStatus(order) {
  let stepCompleted = true;
  statuses.forEach((status) => {
    let dataProp = status.dataset.status;
    if (stepCompleted) {
      status.classList.add("step-completed");
    }
    if (dataProp === order.status) {
      stepCompleted = false;
      time.innerText = moment(order.updatedAt).format("hh:mm A");
      status.appendChild(time);
      if (status.nextElementSibling) {
        status.nextElementSibling.classList.add("current");
      }
    }
  });
}

updateStatus(order);
