

require('dotenv').config();
const server = require('./src/server');

// Port to listen on
const PORT = process.env.PORT || 3000;

server.listen(PORT, err => {
    if (err) return console.log(`Cannot Listen on PORT: ${PORT}`);
    console.log(`Server is Listening on: http://localhost:${PORT}/`);
});