const express = require("express");
const app = express();

const soap = require("soap");
const expose = require("./expose");
const consume = require("./consume");

const port = process.env.PORT || "8081";

app.use("/consumes", consume); 

app.listen(port, () => {
  soap.listen(app, "/GetPosts", expose.service, expose.xml, () => {
    console.log(`Server started on port ${port}`)
  })
});

module.exports = app;