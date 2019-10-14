import mongoose from 'mongoose'
const Schema = mongoose.Schema
const addProfile =new Schema(
    { name : {type:String,required:true},
      age:String,
      mobile:{type:Number,required:true},
      company:String,
}
); 
export const User = mongoose.model('user',addProfile) 
//comment
