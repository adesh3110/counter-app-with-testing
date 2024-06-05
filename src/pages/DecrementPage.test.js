import { render, screen, fireEvent } from "@testing-library/react";
import DecrementPage from "./DecrementPage";

test("should decrement count by one when button is clicked", () => {
  const screen = render(<DecrementPage />);
  const decrementButton = screen.getByRole("button");
  fireEvent.click(decrementButton);
  expect(screen.getByText("20")).toBeInTheDocument();
});
