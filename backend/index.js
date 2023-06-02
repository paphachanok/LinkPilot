const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;
const cors = require('cors');
const Axios = require("axios");
const cheerio = require("cheerio");

// //! อิหยังวะ
// import { ErrorResponse } from './type/response.js';
// import { verifyAccessToken } from './services/JWTService.js';

//! start
//* allows resources on a web page to be requested from a different domain than the one the page
//* can be open in both 5174 5173
app.use(
	cors({
		origin: ['http://localhost:5174', 'http://localhost:5173'],
		credentials: true,
	})
);

app.use(express.json());
//! Parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: "application/json" }));
app.use(cookieParser());

//! ต่อ database
const connection = mysql.createConnection({
	host: "server2.bsthun.com",
	port: "6105",
	user: "lab_1eekps",
	password: "qDmb7qM0YEvqQoNd",
	database: "lab_blank01_1e3zufv",
});
connection.connect(() => {
	console.log("Database is connected");
});

// Export connection to use in other files
global.connection = connection;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

//! Register endpoints
app.post("/login", require("./route/login"));
app.post("/register", require("./route/register"));
app.get("/getUser", require("./route/getUser"));
app.get("/link-preview", require("./route/link_preview"));
app.post("/createLink", require("./route/createLink"));
app.delete("/deleteLink", require("./route/deleteLink"));
app.patch("/editLink", require("./route/editLink"));

// app.get("/check", require("./route/ckeck_login"));
app.get("/getAllLink", require("./route/get_all_link"));


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
