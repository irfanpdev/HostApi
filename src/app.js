require("dotenv").config();
const express=require("express");
const app=express();
const port=process.env.PORT || 8000;
const product_route=require("./routes/products");
const connectDB=require("./db/connect");

app.get("/",(req,res)=>{
    res.send("Hi, I am Live");
})

app.use("/api/products",product_route);

const start=async()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(port,()=>{
            console.log(`Live on port ${port}`);
        })
    }catch(err){
        console.log(err);
    }
}

start();