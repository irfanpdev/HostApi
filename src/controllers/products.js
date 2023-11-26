const express=require("express");
const Product=require("../models/product");
const getAllProducts=async(req,res)=>{
    
    const {company,name,featured,sort,select}=req.query;
    const queryObject={};
    if(company){
        queryObject.company=company;
    }
    if(name){
        queryObject.name={$regex:name,$options:"i"};
    }
    if(featured){
        queryObject.featured=featured;
    }      
    let apiData=Product.find(queryObject);
    if(sort)
    {
        let sortData=sort.split(",").join(" ")  //for replacing , to blank space
        apiData=apiData.sort(sortData);
    }
    if(select)
    {
        let selectData=select.split(",").join(" ")
        apiData=apiData.select(selectData);
    }
    
    let page= Number(req.query.page) ||1 ;
    let limit= Number(req.query.limit)||10;
    let skip= (page-1)* limit ;
    apiData=apiData.skip(skip).limit(limit);
    //console.log(apiData);

    const Products= await apiData;
    console.log(Products);
   // const getAllData= await Product.find({name:"iphone"});
    res.status(200).json({Products,nbHits:Products.length});
};

const getAllProductsTesting=async(req,res)=>{
    res.status(200).json({msg:"I am getAllProductsTesting"});
};

module.exports={getAllProducts,getAllProductsTesting};