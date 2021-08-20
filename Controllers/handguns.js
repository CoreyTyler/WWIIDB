const pool = require('../DB/connection')

const getHandguns = (req, res) => {
    pool.query('SELECT * FROM WW2Weapons.handguns', function(err, rows) {
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
    getHandguns,
    getId,
    getName,
    getCountry
}