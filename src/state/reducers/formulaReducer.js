import { ADD_FORMULA, GET_FORMULA } from "../types/types";

const initialFormula = {
  message: "",
  formula: {},
};

const formulaReducer = (state = initialFormula, action) => {
  switch (action.type) {
    case ADD_FORMULA:
      return { ...state, formula: action.payload };

    case GET_FORMULA:
      return { ...state, formula: action.payload };

    default:
      return state;
  }
};

export default formulaReducer;
