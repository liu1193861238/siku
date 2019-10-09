import styled from "styled-components";

export const LoginStyle=styled.div`
    width:8rem;
    height:10rem;
    margin:3rem auto;
    background-color: #fff;
    padding:0 10px;
    &>div{
        width:100%;
        height:1.5rem;
        border-bottom:1px solid #ccc;
        position: fixed;
        top: 0px;
        left: 0px;
        line-height: 1.5rem;
        font-size: .5rem;
    }
    &>h4{
        font-size:.8rem;
        align-items:center;
        text-align: center;
        padding-top: 10px;
        padding-bottom:30px;
    }
    &>P{
        font-size:.6rem;
        color:#999;
    }
    &>input{
        width:100%;
        height:1rem;
        border-top:none;
        border-left:none;
        border-right:none;
        border-bottom:1px solid #ccc;
        font-size:.6rem;
    }
    &>button{
        width:100%;
        height:1.2rem;
        text-align:center;
        color:#fff;
        line-height:1rem;
        background:blue;
        border:none;
        font-size:.5rem;
        margin-top:20px;
        
    }
    #p_register{
        font-size:15px;
        color:red;
        margin-top:10px;
    }
` 