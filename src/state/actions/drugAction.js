import {
  CREATE_PRESCRIPTION,
  UPDATE_PRESCRIPTION,
  DELETE_PRESCRIPTION,
  INPUT_CHANGE,
  GET_PRESCRIPTION,
  GET_PRESCRIPTION_BY_ID,
} from "../types/types";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
export const getPrescription = () => (dispatch) => {
  axiosWithAuth()
    .get(`/prescription`)
    .then((res) => {
      dispatch({
        type: GET_PRESCRIPTION,
        payload: res.data.prescription,
      });
      console.log(res);
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
export const postPrescription = (newPres) => (dispatch) => {
  axiosWithAuth()
    .post(`/prescription/add`, newPres)
    .then((res) => {
      console.log(res);
      dispatch({
        type: CREATE_PRESCRIPTION,
        payload: res.data.prescription,
      });
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const deletePrescription = (_id) => (dispatch) => {
  axiosWithAuth()
    .delete(`/prescription/${_id}`)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: "DELETE_PRESCRIPTION",
        payload: res.data._id,
      });
    })
    .catch((err) => {
      console.log(err, `this is an error`);
    });
};

export const addFormula = (newFormula) => (dispatch) => {
  axiosWithAuth()
    .post(`/formula/add`, newFormula)
    .then((res) => {
      console.log(res.data, `Added formula`);
      dispatch({
        type: "ADD_FORMULA",
        payload: res.data.prescription._id,
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
