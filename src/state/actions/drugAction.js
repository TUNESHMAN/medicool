import {
  CREATE_PRESCRIPTION,
  INPUT_CHANGE,
  GET_PRESCRIPTION,
  GET_PRESCRIPTION_BY_ID,
  GET_FORMULA,
  NO_FORMULA,
} from "../types/types";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
export const getPrescription = () => (dispatch) => {
  axiosWithAuth()
    .get(`/prescription`)
    .then((res) => {
      console.log(res);

      dispatch({
        type: GET_PRESCRIPTION,
        payload: res.data.prescription,
      });
    })
    .catch((err) => {
      console.log(err);
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
      console.log(res, prescriptionPayload, `ACTION CALLED`);
      dispatch({
        type: CREATE_PRESCRIPTION,
        payload: res.data.prescription,
      });
      console.log(res, `ACTION CALLED`);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const deletePrescription = (_id) => (dispatch) => {
  axiosWithAuth()
    .delete(`/prescription/${_id}`)
    .then((res) => {
      console.log(res.data, `new prescription`);
      dispatch({
        type: "DELETE_PRESCRIPTION",
        payload: res.data._id,
      });
    })
    .catch((err) => {
      console.log(err, `this is an error`);
    });
};

export const addFormula = (formulaPayload, id) => (dispatch) => {
  axiosWithAuth()
    .post(`/formula/add/${id}`, formulaPayload)
    .then((res) => {
      console.log(res, `Added formula`);
      dispatch({
        type: "ADD_FORMULA",
        payload: res.data.prescription,
      });
    })
    .catch((err) => {
      console.log(err, `formula error`);
    });
};

export const getPrescriptionById = (_id) => (dispatch) => {
  axiosWithAuth()
    .get(`/prescription/find/${_id}`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: GET_PRESCRIPTION_BY_ID,
        payload: res.data.prescription,
      });
    })
    .catch((err) => {
      console.log(err);
    });
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
