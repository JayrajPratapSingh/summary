const express = require("express");
const app = express();
const mongoose = require("mongoose");
const USER = require("./model/model.js")
const cors = require("cors");
const { urlencoded } = require("express");
app.use(cors())
const Port = process.env.PORT || 8000
mongoose.connect("mongodb+srv://jayrajtodo:jai12345@cluster0.pvfaed6.mongodb.net/?retryWrites=true&w=majority/user", {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log("database connected sucessfully")
}).catch((err)=>{
    console.log(err);
})


app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use("view engine", "ejs")
app.use(require("./routes/index"))


app.listen(Port, ()=>{
    console.log(`server is runing at port number ${Port}`)
})