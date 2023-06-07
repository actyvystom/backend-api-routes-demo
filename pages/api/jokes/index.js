// import our db connection function
import dbConnect from "../../../db/connect";
// import our mongoose model
import Joke from "../../../db/models/Joke";
// we need to declare our handler function as async as we are now using promises in our handler
export default async function handler(request, response) {
  // get the db connection (initialize it if not already available)
  await dbConnect();
  // check for the request method (we will use further request methods in the upcoming sessions)
  if (request.method === "GET") {
    // get all jokes from our database via find-method on our model
    const jokes = await Joke.find();
    response.status(200).json(jokes);
  }
  // we check for the request method POST
  if (request.method === "POST") {
    try {
      // get our joke data from the request body (comes through our form component)
      const jokeData = request.body;
      // We create a new document via our mongoose Model
      const joke = new Joke(jokeData);
      // We "save" document to our database
      await joke.save();
      // we send our response with a status code 201 indicating "resource created"
      response.status(201).json({ message: "Joke created" });
    } catch (error) {
      // if an error occurs we log it to the console
      console.log(error);
      // and return an error status
      response.status(400).json({ error: error.message });
    }
  }
}
