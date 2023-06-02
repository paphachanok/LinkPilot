var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
	try {
		const authHeader = req.headers.authorization;
  		const token = authHeader && authHeader.split(" ")[1]; // Extract the token from the Authorization header
		// console.log(token + " tokennn")
		const { id } = req.query;
		// console.log(id);

		var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");
		// console.log(decoded);
		// console.log(id);

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
			error: "request does not reach here",
		});
	}
};
