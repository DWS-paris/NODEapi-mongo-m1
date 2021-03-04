/* 
Imports
*/
    const Models = require('../models/index')
//

/* 
Functions
*/
    // CRUD: read all comments
    const readAll = () => {
        return new Promise( (resolve, reject) => {
            // Get all comment from MongoDB
            Models.comment.find( (err, data) => {
                // Check err
                return err
                ? reject(err)
                : resolve(data)
            })
        })
    }
//

/* 
Export
*/
    module.exports = {
        readAll
    }
//