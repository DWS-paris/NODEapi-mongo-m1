/* 
Imports
*/
    const Models = require('../models/index')
//

/* 
Functions
*/
    // CRUD: read all posts
    const readAll = () => {
        return new Promise( (resolve, reject) => {
            // Get all post from MongoDB
            Models.post.find( (err, data) => {
                // Check err
                return err
                ? reject(err)
                : resolve(data)
            })
        })
    }

    // CRUD: read all posts
    const deleteOne = req => {
        return new Promise( (resolve, reject) => {
            // Get all post from MongoDB
            Models.post.deleteOne({ _id: req.params.id }, (err, data) => {
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
        readAll,
        deleteOne
    }
//