
var express = require('express')
var app = express();
const port = 3000

app.get('/', (req, res) => {
	res.send('hello word')
})

var server = app.listen(port, '192.168.11.171', () => {
	var host = server.address().address;
	console.log(`Example app listening on http://${host}:${port}`);
})
