const express = require('express');
const app = express();
const multer = require("multer");
const path = require("path");
const mongoose=require("mongoose");
// storage engine
const dburl="mongodb+srv://khansk13:mypassword@cluster0.dkbcfkn.mongodb.net/blog?retryWrites=true&w=majority"
mongoose.connect(dburl)
.then((result)=>{
    console.log("DB connect");
})
.catch((err)=>{
    console.log(err);
})
port=4000;
 

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

 

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 100
    }
})
app.use('/profile', express.static('upload/images'));
app.post("/upload", upload.single('profile'), (req, res) => {

 

    res.json({
        success: 1,
        profile_url: `http://localhost:4000/profile/${req.file.filename}`
    })
})

 

function errHandler(err, req, res, next) {
    if (err instanceof multer.MulterError) {
        res.json({
            success: 0,
            message: err.message
        })
    }
}
app.use(errHandler);
app.listen(4000, () => {
    console.log("server up and running");
})