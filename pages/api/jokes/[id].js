import dbConnect from "../../../db/connect";
import Joke from "../../../db/models/Joke";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  if (request.method === "GET") {
    const joke = await Joke.findById(id);
    if (!joke) {
      // joke is not within our jokes array, so we set an error status of 404 (resource not found)
      // and return a message indicating that the joke was not available
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(joke);
  }
}
