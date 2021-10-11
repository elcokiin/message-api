const express = require("express");
// el router nos va a permitir separar cabeceras o por metodos o lo va a poder separar por url
const router = express.Router();

const controller = require("./controller");
const response = require("../../network/response");

router.get("/", (req, res) => {
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(err => {
            response.error(req, res, "Error Interno", err, 500)
        })
});

router.post("/", (req, res) => {
    controller.addMessage(req.body.user, req.body.message)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, "Error Interno", err, 400)
        });
});

router.patch("/:id", (req, res) => {
    controller.updateMessage(req.params.id, req.body.message)
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(err => {
            response.error(req, res, "Error Interno", err, 400);
        });
})

router.delete("/:id", (req, res) => {
    controller.deleteMessage(req.params.id)
        .then(()=> {
            response.success(req, res, "Message success delete", 200)
        })
        .catch(err => {
            response.error(req, res, "Error Interno", err, 400);
        })
})

module.exports = router;