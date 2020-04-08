import {
  CREATE_PRESCRIPTION,
  UPDATE_PRESCRIPTION,
  DELETE_PRESCRIPTION,
  INPUT_CHANGE,
  GET_PRESCRIPTION
} from "../types/types";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const getPrescription = () => dispatch => {
  axiosWithAuth()
    .get(`/prescription`)
    .then(res => {

      dispatch({
        type: GET_PRESCRIPTION,
        payload: res.data.prescription
      });
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

export const formInputChange = (name, value) => {
  return {
    type: INPUT_CHANGE,
    payload: {
      name,
      value
    }
  };
};

export const postPrescription = newPres => dispatch => {
  console.log(`action called`);

  axiosWithAuth()
    .post(`/prescription/add`, newPres)
    .then(pres => {
      console.log(pres);
      
      dispatch({
        type: CREATE_PRESCRIPTION,
        payload: pres
      });
      console.log(pres);
    })
    .catch(err => {
      console.log(err);
    });
};
