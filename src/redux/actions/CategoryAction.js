import {
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL
}from '../constants/CategoryConstant'

import axios from 'axios'

export const GetCategory =()=>async(dispatch)=>{
    try{
        dispatch({type:ALL_CATEGORY_REQUEST})
        let link = 'https://ecommerceapi-d3ul.onrender.com/api/category/display'
        const {data} = await axios.get(link)
        // console.log(data)
        dispatch({
            type:ALL_CATEGORY_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:ALL_CATEGORY_FAIL,
            payload:error.response.data.message
        })
    }
}