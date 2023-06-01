const soap = require("soap");
const url = "https://untorneo-interface-4yiv26znhq-uc.a.run.app/ws";
const express = require("express");
const router = express.Router();

const consumes = () => {
  try {
    soap.createClient(url, function (err, client) {
      if (err) {
          console.error(err);
      } else {
          client.getVenuesRequest({}, function (err, result) {
              if (err) {
                  console.error(err);
              } else {
                  console.log(result);
              }
          });
      }
  });

  } catch (error) {
    console.log("Error: ", error);
    return error;
  }
};
router.get("/", (req, res) => {
  let result =  consumes();
  res.send(result);
});

module.exports = router;