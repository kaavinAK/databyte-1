
let mongoose=require("mongoose");
let Schema = mongoose.Schema

let Memberschema=new Schema({
    username:{
        type:String,
        required:true
    },
    dp:{
        type:String,
        
    },
    year:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

let Member = new mongoose.model('member',Memberschema);
module.exports={Member};