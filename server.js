'use strict';
const express = require('express');
const client = require("./config/db.js");
const routes = require("./routes/api.js");

client.query('SELECT table_name FROM information_schema.tables;', (err, res) => {
  console.log("Test the db: ", res)
});
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
// App
const app = express();


app.use("/api", routes);
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
