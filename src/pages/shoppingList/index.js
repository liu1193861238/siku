import React from "react"
import { Wrapper, Content, Footer } from "./styled"
import { Link } from "react-router-dom"
import connect from "./connect"
@connect
class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCheckedAll: false,
            shoppingList: this.props.shoppingList,
            totalPrice:0
        }
    }
    render() {
        let {shoppingList, isCheckedAll,totalPrice } = this.state;
        return (
            <div>
                <Wrapper>
                    <Link to={"/brand"}><b className="left"><i className="left-arrow1"></i><i className="left-arrow2"></i></b></Link>
                    <h2>购物袋</h2>
                </Wrapper>
                <Content>
                    {
                        shoppingList.map((item, index) => (
                            <div className="child" key={index}>
                                <div>
                                    <input type="checkbox" checked={item.isChecked} onChange={this.changeHandler.bind(this, index)} />
                                </div>
                                <div>
                                    <img src={item.img_url} alt="" />
                                    <div className="img-bg"></div>
                                </div>
                                <div>
                                    <p>{item.brandName}</p>
                                    <p>{item.desc}</p>
                                    <p>{item.tags}</p>
                                    <div className="priceContent">
                                        <p>￥{item.refPrice}</p>
                                        <p>
                                            <span onClick={this.smallHandler.bind(this,index)}>-</span>
                                            <span>{item.count}</span>
                                            <span onClick={this.bigHandler.bind(this,index)}>+</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Content>
                <Footer>
                    <div>
                        <input type="checkbox" checked={isCheckedAll} onChange={this.handlerCheckAll.bind(this)} />
                        <p>全选</p>
                    </div>
                    <p>总计：￥ {totalPrice}</p>
                    <p onClick={this.handlerRemove.bind(this)}ref="del">删除</p>
                    <p onClick={this.handlerBuy.bind(this)} ref="buy">去结算</p>
                </Footer>
            </div>
        )
    }
    //总价
    handlerTotalPrice() {
        let { shoppingList, totalPrice} = this.state;
        //计算时清除上一次的结果
        totalPrice = 0;
        shoppingList.forEach((item) => {
            if (item.isChecked) {
                totalPrice += item.refPrice * item.count;
            }
        })
        return totalPrice;
    }
    //单选
    changeHandler(index, e) {
        // this.state.shoppingList[index].isChecked = e.target.checked;
        let value= e.target.checked;
        this.props.handleAsyncChecked({index,value});
        this.setState({
            shoppingList: this.props.shoppingList
        })
        //将数组中isChecked收集
        let checkedCache = [];
        this.props.shoppingList.forEach((item) => {
            checkedCache.push(item.isChecked)
        })
        // console.log(checkedCache)
        //改变全选
        this.setState({
            isCheckedAll: checkedCache.every(item =>item)
        })
        this.setState({
            totalPrice: this.handlerTotalPrice()
        })

    }
    //判断商品是否选中
    haveCheckedHandler(){
        //记录选中的状态
        let haveChecked=[];
        this.state.shoppingList.forEach((item)=>{
            haveChecked.push(item.isChecked)
        })
        return haveChecked.some((item)=>item===true)
    }
    handlerBuy() {
        if(this.haveCheckedHandler()){
            alert("购买成功,需要付"+this.handlerTotalPrice()+"元");
            this.state.shoppingList.forEach((item)=>{
                item.isChecked=false
            })
            this.setState({
                shoppingList:this.state.shoppingList,
                totalPrice:this.handlerTotalPrice()
            })
        }else{
            alert("请选中商品");
        }
    }
    //删除
    handlerRemove() {
        //需要在store里面做
        if(this.haveCheckedHandler()){
            this.state.shoppingList.forEach((item,index)=>{
                if(item.isChecked){
                    this.props.handleAsyncDel(index);
                }
            })
            //更新购物车状态和价格
            this.setState({
                shoppingList:this.props.shoppingList,
                totalPrice:this.handlerTotalPrice(),
                isCheckedAll:false
            })
        }else{
            alert("请选中商品");
        }
    }
    handlerCheckAll() {
        //改变全选状态
        this.setState({
            isCheckedAll: !this.state.isCheckedAll
        })
        //改变每条数据
        this.state.shoppingList.map((item) => {
            item.isChecked = !this.state.isCheckedAll
        })
        //改变价格
        this.setState({
            totalPrice: this.handlerTotalPrice()
        })
    }
    smallHandler(index) {
        if(this.state.shoppingList[index].count<2){
            this.state.shoppingList[index].count=1;
        }else{
            this.state.shoppingList[index].count=--this.state.shoppingList[index].count;
        }
        
        this.setState({
            shoppingList:this.state.shoppingList
        })
        this.setState({
            totalPrice:this.handlerTotalPrice()
        })

    }
    bigHandler(index) {
        this.state.shoppingList[index].count=++this.state.shoppingList[index].count;
        this.setState({
            shoppingList:this.state.shoppingList
        })
        this.setState({
            totalPrice:this.handlerTotalPrice()
        })
    }
}
export default ShoppingList