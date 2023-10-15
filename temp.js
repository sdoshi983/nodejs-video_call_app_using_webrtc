const express = require('express');
const app = express();
const server = require('http').Server(app);
server.listen(7722, () => {
    console.log("Server running on port : " + 7722);
})