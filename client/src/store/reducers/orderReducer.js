import { ADD_ORDER, REMOVE_ORDER ,CLEAR_CART } from "../actions/type"


const INITIAL_STATE = {
    order: [],
}

export const orderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ORDER:
            return {
                ...state,
                order: action.data.order
            }
        case REMOVE_ORDER:
            return {
                ...state,
                order : []
            }
        default:
            return state
    }

}


export const addOrder = (order) => {
    return (dispatch) => {
        fetch('/api/orders', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: ADD_ORDER,
                data: {
                    order : data
                }
            })
        })
        localStorage.clear("cartItems");
        dispatch({
            type:CLEAR_CART
        })
    }
}

export const clearOrder =()=>{
    return(dispatch) =>{
        dispatch({
            type:REMOVE_ORDER
        })
    }
}