import * as fs from "node:fs";
import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

router.get("/api/music-data", (req, res) => {
  const rawdata = fs.readFileSync("./src/assets/music-data.json");
  const dataMusic = JSON.parse(rawdata.toString());
  console.warn(dataMusic);
  res.json(dataMusic);
});

/* ************************************************************************* */

export default router;
