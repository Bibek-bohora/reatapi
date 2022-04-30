//database connections

const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/restapidb",{


}).then(()=>{
console.log("db coneections suceess")
}).catch((err)=>{
    console.log("connections db errors")
})