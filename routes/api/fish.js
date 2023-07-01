const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello fish");
});

router.post("/", (req, res) => {
  res.send(req.body);
});

module.exports = router;
