import {createAction} from "redux-actions"
const SHOPPINGLIST_ACTION =createAction("shoppinglist_action",data=>data)
export const SHOPPINGLIST_ACTION_ASYNC=(data)=>{
    return (dispatch)=>{
        dispatch(SHOPPINGLIST_ACTION(data));
    }
}
const DELSHOPPING_ACTION =createAction("delshopping_action",data=>data)
export const DELSHOPPING_ACTION_ASYNC=(data)=>{
    return (dispatch)=>{
        dispatch(DELSHOPPING_ACTION(data));
    }
}
const CHECKSHOPPING_ACTION =createAction("checkshopping_action",data=>data)
export const CHECKSHOPPING_ACTION_ASYNC=(data)=>{
    return (dispatch)=>{
        dispatch(CHECKSHOPPING_ACTION(data));
    }
}