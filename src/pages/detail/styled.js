import styled from "styled-components"
export const Wrapper=styled.div`
box-sizing:border-box;
width:100%;
height:100%;
padding:.3rem;
a:nth-of-type(1){
    width:.53333rem;;
    height:.53333rem;;
    position:relative;
    .left{
            width:20px;
            height:20px;
            position:absolute;
            left:0;
            top:0;
            z-index: 2;
        }
        .left-arrow1,.left-arrow2{
            width:0;
            height:0;
            display:block;
            position:absolute;
            left:0;
            top:0;
            z-index:5;
            border-top:10px transparent dashed;
            border-left:10px transparent dashed;
            border-bottom:10px transparent dashed;
            border-right:10px white solid;
            overflow:hidden;
        }
        .left-arrow1{
            border-right:15px #000 solid;
        }
        .left-arrow2{
            left:1px;
            border-right:15px white solid;
        }
}
>div{
    width:100%;
    height:100%;
    img{
        width:100%;
        height:100%;
    }
}
h4{
    margin-bottom: .10667rem;
    font-family: Futura-Medium;
    font-size: .32rem;
    line-height: .42667rem;
    overflow: hidden;
    white-space: nowrap;
    word-wrap: break-word;
    word-break: break-all;
    text-overflow: ellipsis;
    margin-left:1.5rem;
}
p:nth-of-type(1){
    margin-left:1.5rem;
    margin-bottom: .26667rem;
    font-family: PingFangSC-Light;
    font-size: .32rem;
    line-height: .44rem;
    overflow: hidden;
    white-space: nowrap;
    word-wrap: break-word;
    word-break: break-all;
    text-overflow: ellipsis;
}
p:nth-of-type(2){
    margin-left:1.5rem;
    font-family: Futura-Medium;
    font-size: .45333rem;
    color: #000b0b;
    overflow-x: hidden;
}
p:nth-of-type(3){
    margin-left:1.5rem;
    line-height: .42667rem;
    font-family: Futura-Medium;
    font-size: .32rem;
    color: #ccc;
    text-decoration:line-through;
}
p:nth-of-type(4){
    margin-left:1.5rem;
    height: .44rem;
    margin-top: .18667rem;
    line-height: .44rem;
    color: #8b572a;
    font-family: PingFangSC-Light;
    font-size: .32rem;
}
a:nth-of-type(2){
    display:block;
    margin-top:1.5rem;
    margin-left:2rem;
    width:3rem;
    height:1.2rem;
    background-color:rgb(26, 25, 30);;
    line-height:1.2rem;
    text-align:center;
    color:#fff;
    font-size:.4rem;
    padding:0 .5rem;
}
 
`