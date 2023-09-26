'use strict';
const {  Client } = require('pg');


const client = new Client({
    user: 'user',
    host: 'postgres',
    database: 'db',
    password: 'pass',
    port: 5432,
  });
  
client.connect()

module.exports = client;