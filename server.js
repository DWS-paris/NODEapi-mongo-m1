/* 
Imports
*/
    // Node
    require('dotenv').config(); //=> https://www.npmjs.com/package/dotenv
    const express = require('express'); //=> https://www.npmjs.com/package/express
    const path = require('path'); //=> https://www.npmjs.com/package/path

    // Inner
    const MongoClass = require('./services/mongo.class')
    const PostModel = require('./models/post.model');
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
            // Static path configuration
            this.server.set( 'views', __dirname + '/www' );
            this.server.use( express.static(path.join(__dirname, 'www')) );

            // Set server view engine
            this.server.set( 'view engine', 'ejs' );

            // Start config
            this.config();
        }

        config(){
            // Define API route
            this.server.get('/api', (req, res) => {
                // Rerturn JSON data
                return res.json( { msg: "Hello API" } )
            })

            // Define backoffice route
            this.server.get('/', (req, res) => {
                // Render index.ejs in html in the response
                return res.render('index', { msg: 'Hello From Node' })
            })

            
            // Start server
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