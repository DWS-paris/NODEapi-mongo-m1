/* 
Imports
*/
    // Node
    const express = require('express');
    const Controllers = require('../controller/index');
//

/* 
Defintiion
*/
    class RouterClass{
        constructor(){
            this.router = express.Router();
        }

        routes(){
            // Define API route to register user
            this.router.post('/register', (req, res) => {
                // TODO: check body data
                Controllers.auth.register(req)
                .then( apiResponse => res.json( { data: apiResponse, err: null } ))
                .catch( apiError => res.json( { data: null, err: apiError } ))
            })

            // Define API route to log user
            this.router.post('/login', (req, res) => {
                // TODO: check body data
                Controllers.auth.login(req, res)
                .then( apiResponse => res.json( { data: apiResponse, err: null } ))
                .catch( apiError => res.json( { data: null, err: apiError } ))
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