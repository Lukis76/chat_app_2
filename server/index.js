const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
require('dot-env').config()

app.use(cors())

const server = http.createServer(app)


server.listen(process.env.PORT, () => {
  console.log(`Server on port => ${PORT}`);
})