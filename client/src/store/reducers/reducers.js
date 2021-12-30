import { combineReducers } from "redux";
import { cartsReducer } from "./cartsReducer";
import { productsReducer } from "./productsReducer";


export default combineReducers({
    products : productsReducer,
    carts:cartsReducer
})