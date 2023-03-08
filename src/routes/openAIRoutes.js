const express = require("express");
const router = express.Router();
const { generateImage } = require("../controllers/openAIController");

router.post("/generate_image", generateImage);

module.exports = router;
