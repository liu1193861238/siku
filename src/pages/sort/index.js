import React from "react"
import Swiper from "@lib/swiper"
class Sort extends React.Component{
    constructor(){
        super();
        this.state={
           banner:[
               {imgSrl:"https://pic12.secooimg.com/res/topic/fbc73aa5cd6f41768120b700bc6abd72.jpg_!!0x0.webp"},
               {imgSrl:"https://pic12.secooimg.com/res/topic/8c8d1f88710f4025abfc312a59d7599a.jpeg_!!0x0.webp"},
               {imgSrl:"https://pic12.secooimg.com/res/topic/8f27dbb3cbbb4b6ca78b7762793e4871.jpeg_!!0x0.webp"}

            ]
        }
    }
    render(){
        let {banner}=this.state;
        return(
            <div>Sort
            <Swiper swiperItem={banner}/>
            </div>
        )
    }
}
export default Sort