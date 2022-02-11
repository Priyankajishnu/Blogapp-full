const express = require('express');
const ArticleInfo = require('./src/model/BlogDB');
const cors = require('cors');
const mongoose = require('mongoose');
const {userModel} = require('./src/model/LoginModel');
const { articleModelObj } = require('./src/model/ArticleModel');

const PORT = process.env.PORT || 5000

const app = express();
app.use(cors());

// post method
app.use(express.urlencoded({extended:true}));
app.use(express.json());



// CORS Policy
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET','POST','PUT','DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
});

// !for mongodb atlas
 mongoose.connect("mongodb+srv://priyanka:priyanka@cluster0.rutr8.mongodb.net/Blog-app-Assignment?retryWrites=true&w=majority");
 

//Basic Routing
app.get('/api/article/:name' ,(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    try{
        const articleName = req.params.name;
        ArticleInfo.findOne({name:articleName}).then(function(article){
            res.status(200).json(article);
        })
    }
    catch(error){
        res.status(500).json({message:"Error",error});
    }
})
// //backend routing for viewall
// app.get('/api/article-list',(req,res)=>{
//     ArticleInfo.find(req.body).then(function(article){
//         res.json(article);
//     })
// });

//Backend Routing for upvotes
app.post('/api/article/:name/upvotes',(req,res)=>{
    const articleName = req.params.name;
    const filter = {name:articleName};
    const update = {$inc: {upvotes:1}};
    ArticleInfo.findOneAndUpdate(filter,update,{new:true}).then(function(articles){
        res.json(articles);
    })
})

// Backend Routing for comments
app.post('/api/article/:name/comments',(req,res)=>{
    const articleName = req.params.name;
    const { username , text } = req.body;
    const filter = {name:articleName};
     const update = { $push:{comments:{username,text}}};
    ArticleInfo.findOneAndUpdate(filter,update,{new:true}).then(function(article){
        res.json(article);
    })
})

//api for signup
app.post('/api/signup', async (req, res) => {
    try {
        console.log(req.body);
        let mydata = new userModel(req.body);
        let data = await mydata.save();
        res.send("Successfully Added Data");
    }
    catch (err) {
        console.log(err);
    }
});

//view api
app.get('/api/view', async (req, res) => {
    try {
        let result = await articleModelObj.find();
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
});


// api for login
app.post("/api/login",async(req,res)=>{
    try{
        var userEmail = req.body.email
        var userPass = req.body.password
        let result = await userModel.find({$and:[{email:userEmail},{password:userPass}]})
        
        if(result.length>0)
        {
           res.json({status:"success",data:result}) 
        }
        else{
            res.json({status:"authentication failed"})
        }
    } 
    catch(error)
    {
        console.log(error);
    }
})

// api for update

app.post('/api/add', async (req, res) => {
    try {
        console.log(req.body);
        let mydata = new articleModelObj(req.body);
        let data = await mydata.save();
        console.log("Successfully Added Data");
        res.json(data)
    }
    catch (err) {
        console.log(err);
    }
});
// api for delete

app.post('/api/article/del',async(req,res)=>{
    try{
        let output=await articleModelObj.deleteOne ({name:req.body.title});
        res.json("Deleted" +req.body.title);
        console.log("Article "+ req.body.title +" is deleted");
    }
    catch(error){
        console.log(error);
    }
})


// api for add article

app.post('/api/add', async (req, res) => {
    try {
        console.log(req.body);
        let mydata = new AddarticleInfo(req.body);
        let data = await mydata.save();
        console.log("Successfully Added Data");
        res.send("Successfully Added Data");
    }
    catch (err) {
        console.log(err);
    }
});

// ... other imports 
const path = require("path")

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Port Number
app.listen(3001,()=>{
    console.log("My app is listening to port number 3001");
})