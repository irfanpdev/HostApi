const mongoose=require("mongoose");

const productSchemma=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name must be provided"],
        trim:true

    },
    price:{
        type:Number,
        required:[true,"Price must be provided"]
    },
    featured:{
     type:Boolean,
     default:true
    },
    rating:{
        type:Number,
        default:4.8
    },
    createdAt:{
        type:Date,
        default:Date.now()
      },
    company:{
        type:String,
        enum:{
        values:["apple","samsung","dell","mi" ],
        message:`{VALUE} is not supported`,
        },
        trim:true
    }
});

module.exports=mongoose.model("Product",productSchemma);