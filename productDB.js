
require("dotenv").config();
const connectDB=require("./src/db/connect");
const Product=require("./src/models/product");

const productJson=require("./product.json");


const start=async()=>{

    try{


        await connectDB(process.env.MONGODB_URL);
        //await Product.deleteMany();
        await Product.create(productJson);
        console.log("successully created");
    }catch(error){
        console.log(error);
   }

}
start();