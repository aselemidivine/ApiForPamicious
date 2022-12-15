const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

dotenv.config(); // this is so that we can use the .env

mongoose
  .connect(process.env.MONGO_URL) // This is our secret key
  .then(() => console.log("DB connection succesful"))
  .catch((err) => {
    console.log(err);
  });

// Creating the rest API
// app.get("/api/test", () => {
//   console.log("test is succesful");
// });

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("backend server is running");
});
