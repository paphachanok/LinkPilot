const Axios = require("axios");
const cheerio = require("cheerio");

// const defaultUrl = "https://www.instagram.com/p/CWxSPnevlp6/?utm_source=ig_web_copy_link&igshid=MmJiY2I4NDBkZg==";
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


// const Axios = require("axios");
// const cheerio = require("cheerio");
// const path = require("path");

// module.exports = async (req, res) => {
// 	try {
// 		const { url } = req.query;
// 		console.log(url);
// 		const response = await Axios.get(url);
// 		const htmlContent = response.data;

// 		const $ = cheerio.load(htmlContent);

// 		// Extract the Open Graph image, title, and description
// 		const ogImage = $('meta[property="og:image"]').attr("content");
// 		const ogTitle = $('meta[property="og:title"]').attr("content");
// 		const ogDescription = $('meta[property="og:description"]').attr("content");

// 		// Check if any of the values are missing or empty, and assign default values
// 		//   const defaultImage = "default-image-url";
// 		const defaultImage = path.join(__dirname, "../../frontend/src/assets/default.png");
// 		const defaultTitle = "Default Title";
// 		const defaultDescription = "Default Description";

// 		const image = ogImage || defaultImage;
// 		const title = ogTitle || defaultTitle;
// 		const description = ogDescription || defaultDescription;

// 		// Send the extracted data as the response
// 		res.send({ image, title, description });
// 	} catch (error) {
// 		console.error("Error fetching link preview data:", error);
// 		// Handle the error and send an appropriate response
// 		const defaultImage = path.join(__dirname, "../../frontend/src/assets/default.png");
// 		const defaultTitle = "Default Title";
// 		const defaultDescription = "Default Description";

// 		res.status(500).send({
// 			error: "Error fetching link preview data",
// 			image: defaultImage,
// 			title: defaultTitle,
// 			description: defaultDescription,
// 		});
// 	}
// };


// const Axios = require("axios");
// const cheerio = require("cheerio");


// module.exports = async (req, res) => {
// 	try {
// 		const { url } = req.query;
// 		console.log(url);
// 		// const targetUrl = "https://www.instagram.com/p/ChPGogFPGe_/?utm_source=ig_web_copy_link&igshid=MmJiY2I4NDBkZg==";
// 		const response = await Axios.get(url);
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
