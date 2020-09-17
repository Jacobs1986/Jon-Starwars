const router = require("express").Router();
const folderChapter1 = "./chapter-1/";
const fs = require('fs');

// Chapter one, path /api/chapters/chapter1
router.route("/chapter1")
    .get((requrest, response) => {
        fs.readdirSync(folderChapter1).forEach(file => {
            console.log(file);
        })
    })

module.exports = router;