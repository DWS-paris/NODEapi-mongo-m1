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
        content: String,
        dateCreated: {
            type: Date,
            default: new Date()
        }
    })
//

/* 
Exports
*/
    const MyModel = mongoose.model('comment', MySchema);
    module.exports = MyModel;
//