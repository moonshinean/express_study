
var express = require('express')
var app = express();
const port = 3000

app.get('/', (req, res) => {
	res.send('hello word')
})

var server = app.listen(port, 'localhost', () => {
	var host = server.address().address;
	console.log(`Example app listening on http://${host}:${port}`);
})
