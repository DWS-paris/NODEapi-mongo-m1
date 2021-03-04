/* 
Imports
*/
    // Node
    require('dotenv').config(); //=> https://www.npmjs.com/package/dotenv
    const express = require('express'); //=> https://www.npmjs.com/package/express
    const path = require('path'); //=> https://www.npmjs.com/package/path
    const bodyParser = require('body-parser'); //=> https://www.npmjs.com/package/body-parser

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

            //=> Body-parser
            this.server.use(bodyParser.json({limit: '20mb'}));
            this.server.use(bodyParser.urlencoded({ extended: true }));

            // Start config
            this.config();
        }

        config(){
            // Set up API router
            const ApiRouterClass = require('./router/api.router');
            const apiRouter = new ApiRouterClass();
            this.server.use('/api', apiRouter.init());

            // Set up Backoffice router
            const BackRouterClass = require('./router/backoffice.router');
            const backRouter = new BackRouterClass();
            this.server.use('/', backRouter.init());

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