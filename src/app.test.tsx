import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./app";

test("renders the example page", async () => {
  render(<App />);
  expect(await screen.findByText(/.*Vite.*/)).toBeVisible();
});
