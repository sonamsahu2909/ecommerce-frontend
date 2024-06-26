import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILED,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILED,
  CREATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILED,
  CLEAR_ERRORS
} from "../constants/ProductConstant";

import axios from "axios";

export const GetProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });
    let link = "/product/display";
    const { data } = await axios.get(link);
    // console.log(data)
    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const GetProductDetail =(id) => async(dispatch) =>{
  // console.log(id)
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });
        let link = `/productdetail/${id}`;
        const { data } = await axios.get(link);
        // console.log(data)
        dispatch({
          type: PRODUCT_DETAILS_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: PRODUCT_DETAILS_FAILED,
          payload: error.response.data.message,
        });
      }
}

// for clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
}