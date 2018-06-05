const express = require('express');
const router = express.Router();
const Form = require("../model/form");

router.get("/", (req,res) => {
    Form.find({}).then((data) => res.send(data))
})

router.post("/", (req,res) => {
    Form.create(req.body).then((data) => res.send(data));
})

module.exports = router;