import { render, fireEvent } from "@testing-library/react";
import IncrementPage from "./IncrementPage";

test("should increment count by one when button is clicked", () => {
  const screen = render(<IncrementPage />);

  const incrementButton = screen.getByRole("button");
  fireEvent.click(incrementButton);

  expect(screen.getByText("1")).toBeInTheDocument();
});
