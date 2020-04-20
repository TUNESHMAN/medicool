// import React from "react";
// import { render } from "@testing-library/react";
// import Prescription from "./Prescription";
// import { Provider } from "react-redux";
// import store from "../state/store";
// import {BrowserRouter as Router} from "react-router-dom"


// test("Prescription page renders correctly", () => {
//   const mockGetPrescription = jest.fn();
//   const { getByText } = render(
//       <Router><Provider store={store}>
//       <Prescription getPrescription={mockGetPrescription} />
//     </Provider></Router>
    
//   );
//   getByText(/Add Prescription/i);
//   //   Can be rewritten as
//   //   expect(getByText(/Add Prescription/i)).toBeInTheDocument();
// });

// test("Prescription card re-renders with new prescriptions data", () => {
//   const { queryAllByTestId } = render(
//       <Router><Provider store={store}>
//       <Prescription prescription-card={[]} />
//     </Provider></Router>
    
//   );
//   //   assert that there are no prescriptions listed when the component first renders
//   // queryBy, something that returns more than one array if more than one match("All" query)
//   expect(queryAllByTestId(/prescription-card/i)).toStrictEqual([]);
//   //   Another way to test this is below
//   expect(queryAllByTestId(/prescription-card/i)).toHaveLength(0);
// //   rerender(<Prescription/>)
// });
