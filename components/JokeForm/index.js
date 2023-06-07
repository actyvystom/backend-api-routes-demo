import useSWR from "swr";

export default function JokeForm() {
  const { mutate } = useSWR("/api/jokes");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // Alternative:
    // const formElements = event.target.elements;
    // const data = {
    //     joke: formElements.joke.value
    // };
    // We use fetch (as we are not allowed to use useSWR inside a simple function)
    const response = await fetch("/api/jokes", {
      // set our request method to POST
      method: "POST",
      // and set a Content-Type which fits our JSON data
      headers: {
        "Content-Type": "application/json",
      },
      // fill our request body with stringified JSON data
      body: JSON.stringify(data),
    });
    if (response.ok) {
      mutate();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="joke-input">Enter a new joke</label>
      <input name="joke" type="text" id="joke-input" />
      <button type="submit">Submit</button>
    </form>
  );
}
