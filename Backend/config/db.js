
const mongoose = require("mongoose")
require('dotenv').config()

mongoose.set('strictQuery',true)
const connecton = mongoose.connect("mongodb+srv://avinashkumar70008:avinash1@cluster0.n3c11qb.mongodb.net/ascend")




const LoginSchma = mongoose.Schema({

email:{type:String,required:true},
password:{type:String,required:true}

})

const RegisterSchma = mongoose.Schema({

    email:{type:String,required:true},
    password:{type:String,required:true}
    
    })




const Ascendmodel = mongoose.model("ascendlogindata",LoginSchma)
const AscendmodelR = mongoose.model("ascendlogindataR",RegisterSchma )




const todoSchma = mongoose.Schema({
    listNo:{type:String},
    awards: [{
        award: String,
        year: Number,
        
      }],
    id:{type:Number}
})


const todomodel =mongoose.model("todoinfo",todoSchma)




module.exports = {
    connecton,
    Ascendmodel,
    AscendmodelR,
    todomodel
}