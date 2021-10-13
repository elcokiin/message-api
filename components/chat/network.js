const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");

const router = express.Router();

router.post("/", (req, res) => {
    controller.addChat(req.body.users)
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(err => {
            response.error(req, res, "Error Interno", err, 400);
        })
})

router.get("/:userId", (req, res) => {
    const userId = req.params.userId || null;
    controller.getChat(userId)
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(err => {
            response.error(req, res, "Error Interno", err, 400);
        })
});

module.exports = router;