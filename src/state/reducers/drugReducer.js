import {
  CREATE_PRESCRIPTION,
  INPUT_CHANGE,
  GET_PRESCRIPTION,
  GET_PRESCRIPTION_BY_ID,
  FETCH_PRESCRIPTION_START,
} from "../types/types";

const initialState = {
  isFetching: false,
  error: "",
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

    case FETCH_PRESCRIPTION_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_PRESCRIPTION:
      return {
        ...state,
        isFetching: false,
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
