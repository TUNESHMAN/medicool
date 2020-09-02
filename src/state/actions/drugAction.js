import {
  CREATE_PRESCRIPTION,
  DELETE_PRESCRIPTION,
  INPUT_CHANGE,
  GET_PRESCRIPTION,
  GET_PRESCRIPTION_BY_ID,
  GET_FORMULA,
  NO_FORMULA,
  ADD_FORMULA,
  FETCH_PRESCRIPTION_START,
  FETCH_PRESCRIPTION_FAIL,
} from "../types/types";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import AddSuccess from "../../components/AddSuccess";
import AddError from "../../components/AddError";
import DeleteSuccess from "../../components/DeleteSuccess";
import DeleteError from "../../components/DeleteError";


export const getPrescription = () => (dispatch) => {
  dispatch({ type: FETCH_PRESCRIPTION_START });
  axiosWithAuth()
    .get(`/prescription`)
    .then((res) => {
      dispatch({
        type: GET_PRESCRIPTION,
        payload: res.data.prescription,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_PRESCRIPTION_FAIL,
        payload: err.response,
      });
    });
};
export const formInputChange = (name, value) => {
  return {
    type: INPUT_CHANGE,
    payload: {
      name,
      value,
    },
  };
};
export const postPrescription = (prescriptionPayload) => (dispatch) => {
  axiosWithAuth()
    .post(`/prescription/add`, prescriptionPayload)
    .then((res) => {
      console.log(res.data.prescription);
      
      AddSuccess();
      dispatch({
        type: CREATE_PRESCRIPTION,
        payload: res.data.prescription,
      });
      getPrescription();
    })
    .catch((err) => {
      AddError();
    });
};
export const deletePrescription = (_id) => (dispatch) => {
  axiosWithAuth()
    .delete(`/prescription/${_id}`)
    .then((res) => {
      console.log(res.data.prescription._id);

      DeleteSuccess();
      dispatch({
        type: DELETE_PRESCRIPTION,
        payload: res.data.prescription._id,
      });
      getPrescription();
    })
    .catch((err) => {
      DeleteError();
    });
};

export const addFormula = (formulaPayload, id) => (dispatch) => {
  axiosWithAuth()
    .post(`/formula/add/${id}`, formulaPayload)
    .then((res) => {
      dispatch({
        type: ADD_FORMULA,
        payload: res.data.prescription,
      });
    })
    .catch((err) => {});
};

export const getPrescriptionById = (_id) => (dispatch) => {
  axiosWithAuth()
    .get(`/prescription/find/${_id}`)
    .then((res) => {
      dispatch({
        type: GET_PRESCRIPTION_BY_ID,
        payload: res.data.prescription,
      });
    })
    .catch((err) => {});
};

export const getFormula = (formula) => {
  return {
    type: GET_FORMULA,
    payload: formula,
  };
};
export const noFormula = () => {
  return { type: NO_FORMULA, payload: {} };
};
