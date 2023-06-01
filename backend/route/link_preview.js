const Axios = require("axios");
const cheerio = require("cheerio");

module.exports = async (req, res) => {
	try {
		const { url } = req.body;
		// console.log(url)

		const response = await Axios.get(url);
		console.log(response);

		const htmlContent = response.data;

		const $ = cheerio.load(htmlContent);

		// Extract the Open Graph image, title, and description
		const ogImage = $('meta[property="og:image"]').attr("content");
		const ogTitle = $('meta[property="og:title"]').attr("content");
		const ogDescription = $('meta[property="og:description"]').attr("content");

		// Send the extracted data as the response
		if (ogImage) {
			res.send({ image: ogImage, title: ogTitle, description: ogDescription });
			console.log("everything is fine")
		} else {
			res.send({ error: "No Open Graph image found" });
		}
	} catch (error) {
		console.error("Error fetching link preview data:", error);
		res.status(500).send({ error: "Error fetching link preview dataaaa" });
		console.log("Reach or not?")
	}
};



// const Axios = require("axios");
// const cheerio = require("cheerio");


// module.exports = async (req, res) => {
// 	try {
// 		const targetUrl = "https://www.instagram.com/p/ChPGogFPGe_/?utm_source=ig_web_copy_link&igshid=MmJiY2I4NDBkZg==";
// 		const response = await Axios.get(targetUrl);
// 		const htmlContent = response.data;

// 		const $ = cheerio.load(htmlContent);

// 		// Extract the Open Graph image, title, and description
// 		const ogImage = $('meta[property="og:image"]').attr("content");
// 		const ogTitle = $('meta[property="og:title"]').attr("content");
// 		const ogDescription = $('meta[property="og:description"]').attr("content");

// 		// Send the extracted data as the response
// 		if (ogImage) {
// 			res.send({ image: ogImage, title: ogTitle, description: ogDescription });
// 		} else {
// 			res.send({ error: "No Open Graph image found" });
// 		}
// 	} catch (error) {
// 		console.error("Error fetching link preview data:", error);
// 		res.status(500).send({ error: "Error fetching link preview data" });
// 	}
// };
