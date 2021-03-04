/* 
Imports
*/
    // Node
    require('dotenv').config(); //=> https://www.npmjs.com/package/dotenv
    const express = require('express'); //=> https://www.npmjs.com/package/express

    // Inner
    const MongoClass = require('./services/mongo.class')
//


/* 
Server definition
*/
    class ServerClass{
        // Inject properties in the ServerClass
        constructor(){
            this.server = express();
            this.port = process.env.PORT;
            this.mongDb = new MongoClass();
        }

        init(){
            

            // Start config
            this.launch();
        }

        launch(){
            // Connect MongoDB
            this.mongDb.connectDb()
            .then( db => {
                // Start server
                this.server.listen( this.port, () => {
                    console.log({
                        node: `http://localhost:${this.port}`,
                        db: db.url,
                    })
                })
            })
            .catch( dbError => {
                console.log(dbError)
            })
        }
    }
//


/* 
Start server
*/
    const MyServer = new ServerClass();
    MyServer.init();
//