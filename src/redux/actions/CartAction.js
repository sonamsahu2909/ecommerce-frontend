import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
} from "../constants/CartConstant";
import axios from "axios";

export const AddItemToCart =(id,quantity)=>async(dispatch,getState)=>{
    let link = `https://ecommerceapi-d3ul.onrender.com/api/productdetail/${id}`;
    const { data } = await axios.get(link);
    console.log(data)
    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data.productDetail._id,
            name: data.productDetail.name,
            price: data.productDetail.price,
            image: data.productDetail.image[0].url,
            stock: data.productDetail.stock,
            quantity,
        },
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));


}

// remove cart
export const RemoveItemFromCart = (id)=>async(dispatch,getState)=>{
    dispatch({
        type: REMOVE_CART_ITEM,
        payload: id,
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}

// SAVE SHIPPING INFO
export const saveShippingInfo = (data) => async (dispatch) => {
    console.log(data)
    dispatch({
        type: SAVE_SHIPPING_INFO,
        payload: data,
    });

    localStorage.setItem("shippingInfo", JSON.stringify(data));
};