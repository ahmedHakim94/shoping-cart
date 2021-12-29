// // import { FETCH_CARTS } from "../actions/type";

// const INITIAL_STATE = {
//     carts: [],
//     updateCarts: false
// }

// export const cartsReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case FETCH_CARTS:
//             return {
//                 ...state,
//                 carts: action.data,
//                 updateCarts: true
//             }
//         default:
//             return state

//     }
// }

// export const fetchCarts = () => {
    
//     return (dispatch) =>{
//         fetch('/api/products').then(res => res.json()).then(data =>{
//             dispatch({
//                 type:FETCH_CARTS,
//                 data:data
//             })
//         })
//     }
// }