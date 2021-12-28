import {createStore ,applyMiddleware ,compose} from 'redux';
import reducer from './reducers/reducers';
import reduxThunk from 'redux-thunk'


const initState = {}
const enhanser = window.__REDUX_DEVTOOLS_EXTITION_COMPOSE__||compose
const store = createStore(reducer, initState, enhanser(applyMiddleware(reduxThunk)))

export default store;