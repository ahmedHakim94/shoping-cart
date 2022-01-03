import { combineReducers } from "redux";
import { cartsReducer } from "./cartsReducer";
import { orderReducer } from "./orderReducer";
import { productsReducer } from "./productsReducer";


export default combineReducers({
    products : productsReducer,
    carts:cartsReducer,
    orders :orderReducer
})