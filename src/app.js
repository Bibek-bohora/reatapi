const mongoose =require("mongoose")
const express=require("express")
const app = express();
const port= process.env.PORT || 8000;
const path= require("path")
const hbs = require("hbs")


//db connection srequire
require("../db/conn")
//requires the module
const empoloyeddata= require("../models/empoloyed");
const async = require("hbs/lib/async");



const dybnamicpath = path.join(__dirname,"../server/components")
console.log(dybnamicpath )
const partialspath = path.join(__dirname,"../server/partials")
console.log(partialspath )

app.set('view engine',"hbs")
app.set("views",dybnamicpath)
hbs.registerPartials(partialspath)

//server routing
app.get("/",(req,res)=>{
   

    res.render("index.hbs")
})


//post the the data of empoloyeddata
app.use(express.json())
app.post("/empoloyed",async (req,res)=>{
try{
    const user = new empoloyeddata(req.body)
   const result =await user.save()
   res.status(201).send(result)
}catch(err){

 
    res.status(400).send(err)
}


})

app.get("/empoloyed",async (req,res)=>{

    try{

         const result =await empoloyeddata.find();
         res.send(result)
    }catch(err){

        res.send(result)
    }
})


app.get("/empoloyed/:id", async (req,res)=>{
 

try{
  const _id=req.params.id;
    const result = await empoloyeddata.findById(_id)
    res.send(result)
    console.log(_id)
}catch(err){

    res.send(err)
}


})


//delete remove by id


app.delete("/empoloyed/:id", async (req,res)=>{

    try{

        const _id =req.params.id;
        const result= await empoloyeddata.findByIdAndDelete(_id)

       if(!_id){

        return res.status(400).send()
       }

        res.send(result)
    }catch(err){

        res.send(err)
    }

})


app.delete("/empoloyed" ,async (req,res)=>{

    try{

        const result = await empoloyeddata.deleteMany({})
        res.send(result)

    }catch(err){

        res.status(400).send(err)
    }
})


//update the data by patch 


app.patch("/empoloyed/:id" ,async (req,res)=>{

    try{
        const _id=req.params.id;
        console.log(_id)
        const result= await empoloyeddata.findByIdAndUpdate(_id, req.body,{
            new:true
        });
        res.send(result)

        // const result= await empoloyeddata.updateOne({name:"ashim"},{$set:{name:"bibek",phone:"9843111113"}})
        // res.send(result)
    }catch(err){

        res.send(err)
    }
})

app.listen(port,(e)=>{
    console.log(`this server running through ${port}`)
})