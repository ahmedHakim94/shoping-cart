import { FETCH_PRODUCTS } from "../actions/type";
import axios from 'axios';

const INITIAL_STATE = {
    products: [],
    updateProducts: false
}

export const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.data,
                updateProducts: true
            }
        default:
            return state

    }
}

export const fetchProducts = () => {
    
    // const response = axios.get(`/api/products`);

    // return {
    //     type: FETCH_PRODUCTS,
    //     payload: response
    // }

    return (dispatch) =>{
        fetch('/api/products').then(res => res.json()).then(data =>{
            dispatch({
                type:FETCH_PRODUCTS,
                data:data
            })
        })
    }
}