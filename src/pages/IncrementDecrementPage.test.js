import { render, fireEvent } from "@testing-library/react";
import React from "react";
import IncrementDecrementPage from "./IncrementDecrementPage";

test("Increment and decrement count correctly", () => {
  const screen = render(<IncrementDecrementPage />);

  expect(screen.getByText("0")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /increment/i }));
  expect(screen.getByText("1")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /decrement/i }));
  expect(screen.getByText("0")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /decrement/i }));
  expect(screen.getByText("-1")).toBeInTheDocument();

  expect(screen.getByText("-1")).toHaveStyle("color: red");

  fireEvent.click(screen.getByRole("button", { name: /increment/i }));
  fireEvent.click(screen.getByRole("button", { name: /increment/i }));
  expect(screen.getByText("1")).toHaveStyle("color: black");
});
