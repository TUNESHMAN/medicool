import React from "react";
import * as rtl from "@testing-library/react";
import Home from "../components/Home";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

let wrapper;
let MediCool = () => {
  wrapper.queryByText("MediCool");
};
beforeEach(() => {
  // we want the wrapper recreated at every test
  wrapper = rtl.render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
});
// react testing library requires a cleanup after each test

afterEach(rtl.cleanup);

describe("Home component", () => {
  it("renders without crashing", () => {
    // expect to match snapshot
    expect(wrapper.container).toMatchSnapshot();
  });

  it("renders MediCool on Home component", () => {
    expect(MediCool()).toBeInTheDocument();
    expect(MediCool()).toBeVisible();
  });
});
