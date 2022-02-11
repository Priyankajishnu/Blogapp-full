const mongoose = require('mongoose');
let mongooseSchema=mongoose.Schema;
const articleSchema=new mongooseSchema(
    {
    name:String,
    title:String,
    description:String
}
);
var articleModelObj=mongoose.model("addarticles",articleSchema);
module.exports={articleModelObj};