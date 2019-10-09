import React, { Component } from 'react'
import {LoginStyle} from "./styled"
import {Link} from 'react-router-dom'
import connect from "./connect"

@connect
class Login extends Component{
    constructor(){
        super()
        this.state={
            userId:"",
            password:""
        }
    }
    render(){
        let {userId,password} = this.state;
        return(
            <form id="login" onSubmit={this.props.handleLogin.bind(this,userId,password)}>
            <LoginStyle>
                <div>&nbsp;&nbsp;&lt; 返回</div>
                <h4>登录</h4>
                <p>账号：</p>
                <input type="text" value={userId} onChange={this.handleUser.bind(this,1)}/><br/>
                <p>密码：</p>
                <input type="password" value={password} onChange={this.handleUser.bind(this,2)}/>
                <button type="submit">登录</button>
                <p id="p_register" href="##" ><Link to="/register">还没注册？立即注册</Link></p>
            </LoginStyle>
            </form>
        )
    }
    handleUser(type,e){
        let val=e.target.value;
        // console.log(type,"login")
        if(type===1){
            this.setState({
                userId:val
            })
        }else{
            this.setState({
                password:val
            })
        }
    }
}
export default Login