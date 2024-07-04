const express = require("express");
const mongoose = require("mongoose");
const empo__model =require("./models/empolee")
const cors =  require('cors');
const app =express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://elgyuoshy:HZkJkpK2Mf8GD3O8@ghdb.f0lwjv5.mongodb.net/empolyee");

app.post("/login" , (req , res)=>{
    const {email , password} = req.body;
    empo__model.findOne({email : email})
    .then(user => {
    if(user){
        if (user.password===password){
            res.json("Success")
        }else{
                res.json( "Wrong Password ")
        }

    }else{
        res.json("Nothing existed")
    }

    })
}); 

app.post("/regester" , (req , res)=>{
    empo__model.create(req.body)
.then(empolyeeparam => res.json(empolyeeparam))
.catch(err => res.json(err));
}); 
app.listen(3001 , ()=>{
    console.log("Server Runing");
})
