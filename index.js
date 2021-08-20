const express = require('express');
const mysql = require('mysql');
const app = express();
app.listen('3000', () => {
    console.log('server started on port 3000');
});

let pool = mysql.createPool({
    connectionLimit: 100,
    host: '34.121.137.130',
    user: 'root',
    password: '12880758',
    database: 'WW2Weapons',
    degug: false
})