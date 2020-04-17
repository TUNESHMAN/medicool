import React from "react";
import { render } from "@testing-library/react";
import Home from "../components/Home";

test("renders Medicool on Home component", async () => {
  const { getByText } = render(<Home />);
  const title = getByText(/Medicool/i);
  expect(title).toBeInTheDocument();
});
