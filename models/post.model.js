/* 
Imports
*/
    const mongoose = require('mongoose');  //=> https://www.npmjs.com/package/mongoose
    const { Schema } = mongoose;
//

/* 
Definition
*/
    const MySchema = new Schema({
        title: String,
        content: String,
        author: String,
        dateCreated: {
            type: Date,
            default: new Date()
        }
    })
//

/* 
Exports
*/
    const MyModel = mongoose.model('post', MySchema);
    module.exports = MyModel;
//