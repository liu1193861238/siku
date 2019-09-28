import React, {Fragment} from 'react'
import {HeaderBanner,Carousel,Search,Nav,Banner,FationTop,FationBrand,BannerBig,GuessYourLike} from "./styled"


class HomePage extends React.Component{
    constructor(){
        super()
        this.state={
            value:""
        }
    }
    render(){
        return(
            <Fragment>
                   
                    <HeaderBanner>
                        <img src="//mstatic.secooimg.com/images/2017/11/08/load_logo.png"  alt=""/>
                        <h2>寺库</h2>
                        <div>立即打开</div>
                    </HeaderBanner>
                    
                    <Search id="search">
                        <div>
                            <i className="iconfont"></i>
                            <p>大闸蟹开湖季 | 全场五折起</p>
                        </div>
                    </Search>

                    <Carousel>
                       轮播图
                    </Carousel>
                    
                    <Nav>
                        <div>
                            <span>热门大牌</span>
                            <span>Popular Brands</span>
                        </div>
                       
                        <div>
                            <span>热门大牌</span>
                            <span>Popular Brands</span>
                        </div>
                        <div>
                            <span>热门大牌</span>
                            <span>Popular Brands</span>
                        </div>
                        <div>
                            <span>热门大牌</span>
                            <span>Popular Brands</span>
                        </div>
                        <div>
                            <span>热门大牌</span>
                            <span>Popular Brands</span>
                        </div>
                        <div>
                            <span>热门大牌</span>
                            <span>Popular Brands</span>
                        </div>
                    </Nav>
                    <Banner>
                        <div>
                            <img src="https://pic12.secooimg.com/res/topic/e25345fe14fe4e22802ada264420d9b6.gif" alt=""/>
                        </div>
                        <div>
                            <img src="https://pic12.secooimg.com/res/topic/dd2d25e39f9e447b8be5edf12ec440cc.jpg_!!0x0.webp" alt=""/>
                        </div>
                        <div>
                            <div>
                                <p>HOT SALE 秋季男士必备单品</p>
                                <img src="https://pic12.secooimg.com/res/topic/38e8192f94b64650a2742bda3a1f201e.jpg_!!0x0.webp" alt=""/>
                            </div>
                            <div>
                                <p>HOT SALE 秋季男士必备单品</p>
                                <img src="https://pic12.secooimg.com/res/topic/38e8192f94b64650a2742bda3a1f201e.jpg_!!0x0.webp" alt=""/>
                            </div>
                        </div>
                        <div>
                            <img src="https://pic12.secooimg.com/res/topic/9e76f708d4624100bfbf2598f2b5cb43.jpeg_!!0x0.webp" alt=""/>
                        </div>
                        <div>
                            <img src="https://pic12.secooimg.com/res/topic/fd4f79db33fe47a29a0016202ddb192d.jpg_!!0x0.webp" alt=""/>
                        </div>
                    </Banner>
                    <FationTop>
                        <img src="https://pic12.secooimg.com/res/topic/b247215d3d6c489496e17fadee93e3a4.jpg_!!0x0.webp" alt=""/>
                        <img src="https://pic12.secooimg.com/res/topic/76c7a2eb0417457c90a7b4e8182d527a.jpg_!!0x0.webp"  alt=""/>
                        <img src="https://pic12.secooimg.com/res/topic/c88258c90a094ac2995504499a95cca8.jpg_!!0x0.webp"  alt=""/>
                        <img src="https://pic12.secooimg.com/res/topic/7ad9001ea09c487aa28d0705590b96bf.jpg_!!0x0.webp"  alt=""/>
                        <img src="https://pic12.secooimg.com/res/topic/13ad3d96ee9e4fb29f7796cb9e468f50.jpg_!!0x0.webp"  alt=""/>
                        <img src="https://pic12.secooimg.com/res/topic/838a31136a424a428512330e5b8886bb.jpg_!!0x0.webp" alt=""/>
                        <img src=""  alt=""/>
                    </FationTop>
                    <FationBrand>
                        <img src="https://pic12.secooimg.com/res/topic/5e5586ce84354a0b9cc5eaddcc818c12.jpg_!!0x0.webp" alt=""/>
                        <img src="https://pic12.secooimg.com/res/topic/d838f021236747df87521eeef14cafb9.jpg_!!0x0.webp" alt=""/>
                        <img src="https://pic12.secooimg.com/res/topic/57c764a74d9241e885ebc257547aeedd.jpg_!!0x0.webp"  alt=""/>
                        <img src="https://pic12.secooimg.com/res/topic/d6911bb034724a64921af48d50924341.jpg_!!0x0.webp"  alt=""/>
                        <img src="https://pic12.secooimg.com/res/topic/61cd3d8388304a8582678b9de5a1491a.jpg_!!0x0.webp"  alt=""/>
                        <img src="https://pic12.secooimg.com/res/topic/430bcf61a0f2401fb972c42916a751a9.jpg_!!0x0.webp"  alt=""/>
                        <img src="https://pic12.secooimg.com/res/topic/3e55c1bf66a74d299aa201877bebbe0b.jpg_!!0x0.webp"  alt=""/>
                        <img src="https://pic12.secooimg.com/res/topic/85ccdc2731de4648952ae1e46abd4564.jpg_!!0x0.webp"  alt=""/>
                        <img src="https://pic12.secooimg.com/res/topic/8968aa8469dc46a1b12cbcfaa5abb694.jpg_!!0x0.webp"  alt=""/>
                       
                    </FationBrand>

                    <BannerBig>
                        <div>
                            <h3>国庆出游季</h3>
                            <h4>皮肤风衣低至259元</h4>
                            <img src="https://pic12.secooimg.com/res/topic/8adb5d96ffdd48c0b574ed7da9841a2e.jpg_!!0x0.webp"  alt=""/>
                        </div>
                        <div>
                            <h3>国庆出游季</h3>
                            <h4>皮肤风衣低至259元</h4>
                            <img src="https://pic12.secooimg.com/res/topic/8adb5d96ffdd48c0b574ed7da9841a2e.jpg_!!0x0.webp"  alt=""/>
                        </div>
                        <div>
                            <h3>国庆出游季</h3>
                            <h4>皮肤风衣低至259元</h4>
                            <img src="https://pic12.secooimg.com/res/topic/8adb5d96ffdd48c0b574ed7da9841a2e.jpg_!!0x0.webp"  alt=""/>
                        </div>
                        <div>
                            <h3>国庆出游季</h3>
                            <h4>皮肤风衣低至259元</h4>
                            <img src="https://pic12.secooimg.com/res/topic/8adb5d96ffdd48c0b574ed7da9841a2e.jpg_!!0x0.webp"  alt=""/>
                        </div>
                        <div>
                            <h3>国庆出游季</h3>
                            <h4>皮肤风衣低至259元</h4>
                            <img src="https://pic12.secooimg.com/res/topic/8adb5d96ffdd48c0b574ed7da9841a2e.jpg_!!0x0.webp"  alt=""/>
                        </div>
                        <div>
                            <h3>国庆出游季</h3>
                            <h4>皮肤风衣低至259元</h4>
                            <img src="https://pic12.secooimg.com/res/topic/8adb5d96ffdd48c0b574ed7da9841a2e.jpg_!!0x0.webp"  alt=""/>
                        </div>
                        <div>
                            <h3>国庆出游季</h3>
                            <h4>皮肤风衣低至259元</h4>
                            <img src="https://pic12.secooimg.com/res/topic/8adb5d96ffdd48c0b574ed7da9841a2e.jpg_!!0x0.webp"  alt=""/>
                        </div>
                        <div>
                            <h3>国庆出游季</h3>
                            <h4>皮肤风衣低至259元</h4>
                            <img src="https://pic12.secooimg.com/res/topic/8adb5d96ffdd48c0b574ed7da9841a2e.jpg_!!0x0.webp"  alt=""/>
                        </div>
                    </BannerBig>

                    <GuessYourLike>
                        <h3>猜你喜欢</h3>
                        <div>
                            <div>
                                <img src="https://pic.secoo.com/product/374/374/56/98/8b64091385db40fb8f1ae72b12951f85.jpg"  alt=""/>
                                <p>GUCCI</p>
                                <p>黑色新款 杨幂同款 GUCCI/古驰 爆款 男女同款米色帆布虎头腰包 493930 9C2VT 8745</p>
                                <p>¥ 6,960</p>
                                <p>
                                    <del>¥ 4,999</del>
                                    <span>会员价</span>
                                </p>
                                <p>自营</p>
                            </div>
                            <div>
                                <img src="https://pic.secoo.com/product/374/374/56/98/8b64091385db40fb8f1ae72b12951f85.jpg"  alt=""/>
                                <p>GUCCI</p>
                                <p>黑色新款 杨幂同款 GUCCI/古驰 爆款 男女同款米色帆布虎头腰包 493930 9C2VT 8745</p>
                                <p>¥ 6,960</p>
                                <p>
                                    <del>¥ 4,999</del>
                                    <span>会员价</span>
                                </p>
                                <p>自营</p>
                            </div>
                            <div>
                                <img src="https://pic.secoo.com/product/374/374/56/98/8b64091385db40fb8f1ae72b12951f85.jpg"  alt=""/>
                                <p>GUCCI</p>
                                <p>黑色新款 杨幂同款 GUCCI/古驰 爆款 男女同款米色帆布虎头腰包 493930 9C2VT 8745</p>
                                <p>¥ 6,960</p>
                                <p>
                                    <del>¥ 4,999</del>
                                    <span>会员价</span>
                                </p>
                                <p>自营</p>
                            </div>
                            <div>
                                <img src="https://pic.secoo.com/product/374/374/56/98/8b64091385db40fb8f1ae72b12951f85.jpg"  alt=""/>
                                <p>GUCCI</p>
                                <p>黑色新款 杨幂同款 GUCCI/古驰 爆款 男女同款米色帆布虎头腰包 493930 9C2VT 8745</p>
                                <p>¥ 6,960</p>
                                <p>
                                    <del>¥ 4,999</del>
                                    <span>会员价</span>
                                </p>
                                <p>自营</p>
                            </div>
                        </div>
                    </GuessYourLike>
                </Fragment>
        )
    }
}
export default HomePage