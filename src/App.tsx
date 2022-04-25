import { useState } from "react";
import logo from "./logo.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <header className="flex min-h-screen flex-col items-center justify-center bg-slate-800 text-base text-white">
        <img
          src={logo}
          className="pointer-events-none h-40 animate-pulse"
          alt="logo"
        />
        <p className="mb-4 text-2xl">Hello Vite + React!</p>
        <p className="mb-4">
          <button
            className="inline-block rounded border-2 border-solid border-slate-100 p-2 hover:border-slate-400"
            type="button"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p className="mb-4">
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="font-bold underline hover:opacity-75"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="text-cyan-400 hover:opacity-75"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
