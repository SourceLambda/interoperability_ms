require('dotenv').config()

const url = process.env.INTERFACE_2F_URL;
const express = require("express");
const router = express.Router();
const fs = require('fs');
const axios = require('axios');

const xmlData = fs.readFileSync('request.xml', 'utf8');

const consumes = async () => {
    try {
        const algo = await axios({
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': 'text/xml'
            },
            data: xmlData
        })
        return algo.data
    }
    catch (err) {
        console.log(err)
    }
};

router.get("/", async (req, res) => {
    let result = await consumes();
    res.json(result);
});

module.exports = router;