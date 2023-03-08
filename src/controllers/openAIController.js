const openai = require("../util/openai");
const logger = require("../logger");

const generateImage = async (req, res) => {
	const { prompt, size } = req.body;
	const effectiveImageSize = size === "small" ? "256x256" : size === "medium" ? "512x512" : "1024x1024";

	try {
		const response = await openai.createImage({
			prompt,
			n: 1,
			size: effectiveImageSize,
		});

		const imageURL = response.data.data[0].url;

		res.status(200).json({
			success: true,
			data: imageURL,
		});
	} catch (error_) {
		if (error_.response) {
			logger.info(error_.response.status);
			logger.info(error_.response.data);
		} else {
			logger.error(error_.message);
		}

		res.status(400).json({
			success: false,
			error: "The image could not be generated",
		});
	}
};

module.exports = { generateImage };
