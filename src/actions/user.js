import { createAction } from "redux-actions";
import { loginApi,modifyUserPicApi} from "@api/user"




let LOGIN_ACTION = createAction("login_action", data => data)
export const LOGIN_ACTION_ASYNC = (userId, password) => {
    return async (dispatch) => {
        let data = await loginApi(userId, password)
        // console.log(data,"login")
        if(data.data.code === 1){
            sessionStorage.setItem("username",data.data.info.username)
            sessionStorage.setItem("userPic",data.data.info.userPic)

           dispatch(LOGIN_ACTION(data.data));
           return true;
        }
    }
}


let USERPIC_ACTION = createAction("userpic_action",imgUrl=>imgUrl);

export const USERPIC_ACTION_ASYNC = (formdata)=>{
    return async (dispatch)=>{
        let data = await modifyUserPicApi(formdata);
        if(data.data.urlPic){
            dispatch(USERPIC_ACTION(data.data.urlPic))
        }
    }
}