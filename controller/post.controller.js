/* 
Imports
*/
    const Models = require('../models/index')
//

/* 
Functions
*/
    // CRUD: create one

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

    // CRUD: read one
    const readOne = req => {
        return new Promise( (resolve, reject) => {
            // Get all post from MongoDB
            Models.post.findById(req.params.id, (err, data) => {
                // Check err
                return err
                ? reject(err)
                : resolve(data)
            })
        })
    }


    // CRUD: update one

    // CRUD: delete one
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
        readOne,
        deleteOne
    }
//