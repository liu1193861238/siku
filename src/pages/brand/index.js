import React from "react"
import { Popover, NavBar } from 'antd-mobile';
import { Headers, LogoName, Sections } from "./styled"
import { Link } from "react-router-dom"
import connect from "./connect"
const Item = Popover.Item;
@connect
class Brand extends React.Component {
    render() {
        let { productList } = this.props;
        // console.log(productList)
        return (
            <div>
                <Headers>
                    <NavBar
                        mode="light"
                        leftContent={
                            <Popover>
                                <Link to={"/homePage"}><b className="left"><i className="left-arrow1"></i><i className="left-arrow2"></i></b></Link>
                            </Popover>
                        }
                        rightContent={
                            <Popover
                                overlayClassName="fortest"
                                overlayStyle={{ color: 'currentColor' }}
                                visible={this.state.visible}
                                overlay={[
                                    (<Item value="首页" data-seed="logId"> <span className="iconfont" style={{ marginLeft: 5 }}>&#xe604;</span>
                                        <span style={{ marginLeft: 8 }}>首页</span>
                                    </Item>),
                                    (<Item value="购物袋" data-seed="logId"> <span className="iconfont" style={{ marginLeft: 5 }}>&#xe677;</span>
                                        <span style={{ marginLeft: 8 }}>购物袋</span>
                                    </Item>),
                                    (<Item value="我的寺库" data-seed="logId"> <div>
                                        <span className="iconfont" style={{ marginLeft: 5 }}>&#xe64a;</span>
                                        <span style={{ marginLeft: 8 }}>我的寺库</span>
                                    </div>
                                    </Item>)
                                ]}
                                align={{
                                    overflow: { adjustY: 0, adjustX: 0 },
                                    offset: [-10, 0],
                                }}
                                onVisibleChange={this.handleVisibleChange}
                                onSelect={this.onSelect}
                            >
                                <span className="iconfont" style={{ fontSize: '.56rem', color: "#000" }}>&#xe63a;</span>
                            </Popover>
                        }
                    >

                        <span style={{ fontSize: '.453333rem', fontWeight: 400, }}>品牌优选</span>
                    </NavBar>

                </Headers>
                <LogoName>
                    <h3>品牌优选</h3>
                </LogoName>
                <Sections>
                    {
                        productList.map((item, index) => (
                            <Link key={index} to={"/detail?img_url="+(item.img_url?item.img_url:"")+"&brandCname="+item.brandCname+"&name="+item.name+"&refPrice="+item.refPrice+"&tipPrice="+item.tipPrice+"&tags="+item.tags}>
                                <div>
                                    <img src={item.img_url?item.img_url:""} alt="" />
                                </div>
                                <div>
                                    <p>{item.showBrand}</p>
                                    <p>查看更多</p>
                                </div>
                            </Link>
                        ))
                    }


                </Sections>

            </div>
        )
    }
    componentDidMount() {
        this.props.handleAsyncWeek();
    }
    state = {
        selected: '',
        visible: false,
    };
    onSelect = (opt) => {
        if (opt.props.value === "首页") {
            opt.props.children[2]._self.props.history.push("/homePage");
        } else if (opt.props.value === "购物袋") {
            opt.props.children[2]._self.props.history.push("/shoppingList");
        } else if (opt.props.value === "我的寺库") {
            opt.props.children[1]._self.props.history.push("/mine");
        }
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    }
    backHandler() {
        this.props.history.goBack();
    }
}
export default Brand