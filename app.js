const express = require('express');
const app = express();
const http = require('http').Server(app);
const api = require('./routes/routes');

const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
})


app.use('/api', api);