process.argv.shift()
process.argv.shift()

console.log(
	process.argv.map(function(string)
					{
						return Number(string)
					})
				.reduce(function(prev,next)
					{
						return prev + next
					}, 0))
