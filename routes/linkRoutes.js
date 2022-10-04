const express = require("express");
const router = express.Router();
const linkController = require("../controllers/linkController");

router.get("/:title", linkController.redirect);
router.get("/all", linkController.allLinks);

router.post(
  "/",
  express.urlencoded({ extended: true }),
  linkController.addLink
);
router.get("/", (req, res) => {
  res.render("index");
});

router.delete("/:id", linkController.deleteLink);
router.delete("/:id", express.json(), linkController.deleteLink);

module.exports = router;
