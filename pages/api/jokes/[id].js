// import our db connection function
import dbConnect from "../../../db/connect";
// import our mongoose model
import Joke from "../../../db/models/Joke";

// we need to declare our handler function as async as we are now using promises in our handler
export default async function handler(request, response) {
  // get the db connection (initialize it if not already available)
  await dbConnect();
  // get the id to query the db with
  const { id } = request.query;
  if (request.method === "GET") {
    const joke = await Joke.findById(id); // similar to mongosh's Joke.findOne({_id: ObjectId(id)})

    if (!joke) {
      // joke is not found in database, so we set an error status of 404 (resource not found)
      // and return a message indicating that the joke was not available
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(joke);
  }
}
