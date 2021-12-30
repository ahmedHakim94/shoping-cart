import { ADD_CART, REMOVE_CART } from "../actions/type";

const INITIAL_STATE = {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    updateCarts: false
    
}

export const cartsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_CART:
            return {
                ...state,
                cartItems: action.data.cartItems,
                updateCarts: true
            }

        case REMOVE_CART:
            return {
                ...state,
                cartItems : action.data.cartItems,
                updateCarts: true
            }
        default:
            return state
    }
}

export const addCart = (item) => {
    debugger;
    return (dispatch , getState) => {
        const cartItems = getState().carts.cartItems
        const cartItemClone = [...cartItems];
        let isItemExist = false;

        cartItemClone.forEach(p => {
            if (p._id === item._id) {
                p.qty++;
                isItemExist = true
            }
        })
        if (!isItemExist) {
            cartItemClone.push({ ...item, qty: 1 })
        }

        dispatch({
            type: ADD_CART,
            data: {
                cartItems : cartItemClone
            }
        })
        localStorage.setItem("cartItems", JSON.stringify(cartItemClone))
    }
}
export const removeCart = (item) =>{
    
    return(dispatch, getState) => {
        const cartItems = getState().carts.cartItems
        const cartitemclone = [...cartItems];
        const updatedCartItems = cartitemclone.filter(p => p._id !== item._id)

        dispatch({
            type:REMOVE_CART,
            data :{
                cartItems : updatedCartItems
            }
        })
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems))
    }
}