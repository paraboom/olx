const express = require("express");

const router = express.Router();
const data = require("./data/ads.json");

router.get("/", (req, res) => {
  const { page: pageIndex = 1 } = req.query;
  const page = data.find(item => item.page === pageIndex);

  if (!page) res.status(404);

  res.send(page);
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
