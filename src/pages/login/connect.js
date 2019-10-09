import {connect} from "react-redux";
import {LOGIN_ACTION_ASYNC} from '@actions/user'

const mapStateToProps = ()=>({

})


const mapDisPatchToProps = (dispatch)=>({
   async handleLogin(userId,password,e){
        e.preventDefault();
        let data = await dispatch(LOGIN_ACTION_ASYNC(userId,password));
        // console.log(data,"connect")
        if(data){
           if(this.props.location.state){
               let path = this.props.location.state.from
               this.props.history.push(path)
           }else{
               this.props.history.push("/home")
           }
          
        }
    } 
})


export default connect(mapStateToProps,mapDisPatchToProps)