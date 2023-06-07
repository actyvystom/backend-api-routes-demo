import dbConnect from "../../../db/connect";
import Joke from "../../../db/models/Joke";
// each api route can have exactly one handler function (explicitly named handler)
export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const jokes = await Joke.find();
    response.status(200).json(jokes);
  }
}
