const router = require("express").Router();
const creditsController = require("../../controllers/creditsController");

// Matches with "/api/credits"
/*router
  .route("/")
  .get(creditsController.findAll)
  .post(creditsController.create);
*/
// Matches with "/api/credits/:idAgent"
router
  .route("/:idAgent")
  .get(creditsController.findById)
  /*.put(creditsController.update)
  .delete(creditsController.remove);*/

module.exports = router;
