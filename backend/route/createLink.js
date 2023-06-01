const mysql = require("mysql2");
var jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
	const token = req.cookies.user;

	var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");
	console.log(decoded.userId);
	const { title, url, description } = req.body;

	var sql = mysql.format(
		"INSERT INTO Links (title, url, description, user_id) VALUES (?, ?, ?, ?)",
		[title, url, description, decoded.userId]
	);

	console.log("DEBUG: /createLink => " + sql);
	connection.query(sql, (err, rows) => {
		if (err) {
			return res.json({
				success: false,
				data: null,
				error: err.message,
			});
		}

		res.json({
			success: true,
			message: "Link has been created",
		});
	});
};
