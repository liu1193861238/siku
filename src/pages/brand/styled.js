import styled from "styled-components"
export const Headers = styled.div`
    width:100%;
    height:1.173333rem;
    background-color:#fff;
    a{
        font-size:.613333rem;
        color:#000;
    }
`
export const LogoName = styled.div`
    width: 92%;
    margin: 0 auto;
    padding: .6rem 0;
    &>h3{
        width: 100%;
        font-size:.533333rem;
        line-height:.7rem;
        text-align:center;
    }
    border-bottom:1px solid #000;
`
export const Sections = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:100%;
    justify-content:center;
    align-items:center;
    >div{
        width:46%;
        margin-bottom: 0.33333rem;
        div:nth-of-type(1){
            height:5.533333rem;
            img{
                width:100%;
                height:100%;
            }
        }
        div:nth-of-type(2){
            padding-bottom: 0.226666rem;
            background: #F7F7F7;
            display:flex;
            flex-direction:column;
            align-items:center;
            
            p:nth-of-type(1){
                font-size: .4rem;
                padding-top: 0.233333rem;
                padding-bottom: 0.236666rem;
            }
            p:nth-of-type(2){
                width: 2.133333rem;
                height: .533333rem;
                border: 1px solid #000;
                line-height: .533333rem;
                color: #000;
                font-size: .32rem;
                text-align: center;
                margin-bottom: 0.23rem;
            }
        }
    }
    >div:nth-of-type(odd){
        margin-right:.2rem;
    }
`
export const ShopName = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:100%;
    justify-content:center;
    align-items:center;
    >div{
        width:32%;
        margin: 0 0.15% 0.66666666rem 0.15%;    
        div{
            width:100%;
            margin-bottom: 0.1733333rem;
            img{
                width:100%;
                height:100%;
            }
        }
        p{
            font-size: 0.32rem;
            line-height: 0.44rem;
            height: 0.44rem;
            padding: 0 0.88rem;
        }
    }
    
`