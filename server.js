const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const expressLayout = require("express-ejs-layouts");
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");

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

app.use(express.static("public"));
app.use(expressLayout);
app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs");

require("./routes/web.js")(app);

app.listen(PORT, () => {
  console.log(`Serving on port ${PORT}`);
});
