import styled from "styled-components"
export const TabBarWrapper=styled.div`
    width:100%;
    height:1.5rem;
    background-color:#fff;
    display:flex;
    position:fixed;
    left:0;
    bottom:0;
    border-top:1px solid #ccc;
    ul,li{
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
    a{
       display:flex;
       width:100%;
       height:100%;
       flex-direction:column;
       justify-content:center;
       align-items:center; 
       font-size:.3rem;
       color:#1a191e
    }
    a:nth-type-of(1){
        color:#1a191e
    }
    i{
        font-size:.77333rem;
    }
    span{
        font-size:.29333rem;
    }
    .active{
        color:#f8a120
    }
`