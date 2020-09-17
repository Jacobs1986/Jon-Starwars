const router = require("express").Router();
const chapter = require('./chapters.routes');

// Routers
router.use("/chapters", chapter);

module.exports = router;