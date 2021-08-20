const pool = require('../DB/connection')

const getRifles = (req, res) => {
    pool.query('SELECT * FROM WW2Weapons.rifles', function(err, rows) {
        if(err) {
            return res.json({
                'error': true,
                'message': 'Error occured: '+ err
            })
        } else {
            res.json(rows)
        }
    })
}

const getId = (req, res) => {
    let sql = `SELECT * FROM WW2Weapons.rifles WHERE idRifles = ${req.params.id}`;
    pool.query(sql, function(err, row) {
        if(err) {
            return res.json({
                'error': true,
                'message': 'Error occured: '+ err
            })
        } else {
            res.json(row)
        }
    })
};

module.exports = {
    getRifles,
    getId
}