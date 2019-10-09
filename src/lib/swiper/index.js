import React from "react"
import { SwiperContainer } from "./styled"
class Swipper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //图片的个数
            len: 0,
            //当前的下标
            swiperIndex: 0,
            //swiper-content的总宽度
            contentWidth: 0,
            //圆点的下标
            sIndex: 0,
            //放图片的数组
            newSwiperItem: [],
            activeIndex: 0
        }
        this.state.len = this.props.swiperItem.length;
        //将第一张图插在数组的最后方（多一张）
        this.state.newSwiperItem = [...this.props.swiperItem, this.props.swiperItem[0]];
    }
    render() {
        let { newSwiperItem, activeIndex, countWidth } = this.state;
        return (
            <SwiperContainer ref="swiperContainer">
                <div className="swiper-content" ref="swiperContent" style={{ width: countWidth }}>
                    {
                        newSwiperItem.map((item, index) => (
                            <div key={index}>
                                <img src={item.imgSrl} alt="" />
                            </div>
                        ))
                    }
                </div>
                <div className="swiper-spot">
                    {
                        this.props.swiperItem.map((item, index) => (
                            <div key={index} className={activeIndex === index ? 'active' : ''}></div>
                        ))
                    }
                </div>
            </SwiperContainer>
        )
    }
    componentDidMount() {
        this.handleInt();
        this.handlerTouchInit();
        this.handlerTouchMove();
        this.handlerTouchEnd();
    }
    handleInt() {
        //一张图片的宽度
        this.swiperIW = this.refs.swiperContainer.offsetWidth;
        //放图片的大容器的宽度
        let width = this.swiperIW * this.state.newSwiperItem.length;
        this.setState({
            countWidth: width
        }, () => {
            this.autoPlay();
        })

    }
    //轮播
    autoPlay() {
        this.timmer = setInterval(() => {
            if (this.state.swiperIndex === this.state.len) {
                this.setState({
                    swiperIndex: 1
                });
                this.refs.swiperContent.style.transition = "none";
                this.refs.swiperContent.style.left = 0;
            } else {
                this.setState({
                    swiperIndex: ++this.state.swiperIndex
                })
            }
            setTimeout(() => {
                this.toImg();
            }, 0)

        }, 3000)
    }
    //轮播原理
    toImg() {
        this.refs.swiperContent.style.transition = "left 0.2s ease-in-out";
        this.refs.swiperContent.style.left = -(this.swiperIW * this.state.swiperIndex) + "px";
        this.setState({
            activeIndex: this.state.swiperIndex === this.state.len ? 0 : this.state.swiperIndex
        })
    }
    //手指事件
    handlerTouchInit() {
        this.refs.swiperContent.addEventListener("touchstart", (e) => {
            clearInterval(this.timmer);
            // console.log(e.targetTouches[0]);
            this.disX = e.targetTouches[0].clientX;
        })
    }
    handlerTouchMove() {
        this.refs.swiperContent.addEventListener("touchmove", (e) => {
            e.preventDefault();
            //手指移动的实时坐标
            this.moveX = e.targetTouches[0].clientX;
            //初始值与实时坐标的差值
            this.distanceX = this.moveX - this.disX;
            this.refs.swiperContent.style.transition = "none";
            // console.log(this.distanceX);
            if (this.distanceX > 0 && this.state.swiperIndex === 0) {
                this.refs.swiperContent.style.left = -(this.swiperIW * this.state.len) + this.distanceX + "px";
            } else if (this.distanceX < 0 && this.state.swiperIndex === this.state.len) {
                this.refs.swiperContent.style.left = this.distanceX + "px";
            } else {
                this.refs.swiperContent.style.left = -(this.swiperIW * this.state.swiperIndex) + "px";
            }
        })
    }
    handlerTouchEnd() {
        this.refs.swiperContent.addEventListener("touchend", (e) => {
            if (Math.abs(this.distanceX) > this.swiperIW / 5) {
                if (this.distanceX > 0) {
                    if (this.state.swiperIndex === 0) {
                        this.setState({
                            swiperIndex: this.state.len - 1
                        })
                        this.refs.swiperContent.style.left = -(this.swiperIW * this.state.len) + "px";
                    } else {
                        this.setState({
                            swiperIndex: --this.state.swiperIndex
                        })
                    }
                    this.toImg();
                } else {
                    if (this.state.swiperIndex === this.state.len) {
                        this.setState({
                            swiperIndex: 1
                        })
                        this.refs.swiperContent.style.transition = "none";
                        this.refs.swiperContent.style.left = 0;
                    } else {
                        this.setState({
                            swiperIndex: ++this.state.swiperIndex
                        })
                    }
                    this.toImg();
                }
            } else {
                if (this.state.swiperIndex === 0) {
                    this.refs.swiperContent.style.left = 0;
                } else if (this.state.swiperIndex === this.state.len) {
                    this.refs.swiperContent.style.left = -(this.state.len * this.swiperIW) + "px";
                } else {
                    this.refs.swiperContent.style.left = -(this.swiperIndex * this.swiperIW) + "px";
                }
            }
            this.autoPlay();
        })
    }
    componentWillUnmount() {
        this.setState = (state, callback) => {
            return
        };
        clearInterval(this.timmer);
    }
}
export default Swipper