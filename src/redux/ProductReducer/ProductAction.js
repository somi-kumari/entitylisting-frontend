import axios from "axios";
export const ADDDATA = "ADDDATA";

export const addData = (val) => {
  return { type: ADDDATA, payload: val };
};

export const getProductData = (val) => async (dispatch) => {
  axios
    .get("http://localhost:8080/product?page=1&perPage=20")
    .then((res) => dispatch(addData(res.data)))
    .catch((error) => console.log(error));
};
export const getProductDataFilterSort = (val) => async (dispatch) => {
  console.log(val);
  axios
    .get(
      `http://localhost:8080/product?${val.color ? `color=${val.color}` : ""
      }&${val.size ? `size=${val.size}` : ""}&${val.sort ? `sort=${val.sort}` : ""
      }&${val.page ? `page=${val.page}` : ""}&${val.perPage ? `perPage=${val.perPage}` : ""
      }`
    )
    .then((res) => dispatch(addData(res.data)))
    .catch((error) => console.log(error));
};
