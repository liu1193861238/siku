import {createAction} from 'redux-actions';
import {goods} from "@api/shoppList"
const GOODS_ACTION =createAction("goods_action",data=>data)
export const GOODS_ACTION_ASYNC=()=>{
    return async(dispatch)=>{
        let data=await goods();
        dispatch(GOODS_ACTION(data));
    }
}