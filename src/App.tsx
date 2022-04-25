import { useState } from "react";
import logo from "./logo.svg";
import css from "./App.module.css";
import { Provider } from "urql";
import { urqlClient } from "./graphql/urqlClient";
import { Continents } from "./Continents";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider value={urqlClient}>
      <div className={css["App"]}>
        <header className={css["App-header"]}>
          <img src={logo} className={css["App-logo"]} alt="logo" />
          <p>Hello Vite + React + GraphQL!</p>
          <p>
            <button
              type="button"
              onClick={() => setCount((count) => count + 1)}
            >
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className={css["App-link"]}
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {" | "}
            <a
              className={css["App-link"]}
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
          <Continents />
        </header>
      </div>
    </Provider>
  );
}

export default App;
