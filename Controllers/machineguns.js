const pool = require('../DB/connection')

const getMachineguns = (req, res) => {
    pool.query('SELECT * FROM WW2Weapons.`machine-guns`', function(err, rows) {
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
    getMachineguns,
    getId,
    getName,
    getCountry
}