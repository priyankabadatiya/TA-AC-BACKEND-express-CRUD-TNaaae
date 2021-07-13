let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, lowercase: true, required: true},
    age: Number,
    address: String,
    bio: String,
    hobbies: [String]
}, {timestamps: true});

module.exports = mongoose.model("User", userSchema);