import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the example page", async () => {
  render(<App />);
  expect(await screen.findByText(/.*Vite.*/)).toBeVisible();
});
