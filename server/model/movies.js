import mongoose from "mongoose";
const Schema =  mongoose.Schema



const movieSchema = new Schema({
   name: String,
   body: String,
   creator: String,
   images: String,
   createdAt: {
    type: Date,
    default: new Date(),
  },
})

const Movie = mongoose.model("movie", movieSchema,"movie")

const mySchema = { "Movie" : Movie}

export default mySchema