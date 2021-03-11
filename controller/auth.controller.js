/* 
Imports
*/
    const bcrypt = require('bcryptjs');
    const Models = require('../models/index');
    const { cryptData, decryptData } = require('../services/crypto.service');
//

/* 
Functions
*/
    // CRUD: create one
    const register = req => {
        return new Promise( (resolve, reject) => {
            // [RGPD] crypt user data
            req.body.firstname = cryptData(req.body.firstname);
            req.body.lastname = cryptData(req.body.lastname);

            // [Bcrypt] password
            bcrypt.hash( req.body.password, 10 )
            .then( hashedPassword => {
                // Change user password
                req.body.password = hashedPassword;

                // Register new user
                Models.user.create(req.body)
                .then( data => resolve(data) )
                .catch( err => reject(err) )
            })
            .catch( bcryptError => reject(bcryptError))
        })
    }

    const login = req => {
        return new Promise( (resolve, reject) => {
            // Get all post from MongoDB
            Models.user.findOne( { email: req.body.email, password: req.body.password } )
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