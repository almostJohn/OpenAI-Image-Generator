const process = require("node:process");
const { pino } = require("pino");

const logger = pino({ name: process.env.LOGGER_NAME });

module.exports = logger;
