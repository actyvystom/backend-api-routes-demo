import useSWR from "swr";
import Link from "next/link";

export default function JokeList() {
  // we use our internal api route to get all jokes for our jokes list
  const { data, isLoading } = useSWR("/api/jokes");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ul>
      {data.map((joke) => (
        // change the id keys as we are using mongo db ids now
        <li key={joke._id}>
          <Link href={`/${joke._id}`}>{joke.joke}</Link>
        </li>
      ))}
    </ul>
  );
}
