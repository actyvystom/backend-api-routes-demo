// Import our jokes data from our local data.js file (workaround as we do not know how to connect a db yet)
import { jokes } from "../../../lib/data.js";
// each api route can have exactly one handler function (explicitly named handler)
export default function handler(request, response) {
  // set the http status code to 200 and deliver our data directly as JSON
  response.status(200).json(jokes);
}
