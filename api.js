const express = require("express");

const router = express.Router();
const data = require("./data/ads.json");

router.get("/", (req, res) => {
  res.send(data[0]);
});

router.get("/:itemId", (req, res) => {
  const { itemId } = req.params;
  // let's imitate some calculations here
  const allAds = data.reduce((acc, page) => acc.concat(page.ads), []);
  const ad = allAds.find(item => item.id === itemId);

  if (!ad) res.status(404);

  res.send(ad);
});

module.exports = router;
