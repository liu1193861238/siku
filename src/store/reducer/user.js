import {handleActions} from "redux-actions"

const defaultState = {
    username: sessionStorage.getItem("username")||"未登录",
    userPic:  sessionStorage.getItem("userPic")||""
}

export default handleActions({
    login_action:(state,action)=>{
        let newUserState = Object.assign({},state);
        newUserState.username = action.payload.info.username;
        newUserState.userPic = action.payload.info.userPic;
        return newUserState;
    },
    userpic_action:(state,action)=>{
        // console.log(action);
        sessionStorage.setItem("userPic",action.payload)
        let newImgUrlState = Object.assign({},state);
        newImgUrlState.userPic = action.payload;
        return newImgUrlState;
    }
},defaultState)