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

const getId = () => {

}

const getName = () => {

}

const getCountry = () => {
    
}

module.exports = {
    getRifles,
    getId,
    getName,
    getCountry
}