import {applyMiddleware, combineReducers, compose} from "redux";
import thunkMiddleware  from "redux-thunk";
import booksReducer from "./reducers/books-reducer";


const {createStore} = require("redux");

let reducers = combineReducers({
    booksPage: booksReducer
})

const store = createStore(reducers,compose(applyMiddleware(thunkMiddleware)))
export default store