import { createClient } from "urql";

export const urqlClient = createClient({
  url: import.meta.env.VITE_GRAPHQL_ENDPOINT,
});
