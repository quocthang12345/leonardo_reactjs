import { createStore, applyMiddleware,combineReducers} from "redux";
import ItemReducer from "./ItemReducer"
import thunk from "redux-thunk"

const reducer = combineReducers({
    listItem: ItemReducer
})

export default createStore(reducer,applyMiddleware(thunk))