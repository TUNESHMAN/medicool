import {
  CREATE_PRESCRIPTION,
  INPUT_CHANGE,
  GET_PRESCRIPTION,
  GET_PRESCRIPTION_BY_ID,
} from "../types/types";

const initialState = {
  drugs: [],
  data: {},
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
      return {
        ...state,
        drugs: action.payload,
      };
    case CREATE_PRESCRIPTION:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default drugReducer;
