import mongoose from "mongoose";

import config from "./config/config";

const { mongoUri } = config;

const connection = mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("Database connection sucessfully.");
  })
  .catch((err) => {
    console.log("Database connection fail.");
    console.log(err);
  });

export default connection;
