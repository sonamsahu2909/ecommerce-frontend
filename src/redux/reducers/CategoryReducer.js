import {
  ALL_CATEGORY_REQUEST,
  ALL_CATEGORY_SUCCESS,
  ALL_CATEGORY_FAIL,
  ALL_SUB_CATEGORY_REQUEST,
  ALL_SUB_CATEGORY_SUCCESS,
  ALL_SUB_CATEGORY_FAIL,
  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_SUCCESS,
  CATEGORY_DETAILS_FAILED,
} from "../constants/CategoryConstant";

export const categoryReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case ALL_CATEGORY_REQUEST:
      return {
        loading: true,
        categories: [],
      };
    case ALL_CATEGORY_SUCCESS:
      return {
        loading: false,
        categories: action.payload.data,
      };
    case ALL_CATEGORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const subcategoryReducer = (state = { subcategories: [] }, action) => {
  switch (action.type) {
    case ALL_SUB_CATEGORY_REQUEST:
      return {
        loading: true,
        categories: [],
      };
    case ALL_SUB_CATEGORY_SUCCESS:
      return {
        loading: false,
        categories: action.payload.data,
      };
    case ALL_SUB_CATEGORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    
    default:
      return state;
  }
};

// export const categoryDetailReducer = (state = { CATEGORYDetail: {} }, action) => {
//     // console.log("action",action.type)
//     switch (action.type) {
//       case CATEGORY_DETAILS_REQUEST:
//         return {
//           loading: true,
//           ...state,
//         };
//       case CATEGORY_DETAILS_SUCCESS:
//         return {
//           loading: false,
//           categoryDetail: action.payload.categorydetail,
//         };
//       case CATEGORY_DETAILS_FAILED:
//         return {
//           loading: false,
//           error: action.payload,
//         };
    
//       default:
//         return state;
//     }
//   };
