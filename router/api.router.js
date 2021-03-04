/* 
Imports
*/
    // Node
    const express = require('express');

    // Inner
    const PostModel = require('../models/post.model')
//

/* 
Defintiion
*/
    class RouterClass{
        constructor(){
            this.router = express.Router();
        }

        routes(){
            // Define API route
            this.router.get('/', (req, res) => {
                // Rerturn JSON data
                return res.json( { msg: "Hello API" } )
            })

            // Define API route to get all data (post)
            this.router.get('/:endpoint', (req, res) => {
                // Get all data from MongoDB
                PostModel.find( (err, data) => {
                    return err
                    ? res.json( { url: req.originalUrl, data: null, err } )
                    : res.json( { url: req.originalUrl, data, err: null } )
                })
            })
        }

        init(){
            // Get route fonctions
            this.routes();

            // Sendback router
            return this.router;
        }
    }

//

/* 
Export
*/
    module.exports = RouterClass;
//