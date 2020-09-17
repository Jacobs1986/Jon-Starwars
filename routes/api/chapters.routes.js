const router = require("express").Router();

// Chapter one, path /api/chapters/chapter1
router.route("/chapter1")
    .get((requrest, response) => {
        response.json("The route is working.")
    })

module.exports = router;