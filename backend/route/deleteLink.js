var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
	try {
		const token = req.cookies.userToken;
		const { id } = req.body;

		var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");
		console.log(decoded);

		console.log(id);

		connection.query("DELETE from Links WHERE user_id = ? AND link_id = ?", [decoded.userId, id], (err, rows) => {
			// Check if cannot find the data in the database then return the error
			if (err) {
				res.json({
					success: false,
					data: null,
					error: err.message,
				});
			} else {
				// Return data to the client if success
				return res.json({
					success: true,
					data: {
						message: "delete successfully",
					},
					error: null,
				});
			}
		});
	} catch (err) {
		res.json({
			success: false,
			data: null,
			error: "Invalid or expired JWT token",
		});
	}
};
