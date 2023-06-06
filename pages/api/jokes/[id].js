// Import our jokes data from our local data.js file (workaround as we do not know how to connect a db yet)
import { jokes } from "../../../lib/data.js";

export default function handler(request, response) {
  // being a dynamic route, we can deconstruct the id from our query object
  const { id } = request.query;
  // we use this id to find the joke we want to return in this route
  const joke = jokes.find((joke) => joke.id === id);
  if (!joke) {
    // joke is not within our jokes array, so we set an error status of 404 (resource not found)
    // and return a message indicating that the joke was not available
    return response.status(404).json({ status: "Not Found" });
  }
  // if we have a joke object, we set our response with a OK http status code and return it as json
  response.status(200).json(joke);
}
