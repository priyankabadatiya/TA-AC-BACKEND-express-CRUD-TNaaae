let mongoose = require('mongoose')
let schema = mongoose.schema;

let userSchema = new Schema({
name:{type:'string', required:true},
age:Number,
name:{type:'string', lowerCase:true},
bio:'string'
},
 {timestamps:true});

module.exports = mongoose.model("User", userSchema)