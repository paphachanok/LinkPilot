const mysql = require("mysql2");
var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
    const token = req.cookies.userToken;
	console.log(token + " token in update")
    const { id, title, url, description } = req.body;

    var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");

    var sql = mysql.format(
        "UPDATE Links SET title = ?, url = ?, description = ? WHERE user_id = ? AND link_id = ?",
        [title, url, description, decoded.userId, id]
    );

    connection.query(sql,
        (err, rows) => {
            if (err) {
                return res.json({
                    success: false,
                    data: null,
                    error: err.message,
                });
            }

            else {
                res.json({
                    success: true,
                    message: "update successfully",
                });
            }
        });
};
