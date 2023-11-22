import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL
}from '../constants/UserConstant'

import axios from 'axios'

export const register = (myForm) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST })

        const config = {
            headers: {
                'content-type': 'multiparts/form-data'
            }
        }
        const { data } = await axios.post('https://ecommerceapi-d3ul.onrender.com/api/userinsert', myForm, config);
        console.log(data);
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.result
        })
    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message
        });
    }
}