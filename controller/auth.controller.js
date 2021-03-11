/* 
Imports
*/
    const Models = require('../models/index')
//

/* 
Functions
*/
    // CRUD: create one
    const register = req => {
        return new Promise( (resolve, reject) => {
            // [RGPD] crypt user data
            Models.user.create(req.body)
            .then( data => resolve(data) )
            .catch( err => reject(err) )
        })
    }

    const login = req => {
        return new Promise( (resolve, reject) => {
            // Get all post from MongoDB
            Models.user.findOne( { email: req.body.email, passsword: req.body.password } )
            .then( data => resolve(data) )
            .catch( err => reject(err) )
        })
    }
//

/* 
Export
*/
    module.exports = {
        register,
        login
    }
//