const { Model } = require('mongoose')

/* 
Definition
*/
    const Models = {
        post: require('./post.model'),
        comment: require('./comment.model'),
    }
//

/* 
Export
*/
    module.exports = Models;
//