import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App Routing", () => {
  test("should render Counter App text in AppBar", () => {
    const screen = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Counter App")).toBeInTheDocument();
  });

  test('should render IncrementPage component at path "/"', () => {
    const screen = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Increment Count")).toBeInTheDocument();
  });

  test('should render DecrementPage component at path "/decrement"', () => {
    const screen = render(
      <MemoryRouter initialEntries={["/decrement"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Decrement Count")).toBeInTheDocument();
  });

  test('should render IncrementDecrementPage component at path "/both"', () => {
    const screen = render(
      <MemoryRouter initialEntries={["/both"]}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByText("Increment and Decrement Count")
    ).toBeInTheDocument();
  });
});
