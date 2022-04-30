//empoloyed.js
const mongoose =require("mongoose")
const validator =require("validator")

const empoloyedSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:20,
    
    },

    phone:{
        type:Number,
        required:true,
    },
    
    email:{
      unique:true,
      required:true,
      type:String,
      
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("enter valid email")
            }
        }
    },
    
    password:{
        unique:true,
        required:true,
        type:String,
        
        // validate(value){ //using own custome validate using validators
        //     if(!validator.isStrongPassword(value)){
        //         throw new Error ("enter valid email")
        //     }
        // }
    
    }

})


//make collections and exports the moduels
const empoloyeddata= new mongoose.model("empoloyed",empoloyedSchema);
module.exports= empoloyeddata;