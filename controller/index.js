const { Model } = require('mongoose')

/* 
Definition
*/
    const Controllers = {
        post: require('./post.controller'),
        comment: require('./comment.controller'),
    }
//

/* 
Export
*/
    module.exports = Controllers;
//