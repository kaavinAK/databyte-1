//jshint esversion:6


const express=require("express")
const bodyParser = require("body-parser");
const ejs = require("ejs");
const bcrypt=require("bcryptjs");
const fileUpload=require("express-fileupload")
const cookieparser=require("cookie-parser");
const _ = require('lodash');
const path = require("path");
const port = process.env.PORT || 3000;
require("./db/conn");
const Blogs = require("./models/blog");
const {Member}=require("./models/member");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(fileUpload());
app.use(cookieparser());
var posts = [];

app.get("/", function(req,res){
  res.render("about");
});

app.get("/blog", function(req,res){
  res.render("blog");
});

app.get("/members", async(req,res)=>{
  let members=await  Member.find({}).exec();
 
 return  res.render("members",{members});
});
app.get("/memberlogin",async(req,res)=>
{
 
  res.render("login")
})
app.post("/memberlogin",async(req,res)=>
{
  let {username,password}=req.body;
  let userexist=await Member.findOne({username,password})
  if(userexist)
  {
    let salt=bcrypt.genSaltSync(10);
    let hash=bcrypt.hashSync(username,salt);
    res.cookie('token',hash);
    return res.redirect('/memberinfo/'+username);
  }
  else
  {
    res.cookie('token','yes');
    return res.redirect('/');
  }

  
})
app.get("/memberinfo/:username",async(req,res)=>
{
  let {username}=req.params;
 
  let token=req.cookies['token'];
   let result=bcrypt.compareSync(username,token);
   if(result)
   {
    return res.render('memberinfo',{username});
   }
   else
   {
      return res.redirect('/');
   }
  
})
app.post("/memberinfo/:username",async(req,res)=>
{
 let {description,year}=req.body;
 if(!req.cookies['token'])
 {
   return res.redirect('/');
 }
 
//req.files.file.name=username;
let {username}=req.params;
 
  let token=req.cookies['token'];
   let result=bcrypt.compareSync(username,token);
   if(result)
   {
    let user=await Member.findOneAndUpdate({username},{year,description});
    if(!user)
    {
      return res.redirect('/');
    }
 
 req.files.file.mv(path.join(__dirname,'/public/static/'+username+'.png'),(err)=>
 {
   if(err)
   {

     return res.json({status:"failed"});
   }
   else
   {
     return res.redirect('/memberinfo/'+username)
   }
 })
   }
   else
   {
     return res.redirect('/');
   }

  
})
app.get("/compose", function(req,res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  
});

app.get("/posts/:postTitle", function(req, res){
  
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});