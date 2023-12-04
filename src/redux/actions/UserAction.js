import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL
}from '../constants/UserConstant'

import axios from 'axios'


export const register = (myForm) => async (dispatch) => {
    alert('hello')
    console.log(myForm)
    try {
        dispatch({ type: REGISTER_USER_REQUEST })

        const config = {
            headers: {
                'content-type': 'multiparts/form-data'
            }
        }
        const { data } = await axios.post('/userinsert', myForm, config);
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

export const login_user = (email,password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })

        const { data } = await axios.post('/verify_login',{email,password});
        console.log(data);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        })
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.user.message
        });
    }
}

