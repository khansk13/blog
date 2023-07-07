const models=require("../model/user.model");
const express=require("express");
const app = express()
const multer=require("multer");
const bodyparser=require("body-parser");

const router=express.Router;

const store=  multer.memoryStorage();
const upload=multer({storage:store});
app.post('/upload', upload.single('image'), async (req, res) => {
    try {
      const image = new Image();
      image.data = req.file.buffer;
      image.contentType = req.file.mimetype;
      image.title = req.body.title;
      image.des = req.body.des;
      await image.save();
  
      console.log('Image saved to MongoDB');
      console.log('title:', image.title);
      console.log('des:', image.des);
  
      res.status(200).json({ message: 'Image uploaded successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  module.exports=router;
