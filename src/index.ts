import express from "express";

import config from "./config/config";
require("./database");

const { port } = config;

const app = express();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
