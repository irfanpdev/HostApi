const mongoose =require("mongoose");

const connectDB=(uri)=>{

    try{
        mongoose.connect(uri);
        console.log("conntion successful");
    }catch(err){
        console.log("No Connection");
    }
}

module.exports=connectDB;