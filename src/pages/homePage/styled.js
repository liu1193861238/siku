import styled  from "styled-components";


export const HeaderBanner=styled.div`
    position: fixed;
    border-bottom: 1px solid #f5f5f5;
    width: 100%;
    height: 1.49333rem;
    font-size: 0.64rem;
    color: #000;
    background-color: #fff;
    
    top:0px;
    &>img{
        position: absolute;
        top: 0.14667rem;
        left: 0.4rem;
        width: 1.2rem;
        height: 1.2rem;
    }
    &>h2{
        padding-top: 0.24rem;
        height: 1rem;
        font-size: 0.42667rem;
        line-height: 1rem;
        padding-left: 1.94667rem;
    }
    &>div{
        overflow: hidden;
        position: absolute;
        top: 0.41333rem;
        right: 0.4rem;
        display: -webkit-flex;
        display: flex;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-align-items: center;
        align-items: center;
        border: 1px solid #000;
        width: 1.86667rem;
        height: 0.69333rem;
        font-size: 0.37333rem;
        text-align: center;
    }
`


export const Search=styled.div`
    -webkit-box-flex: 0;
    -webkit-flex: 0;
    -ms-flex: 0;
    flex: 0;
    width: 100%;
    height: 1.17312rem;
    z-index: 20;
    background-color: #fff;
    overflow:hidden;
    position: fixed;
    top:1.49333rem;
    
    &>div{
      
        width: 9.2rem;
        height: 0.8533rem;
        line-height: 0.8533rem;
        margin: 0 auto;
        margin-top:0.15991rem;
       z-index:10;
       padding-left: 1.06667rem;
       font-size: .4rem;
       box-sizing: border-box;
       font-family: PingFangSC-Ligh;
       background-color: #f5f5f5;
       color: #ccc;

       &>i{
           
           content:"ue\E607";
         
       }
       &>div{

       }
    }
`
export const Carousel=styled.div`
    width:100%;
    height:8.66667rem;
    background:pink;
    margin-top:2.66645rem;
`
export const Nav=styled.div`    
    width:100%;
   
    padding:17.5px 30px;
    
    display:flex;
    flex-wrap: wrap;
    justify-content:space-between;
    align-items:center;
    box-sizing: border-box;
    &>div{
        width: 2.66667rem;
        height: .93333rem;
        text-align: center;
        
        margin:15px 0;
        &>span:nth-of-type(1){
            margin-bottom: .06667rem;
            font-size: .37333rem;
           display:block;
         
            color: #1c1717;
        }
        &>span:nth-of-type(2){
            display:block;
            font-size: .26667rem;
            line-height: .33333rem;
            color: #999;
        }
    }
    
`
export const Banner=styled.div`
    background:#ccc;
    &>div{
        
    }
    &>div>img{
        width:100%;
        margin-top:3px;
        margin-bottom:3px;
    }
    &>div:nth-of-type(3){
        padding-top:20px;
        padding-bottom:30px;
        display:flex;
        overflow-x: auto ;  
        white-space: nowrap;  

        background:#fff;
        &>div{
            margin-left:20px;
        }
        &>div:nth-of-type(2){
            padding-right:20px;
        }
        &>div>img{
            height: 4.13333rem;
        }
        &>div>p{
            font-size: .50667rem;
            line-height: .70667rem;
            margin-bottom: .16rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
`
export const FationTop=styled.div`
    &>img{
        width:100%;
        margin-bottom:3px;
    }
`
export const FationBrand=styled.div`
    &>img{
        width:100%;
        margin-bottom:3px;
    }
`

export const BannerBig=styled.div`
    width:100%;
    
   
    box-sizing:border-box;
    &>div{
        width:100%;
        box-sizing:border-box;
        padding:20px 15px;
        margin-bottom:10px;
        background-color:#fff;
    }
    &>div>img{
        width: 100%;
        height: 6rem;
        vertical-align: bottom;
        margin:auto auto;
        display:block;
    }
    &>div>h3{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        font-family: PingFangSC-Medium;
        font-size: .50667rem;
        color: #000b0b;
        line-height: .70667rem;
        margin-bottom: .05333rem;
        font-weight: 600;
        width: 15em;
    }
    &>div>h4{
        font-family: PingFangSC-Light;
        font-size: .34667rem;
        line-height: .49333rem;
        color: #1c1717;
        margin-bottom: .4rem;
        width: 22em;
    }
`
export const GuessYourLike=styled.div`
    height:100%;
    background-color:#fff;
    float:left;
    margin-bottom:1.5rem;
    &>h3{
        padding: 0 .4rem .54667rem;
        font-size: .50667rem;
        line-height: 1;
        font-weight: 700;
        
    }
    &>div>div{
        float:left;
        width: 4.97667rem;
        margin-bottom: .8rem;
    }
    &>div>div>p{
        width:100%;
        padding:0 15px;
        box-sizing: border-box;
    }
    
    &>div>div>img{
        width: 4.98667rem;
        height: 4.98667rem;
    }
    &>div>div>p:nth-of-type(1){
        margin-bottom: .10667rem;
        font-family: Futura-Medium;
        font-size: .32rem;
        line-height: .42667rem;
        font-weight: 700;
    }
    &>div>div>p:nth-of-type(2){
        width: 100%;
        margin-bottom: .13333rem;
        font-size: .32rem;
        font-family: PingFangSC-Light;
        line-height: .44rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    &>div>div>p:nth-of-type(3){
        margin-right: .13333rem;
        font-family: PingFangSC-Medium;
        font-size: .45333rem;
        line-height: .64rem;
        display: inline-block;
        vertical-align: middle;
    }
    &>div>div>P:nth-of-type(4){
        &>del{
            height: .42667rem;
            margin-bottom: .18667rem;=
            color: #ccc;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size:2px;
        }
        
        &>span{
            margin-left: .13333rem;
            padding: 0 .08rem;
            background-color: #f8a120;
            font-size: .26667rem;
            line-height: .4rem;
            text-align: center;
            color: #fff;
        }
    }
    &>div>div>p:nth-of-type(5){
        display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: .44rem;
    margin-top: .18667rem;
    line-height: .44rem;
    color: #8b572a;
    font-family: PingFangSC-Light;
    font-size: .32rem;
    overflow: hidden;
    white-space: nowrap;
    }
`
























