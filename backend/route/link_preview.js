const Axios = require("axios");
const cheerio = require("cheerio");

const defaultTitle = "";
const defaultDescription = "The Open Graph data cannot be extracted, but you can click to navigate to the page";


module.exports = async (req, res) => {
	try {
		const { url } = req.query;
		console.log(url);
		const requestUrl = url || defaultUrl; // Use the provided URL or the default URL if not provided

		const response = await Axios.get(requestUrl);
		const htmlContent = response.data;

		const $ = cheerio.load(htmlContent);

		// Extract the Open Graph image, title, and description
		const ogImage = $('meta[property="og:image"]').attr("content");
		const ogTitle = $('meta[property="og:title"]').attr("content");
		const ogDescription = $('meta[property="og:description"]').attr("content");

		// Send the extracted data as the response
		if (ogImage) {
			res.send({ image: ogImage, title: ogTitle, description: ogDescription });
		} else {
			res.send({ image: ogImage, title: defaultTitle, description: defaultDescription });
		}
	} catch (error) {
		console.error("Error fetching link preview data:", error);
		res.status(500).send({ error: "Error fetching link preview data" });
	}
};
