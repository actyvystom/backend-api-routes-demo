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
}
