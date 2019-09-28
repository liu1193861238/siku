import { createStore, combineReducers, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import user from "./reducer/user"
const reducers =combineReducers({
    user
})
const store = createStore(reducers,applyMiddleware(reduxThunk))
export default store