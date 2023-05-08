const express = require('express');
const app = express(); //initialize express to app
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());

const mongoUrl = "mongodb+srv://sanaabid:sana1234@cluster0.guiajle.mongodb.net/?retryWrites=true&w=majority";
mongoose
    .connect(mongoUrl,{
        useNewUrlParser: true,
    })
    .then(()=>{console.log("connected to database" );
    })
    .catch((e)=> console.log(e));

app.use(express.json());
app.listen(8000, ()=>{
    console.log("Server started");
})

app.post("/post", async(req, res)=>{
    console.log(req.body);
})

require("./userDetails");
const User = mongoose.model("UserInfo");

app.post("/register", async(req, res)=>{
    const {name, CNIC, Card} = req.body;
    try{
        await User.create({
            name,
            CNIC,
            Card,
        });
        res.send({status:"OK"});
      }catch (error){
        res.send({status:"Error"});
      }
});