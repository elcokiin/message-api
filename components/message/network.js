const express = require("express");
const multer = require("multer");

const config = require("../../config");
const controller = require("./controller");
const response = require("../../network/response");

const router = express.Router();
const upload = multer({ dest: `public/${config.filesRoute}/` });


router.get("/", (req, res) => {
    const filterMessages = req.query.chat || null;
    controller.getMessages(filterMessages)
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(err => {
            response.error(req, res, "Error Interno", err, 500)
        })
});

router.post("/", upload.single("file"), (req, res) => {
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
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