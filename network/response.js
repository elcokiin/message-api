exports.success = (req, res, message, status) => {
    console.log(message);
    res.status(status || 200).json({
        error: "",
        body: message,
    });
}

exports.error = (req, res, message, details, status) => {
    console.error("[response error] " + details);

    res.status(status || 500).json({
        error: message,
        body: "",
    });
}