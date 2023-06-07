// import the mongoose package
import mongoose from "mongoose";
// deconstruct the Schema class from mongoose
const { Schema } = mongoose;
// create a new Schema instance as document structure for our model
const jokeSchema = new Schema({
  joke: {
    type: String,
    required: true,
  },
});
// check if model is already compiled (or) create it if undefined
const Joke = mongoose.models.Joke || mongoose.model("Joke", jokeSchema);
// export the Joke model
export default Joke;
