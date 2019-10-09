import { createStore, combineReducers, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import user from "./reducer/user"
import goodsList from "./reducer/goodsList"
import shopping from "./reducer/shopping"
const reducers =combineReducers({
    user,
    goodsList,
    shopping
})
const store = createStore(reducers,applyMiddleware(reduxThunk))
export default store