import React, { Component } from 'react'
import {RegisterStyle} from "./styled"
import {Link} from "react-router-dom"
import {registerApi} from "@api/user"
class Register extends Component {
    constructor(){
        super()
        this.state={
            userId:"",
            password:""
        }
    }
    render() {
        let {userId,password} =this.state;
        return(
            <form id="register" onSubmit={this.handleRegister.bind(this)}>
            <RegisterStyle>
                <div>&nbsp;&nbsp;&lt; 返回</div>
                <h4>注册</h4>
                <p>账号：</p>
                <input type="text" value={userId} onChange={this.handleUser.bind(this,1)}/><br/>
                <p>密码：</p>
                <input type="password" value={password} onChange={this.handleUser.bind(this,2)}/>
                <button type="submit">注册</button>
                <p id="p_register" href="##" ><Link to="/login">已有账号？立即登录</Link></p>
            </RegisterStyle>
            </form>
        )
    }
    handleUser(type,e){
        let val = e.target.value;
        if(type === 1){
            this.setState({
                userId:val
            })
        }else{
            this.setState({
                password:val
            })
        }
    }
   async handleRegister(e){
        e.preventDefault();
    
        let userId = this.state.userId;
        let password = this.state.password;

        let data = await registerApi(userId,password);
        console.log(data);

        if(data.data.code === 1){
            alert("注册成功");
            this.props.history.push("/login")
        }
        
    }
}

export default Register
