var fs = require('fs')

function callback (err, data) {
	if (err) {
		return console.log(err)
	}
	var lines = data.split('\n')
	console.log(lines.length - 1)
}

var file = fs.readFile(process.argv[2], 'utf-8', callback)
