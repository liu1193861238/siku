import {handleActions} from "redux-actions"
const defaultState={
    shoppingList:[],
}
export default handleActions({
    shoppinglist_action:(state,action)=>{
        let newList=Object.assign({},state);
        newList.shoppingList.push(action.payload);
        return newList;
    },
    delshopping_action:(state,action)=>{
        let newState=Object.assign({},state);
        newState.shoppingList.splice(action.payload)
        return newState;
    },
    checkshopping_action:(state,action)=>{
        let newCheckShopping=Object.assign({},state);
        newCheckShopping.shoppingList[action.payload.index].isChecked=action.payload.value;
        return newCheckShopping;
    }
},defaultState)