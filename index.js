const server = require('./api/server.js');

const PORT = 4040;

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
