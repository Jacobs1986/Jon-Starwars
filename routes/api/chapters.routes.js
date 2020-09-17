const router = require("express").Router();
const folderChapter1 = "./chapter-1/";
const fs = require('fs');
const path = require('path');

// paths
let chapter1 = path.join(__dirname, "../../client/src/components/pages/Images/chapter-1/");

// array
let chapterArray = [];

// Chapter one, path /api/chapters/chapter1
router.route("/chapter1")
    .get((request, response) => {
        fs.readdirSync(chapter1).forEach(file => {
            chapterArray.push(file);
        })
        chapterArray.sort();
        response.json(chapterArray);
    })

module.exports = router;