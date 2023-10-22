import {
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL
}from '../constants/CategoryConstant'

export const categoryReducer =(state={categories:[]},action)=>{
    switch(action.type){
        case ALL_CATEGORY_REQUEST:
            return {
                loading:true,
                categories:[]
            }
        case ALL_CATEGORY_SUCCESS:
            return {
                loading:false,
                categories:action.payload.data
            }
        case ALL_CATEGORY_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}