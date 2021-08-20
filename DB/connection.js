const mysql = require('mysql');

class Connection{
    constructor() {
        if (!this.pool) {
            console.log('creating connection pool...')
            this.pool = mysql.createPool({
                connectionLimit: 100,
                host: '34.121.137.130',
                user: 'root',
                password: '12880758',
                database: 'WW2Weapons',
                degug: false
            })
            return this.pool
        }
        return this.pool
    }
}

const connectionInstance = new Connection()

module.exports = connectionInstance