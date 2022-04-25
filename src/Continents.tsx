import { useQuery } from "urql";
import { ContinentsDocument } from "./graphql/generated";

export function Continents() {
  const [result] = useQuery({ query: ContinentsDocument });
  if (result.fetching) {
    return <p>Loading continents...</p>;
  }

  return (
    <article>
      <header>
        <h4>Available on the following continents</h4>
      </header>
      <ul>
        {result.data?.continents.map((c) => (
          <li key={c.name}>{c.name}</li>
        ))}
      </ul>
    </article>
  );
}
