const connection = require('../database/database');


const model = {
	multiplicar : (n1, n2, resultado) => {
		return new Promise((resolve, reject) => {
			let sql = "INSERT INTO multi_resultado (num1, num2, resultado) VALUES (?, ?, ?)";

			connection.query(sql, [n1, n2, resultado], (err, result) => {
				if (err) {
					reject(err);
				}

				resolve(result);
			})
		})
	}
}

module.exports = model;