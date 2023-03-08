require("dotenv").config();
const process = require("node:process");
const path = require("node:path");
const express = require("express");
const logger = require("./logger");

const port = process.env.PORT || 5_000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/openai", require("./routes/openAIRoutes"));

app.listen(port, () => {
	logger.info({ port }, `Listening on port ${port}`);
});