// export const IconFontStyle = createGlobalStyle`
//   @font-face {font-family: "iconfont";
//     src: url('./iconfont.eot?t=1569291927717'); /* IE9 */
//     src: url('./iconfont.eot?t=1569291927717#iefix') format('embedded-opentype'), /* IE6-IE8 */
//     url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPIAAsAAAAAB9QAAAN8AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDFAqDGIJ5ATYCJAMQCwoABCAFhG0HSBvjBsiO1FZzhFEkL+Lhv/1+v8/ceTYP9aTafXWSSSIRCqFBgkpphAahkwgFvpTAT7+pD6hCqk5nUlMnyUGIwcjN/U/M/H8up9eyBOa3LJdbkxpr0A0/6gUYBxTQ3tgGCbhAAvOW4bWL6SBPEyim9EAc5hRVgZ0MTwrEvShwYJfxyg3q0BTqFSuzeAFrzfREngHwHHw//kNE2JHUKnjm0V22FtK+3Z/FUMP+D4MmDwFyujCUdVRYBjJxWxk9R0XVZZRiHWZlFajLQvr2eBbz/z9T4oGXbZLb/+NVElGHlR1gG2oV3+7MTfDtQVSJMaCQ4GNITZA9AG+ArRMelWRpSGXXHGScRvrz+68T167VXLlSdfVq9cTrqWjqxNXDB1y/XpvGSu5y7ZoTfayqog1MfcO0QHqOdx23m5kIUKJ80BPOEcNra4cHOyRVb1kBw1YyEw8TxEmtEFo7HHrUTJsCVQPa6hkdvDssOeXr2TjLT/Cqnb16+9aO1Tuv9khss3XsuuoipZKTDx+eTBEUML7rpMNHJpOpcterjo6vvpG+0Q+/UaPWrx+FWAoi5CgywXwU3gsO8LkXu2RdRI7/1ZnX9Cml1WSGWky5bvU7xYKPxoUS1nshUtca0aGZKUxLeNJSi0/7ePz27fixYyD8Vc2Tyf0ToxoIMh5LwDmiR7v5PL8/fnP+7dm9tvkP9PJmPDf7vsiPbFj4Xd/bZ2xxjkdJNsgAvwepA1R6YPhvgPpwqp4a/PN+4+jT51WrU9JXOyaDr/Xzp0P6d7gVdIuD5j3Fgl9FdmzKNo19OZsMI5xYtp4aJaEo+EVa6HNvCmmws5LQNJhA0jAJlaZpQ7YsQ03bNtQ17UCxJHd9Wz8FJXILi0YjCD3WQ9LlHSo9zhqy5S7UDHkLdT1BQXEcbju2zYZIZyqIw0jLqvuzokYy8zSA6VBdgYTeRk5J04GtBikWscCGh4TlG7nIjJQp5lj6CBEY8yyvSCY2B52HjEaJlRVJjzQ4RIexnBAayle9KEQjmYB2QIFwMESLpdYfS6QhMeO99hhd+HwFRNCbEUdp0LU8ayAKC7F7VrgQYR0MuYK5k+5WLrHoQxABw3gsnkJiwspBYcRIqhKWXD1MD9HAQugGlGUJQoVWfFchZHnJ9IY7oMC75EhRRY6acseZBS2nF70Mmc6pHmFAT40OaQyiGQA=') format('woff2'),
//     url('./iconfont.woff?t=1569291927717') format('woff'),
//     url('./iconfont.ttf?t=1569291927717') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
//     url('./iconfont.svg?t=1569291927717#iconfont') format('svg'); /* iOS 4.1- */
//   }
 
//   .iconfont {
//     font-family: "iconfont" !important;
//     font-size: 16px;
//     font-style: normal;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//   }
//`







