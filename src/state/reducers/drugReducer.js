import {
  CREATE_PRESCRIPTION,
  UPDATE_PRESCRIPTION,
  DELETE_PRESCRIPTION,
  INPUT_CHANGE,
  GET_PRESCRIPTION
} from "../types/types";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
const initialState = {
  drugs: [],
  data: {},
  prescriptionForm: {
    drug: "",
    unit: "",
    start_date: "",
    end_date: ""
  }
};

const drugReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        prescriptionForm: {
          ...state.prescriptionForm,
          [action.payload.name]: action.payload.value
        }
      };
    case GET_PRESCRIPTION:
      console.log(`reducer`);
       return {
        ...state,
        drugs: action.payload
      };
    case CREATE_PRESCRIPTION:
      return{
        ...state,
        data: action.payload

      }
    default:
      return state;
  }
};

export default drugReducer;
