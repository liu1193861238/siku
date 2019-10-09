import {handleActions} from "redux-actions"
const defaultState={
    productList:[]
}

export default handleActions({
    goods_action:(state,action)=>{
        let newList=Object.assign({},state);
        newList.productList=action.payload.productList;
        return newList;
    }
},defaultState)