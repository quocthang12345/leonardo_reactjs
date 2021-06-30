import CartReducer from "./CartReducer"
import MenuReducer from "./MenuReducer"
import { combineReducers,applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"

const reducer = combineReducers({
    carts: CartReducer,
    menu: MenuReducer
})

export default createStore(reducer,applyMiddleware(thunk));

