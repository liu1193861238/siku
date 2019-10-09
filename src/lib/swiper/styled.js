import styled from "styled-components";
export const SwiperContainer=styled.div`
    width:100%;
    height:9rem;
    position:relative;
    overflow:hidden;
    .swiper-content{
        width:100%;
        height:100%;
        display:flex;
        position:absolute;
        left:0;
        transition: left 0.2s ease-in-out;
        img{
            width:100%;
            height:100%;
        }
    }
    .swiper-spot{
        width:100%;
        display:flex;
        position:absolute;
        bottom:.5rem;
        justify-content:center;
        div{
            width:.3rem;
            height:.3rem;
            border-radius:50%;
            margin:.3rem;
            background-color:#fff;
        }
        .active{
            background-color:red;
        }
    }

`