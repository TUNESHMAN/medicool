import {
  CREATE_PRESCRIPTION,
  UPDATE_PRESCRIPTION,
  DELETE_PRESCRIPTION,
  INPUT_CHANGE,
  GET_PRESCRIPTION,
  ADD_FORMULA,
  GET_PRESCRIPTION_BY_ID,
} from "../types/types";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
const initialState = {
  drugs: [],
  data: {},
  prescriptionForm: {
    drug: "",
    unit: "",
    start_date: "",
    end_date: "",
  },
};

const drugReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRESCRIPTION_BY_ID:
      return action.payload;

    case INPUT_CHANGE:
      return {
        ...state,
        prescriptionForm: {
          ...state.prescriptionForm,
          [action.payload.name]: action.payload.value,
        },
      };
    case GET_PRESCRIPTION:
      console.log(`reducer`);
      return {
        ...state,
        drugs: action.payload,
      };
    case CREATE_PRESCRIPTION:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_FORMULA:
      return {
        ...state,
        formula: [action.payload, ...state.formula],
      };
    default:
      return state;
  }
};

export default drugReducer;
