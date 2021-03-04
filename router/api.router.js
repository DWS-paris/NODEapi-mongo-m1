/* 
Imports
*/
    // Node
    const express = require('express');
const Controllers = require('../controller/index');

    // Inner
    const Crontrollers = require('../controller/index');
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
                // User the controller to get data
                Controllers[req.params.endpoint].readAll()
                .then( apiResponse => res.json( { data: apiResponse, err: null } ))
                .then( apiError => res.json( { data: null, err: apiError } ))
            })

            // Define API route to get all data (post)
            this.router.delete('/:endpoint/:id', (req, res) => {
                // User the controller to get data
                Controllers[req.params.endpoint].deleteOne(req)
                .then( apiResponse => res.json( { data: apiResponse, err: null } ))
                .then( apiError => res.json( { data: null, err: apiError } ))
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