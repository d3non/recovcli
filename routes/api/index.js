const router = require("express").Router();
const creditRoutes = require("./credits");

// Book routes
router.use("/credits", creditRoutes);

module.exports = router;
