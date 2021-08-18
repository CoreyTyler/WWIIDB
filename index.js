const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: '34.121.137.130',
    user: 'root',
    password: '12880758',
    database: 'WW2Weapons'
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('mysql connected...');
})

const app = express();

app.listen('3000', () => {
    console.log('server started on port 3000');
});