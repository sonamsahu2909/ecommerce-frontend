import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL
}from '../constants/ProductConstant'

import axios from 'axios'

export const GetProduct =()=>async(dispatch)=>{
    try{
        dispatch({type:ALL_PRODUCT_REQUEST})
        let link = 'https://ecommerceapi-d3ul.onrender.com/api/product/display'
        const {data} = await axios.get(link)
        // console.log(data)
        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:ALL_PRODUCT_FAIL,
            payload:error.response.data.message
        })
    }
}