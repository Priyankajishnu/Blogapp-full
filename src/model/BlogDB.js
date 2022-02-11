const mongoose = require('mongoose');

// !mongod in our system
// mongoose.connect("mongodb://localhost:27017/Blog-app-Assignment");


const Schema = mongoose.Schema;

var articleSchema = new Schema({
    name:String,
    usernamename:String,
    upvotes:Number, 
    comments:Array  
});

var ArticleInfo = mongoose.model('articles',articleSchema);

module.exports = ArticleInfo;
