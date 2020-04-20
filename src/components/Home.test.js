import React from "react";
import * as rtl from "@testing-library/react";
import Home from "../components/Home";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";

// react testing library requires a cleanup after each test

afterEach(rtl.cleanup);


let wrapper;
beforeEach(() => {
  // we want the wrapper recreated at every test
  wrapper = rtl.render(
    <Router>
      <Home />
    </Router>
  );
});
// test("renders Medicool on Greeting component", async () => {
//   // Arrange
//   const { findAllByText } = render(
//     <Router>
//       <Home />
//     </Router>
//   );
//   // Act
//   const title = findAllByText(/Medicool/i);
//   // Assert
//   expect(title).toBeVisible();
// });
it("renders without crashing", () => {
//   wrapper.debug();
  expect(wrapper.container).toMatch()
});
