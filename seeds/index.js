const mongoose = require("mongoose");
const Product = require("../app/models/product");

const url = "mongodb://localhost:27017/bagPhul-test";

mongoose
  .connect(url)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database connection error");
    console.log(err);
  });

const seedDB = async () => {
  await Product.deleteMany({});
  await Product.insertMany([
    {
      name: "Margherita",
      image: "pizza.png",
      price: 250,
      size: "small",
    },
    {
      name: "Marinara",
      image: "pizza.png",
      price: 300,
      size: "medium",
    },
    {
      name: "Carbonara",
      image: "pizza.png",
      price: 200,
      size: "small",
    },
    {
      name: "Americana",
      image: "pizza.png",
      price: 500,
      size: "large",
    },
    {
      name: "Chicken Mushroom",
      image: "pizza.png",
      price: 350,
      size: "medium",
    },
    {
      name: "Paneer pizza",
      image: "pizza.png",
      price: 200,
      size: "small",
    },
    {
      name: "Vegies pizza",
      image: "pizza.png",
      price: 600,
      size: "large",
    },
    {
      name: "Pepperoni",
      image: "pizza.png",
      price: 500,
      size: "medium",
    },
  ]);
};

seedDB().then(() => {
  mongoose.connection.close();
});
