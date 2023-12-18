const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sushanslondhe1357:plmqaz%40123@cluster0.scyh4zm.mongodb.net/user_app")

const app = express();
app.use(express.json());

const User = mongoose.model('Users',{
    name :String,
    email: String,
    password: String
});

app.post("/signup",async function (req,res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const userExist = await User.findOne({email : email});

    if (userExist) {
        return res.status(400).send("username already exists")
    }


    const user = new User({
        name : name,
        email : email,
        password: password
    });

    user.save();
    res.json({
        "msg":"User created successfully"
})

    
})

app.listen(3000)

