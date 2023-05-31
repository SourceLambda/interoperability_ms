const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();
const http = require("http");
const soap = require("soap");

const expose = require("./expose");

const server = http.createServer(app);
const port = process.env.PORT || "8080";

const startServer = () => {
  server.listen(port);
  soap.listen(
    server,
    "/wsdl",
    expose.service,
    expose.xml
  );
  console.log(`Server started on port ${port}`);
};

startServer();

module.exports = app;