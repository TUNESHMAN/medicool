import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    // config object
    baseURL: `https://drug-prescription-app.herokuapp.com/api/v1`,
    headers: {
      Authorization: localStorage.getItem(`token`)
    }
  });
};

