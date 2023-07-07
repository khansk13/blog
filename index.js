
const mongoose=require("mongoose");
const userRouter=require("./routes/user.routes");
const bodyparser=require("body-parser");
const express=require("express");
const app=express();

const dburl="mongodb+srv://khansk13:mypassword@cluster0.dkbcfkn.mongodb.net/blog?retryWrites=true&w=majority"
mongoose.connect(dburl)
.then((result)=>{
    console.log("DB connect");
})
.catch((err)=>{
    console.log(err);
})
port=3005;

app.use(bodyparser.json());
app.use(userRouter);


app.get('/',(req,res)=>{
    res.send("wellcome to the world")
})
app.listen(port,()=>{
    console.log("server listening");
})


