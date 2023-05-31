const soap = require("soap");
const url = "https://untorneo-interface-4yiv26znhq-uc.a.run.app/ws";
const express = require("express");
const router = express.Router();

const consumes = async (req, res) => {
  try {
    let client = await soap.createClientAsync(url);
    console.log("Client created...");
    let result = await client.AllSubjectsAsync({});
    console.log("Result: ", result);
    return result;
  } catch (error) {
    console.log("Error: ", error);
    return error;
  }
};
router.get("/", async (req, res) => {
  let result = await consumes(req, res);
  res.send(result);
});

module.exports = router;