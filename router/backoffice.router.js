/* 
Imports
*/
    // Node
    const express = require('express');
//

/* 
Defintiion
*/
    class RouterClass{
        constructor(){
            this.router = express.Router();
        }

        routes(){
            // Define backoffice route
            this.router.get('/', (req, res) => {
                // Render index.ejs in html in the response
                return res.render('index', { msg: 'Hello From Node' })
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