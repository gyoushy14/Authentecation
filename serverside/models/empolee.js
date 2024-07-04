const mongoose =require("mongoose");
const schema  = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const empo__model = mongoose.model("empolyees" , schema);
module.exports = empo__model ;