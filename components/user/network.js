const express = require("express");
const response = require("../../network/response");
const controller = require("./controller")

const router = express.Router();

router.post("/", (req, res) => {
    controller.addUser(req.body.username, req.body.name)
        .then(data => {
            response.success(req, res, data, 200)
        })
        .catch(err => {
            response.error(req, res, "Error Interno", err, 400);
        })
})

router.get("/", (req, res) => {
    const filterUser = req.query.username || null;
    controller.getUser(filterUser)
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(err => {
            response.error(req, res, "Error Interno", err, 500);
        })
})

module.exports = router;