const pool = require('../DB/connection')

const getLandmines = (req, res) => {
    pool.query('SELECT * FROM WW2Weapons.landmines', function(err, rows) {
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
    let sql = `SELECT * FROM WW2Weapons.landmines WHERE idlandmines = ${req.params.id}`;
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
    getLandmines,
    getId
}