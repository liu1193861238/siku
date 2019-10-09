import http from "@utils/http"
import {fetch as fetchPro} from "whatwg-fetch";
export const loginApi = (userId,password)=>http.post("/users/login",{userId,password})

export const registerApi = (userId,password)=>http.post('/users/register',{userId,password})


export const modifyUserPicApi = (formdata)=>{
  
 return fetchPro("/users/updateUserPic",{
        method:"post",
        body:formdata
      }).then(res=>res.json())
     
}
