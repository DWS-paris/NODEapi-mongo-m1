/* 
Imports
*/
    // Node
    require('dotenv').config(); //=> https://www.npmjs.com/package/dotenv
    const express = require('express'); //=> https://www.npmjs.com/package/express

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
            // Create new post
            PostModel.create({
                title: "Mon titre",
                content: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit"
            })
            .then( newPost => console.log('PostModel.create', newPost))
            .catch( error => console.log(error)) 

            // Get all data
            PostModel.find( (err, posts) => {
                // Check error
                err
                ? console.log(err)
                : console.log('PostModel.find', posts.length);
            })

            // Get data by _id
            PostModel.findById('6040bcfb3fdc07150bd9c76b', (err, post) => {
                // Check error
                err
                ? console.log(err)
                : console.log('PostModel.findById', post);
            })

            // Delete one data
            PostModel.deleteOne( { _id: '6040bcfb3fdc07150bd9c76b' }, (err, deleted) => {
                // Check error
                err
                ? console.log(err)
                : console.log('PostModel.deleteOne', deleted);
            })

            // Update one
            PostModel.findByIdAndUpdate( '6040bd13b87fe11520bd6a7a', {
                title: "My title",
                content: "foo"
            }, (err, updated) => {
                // Check error
                err
                ? console.log(err)
                : console.log('PostModel.findByIdAndUpdate', updated);
            })
            

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