const mysql = require('mysql');

const connection = mysql.createConnection({
	host : 'localhost',
	user : 'admin',
	password : 'q1w2e3r4t5',
	database : 'multiplicar'
})


module.exports = connection;