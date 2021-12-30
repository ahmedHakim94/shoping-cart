import { FETCH_PRODUCTS, FILTER_SIZE, FILTER_SORT } from "../actions/type";
import axios from 'axios';
import Products from "../../components/Products/Products";

const INITIAL_STATE = {
    products: [],
    updateProducts: false,
    size: "",
    sort: "",
    filterProduct: [],
    updateFilterProducts: false
}

export const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.data,
                updateProducts: true,
                filterProduct: action.data,
            }
        case FILTER_SIZE:
            return {
                ...state,
                size: action.data.size,
                filterProduct: action.data.product,
            }

        case FILTER_SORT:
            return {
                ...state,
                sort: action.data.sort,
                filterProduct: action.data.product,
            }
        default:
            return state

    }
}
export const filterdSize = (products, value) => {

    return (dispatch) => {

        const cloneProduct = [...products]
        const newProduct = cloneProduct.filter(p => p.sizes.indexOf(value) != -1);
        dispatch({
            type: FILTER_SIZE,
            data: {
                size: value,
                product: value == "all" ? products : newProduct
            }
        })
    }
}

export const filterdOrder = (products, value) => {
    debugger
    return (dispatch) => {
        let cloneProduct = [...products]
        let newProduct = cloneProduct.sort( function (a, b) {
            if (value == "lower") {
                return a.price - b.price
            }
            else if (value == "height") {
                return b.price - a.price
            }
            else {
                return a.id < b.id ? 1 : -1
            }
        })
    
        dispatch({
            type: FILTER_SORT,
            data: {
                sort: value,
                product: newProduct
            }
        })
    }
}

// export const fetchCarts = () => {

//     return (dispatch) => {
//         fetch('/api/products').then(res => res.json()).then(data => {
//             dispatch({
//                 type: FETCH_CARTS,
//                 data: data
//             })
//         })
//     }
// }

export const fetchProducts = () => {

    return (dispatch) => {
        fetch('/api/products').then(res => res.json()).then(data => {
            dispatch({
                type: FETCH_PRODUCTS,
                data: data
            })
        })
    }
}