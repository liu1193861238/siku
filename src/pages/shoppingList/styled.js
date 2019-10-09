import styled from "styled-components"
export const Wrapper = styled.div`
    height: 1.17333rem;
    padding: 0 .4rem;
    font-family: PingFangSC-Medium;
    background-color: #fff;
    display:flex;
    align-items:center;
    h2{
        height: 100%;
        font-size:.45333rem;
        font-weight: 700;
        line-height:1.17333rem;
        margin-left:4rem;
    }
    a{
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
`
export const Content = styled.div`
        .child{
        width:100%;
        display:flex;
        flex-wrap: nowrap;
        height: 4.26667rem;
        margin-bottom: .26667rem;
        background-color: #fff;
        border-bottom: 1px solid;
        align-items:center;
        justify-content:center;
        div:nth-of-type(1){
            margin-left:.36667rem;
        }
        div:nth-of-type(2){
             position:relative;
             width:2.93333rem;
             height:2.93333rem;
             margin-right:.36667rem;
             margin-left:.36667rem;
             img{
                 width:100%;
                 height:100%;
             }
             .img-bg{
                width: 100%;
                height: 100%;
                position: absolute;
                left: -.36667rem;
                top: 0;
                background-color: #1c1717;
                opacity: .04;
             }
        }
        div:nth-of-type(3){
            width: 5.73333rem;
            height: 2.93333rem;
            color: #1c1717;
            p{
                font-size:.4rem;
                color:#1a191e;
            }
            p:nth-of-type(2){
                width: 100%;
                height: .49333rem;
                line-height: .49333rem;
                font-size: .34667rem;
                overflow: hidden;
                white-space: nowrap;
                word-wrap: break-word;
                word-break: break-all;
                text-overflow: ellipsis;
            }
        }
        .priceContent{
            display:flex;
            margin-top:.6rem;
            p:nth-of-type(1){
                color:#000b0b;
            }
            p:nth-of-type(2){
                margin-left:1rem;
                height: .66667rem!important;
                width: 2.13333rem!important;
                border:1px solid;
                border-left:none;
                text-align:center;
                display:flex;
                align-items:center;
                span{
                    display:block;
                    width:100%
                }
            }

        }
        }
`
export const Footer = styled.div`
            width:90%;
            padding:0 .2rem;
            display: flex;
            justify-content: space-between;
            flex-wrap: nowrap;
            height: 1.33333rem;
            box-shadow: 0 0 0.26667rem 0 rgba(0,0,0,.16);
            position:fixed;
            left:0;
            bottom:0;
            font-size:.3rem;
            align-items:center;
            >div{
                display:flex;
                align-items:center;
                justify-content:center;
                flex-direction:column;
                width:1rem;
            }
            P:nth-of-type(1){
                width:3rem;
                height:.8rem;
                line-height:.8rem;
                text-align:center;
            }
            p:nth-of-type(2), p:nth-of-type(3){
                border:1px solid #000;
                width:1.5rem;
                height:.8rem;
                line-height:.8rem;
                text-align:center;
            }
`