import express from "express";
import mongoose from "mongoose";
import Movie from "./model/movie.model.js";

const app = express();
const port = 3000;

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/EY")
  .then(() => {console.log("Database  Connected Successfully");})
  .catch((err)=>{
    console.error(err);
  });

  app.post("/addMovie", async(req,res) => {
    try{
      const movie = new Movie(req.body);
      console.log(req.body);
      await movie.save();
      res.send("Movie Saved Successfully");
    }catch(err){
      console.log(err);
    }
  })

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.post("/addmoviedata", async (req, res) => {
//   try {
//     const newdata = new movieModel(req.body);
//     await newdata.save();
//     console.log(req.body);
//     res.send("Data Saved Successfully");
//   } catch (error) {
//     console.log("Data not saved", error);
//   }
// });