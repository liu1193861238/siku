import React from "react"
import { Wrapper } from "./styled"
import Url from "url"
import {Link} from "react-router-dom"
import connect from "./connect"
@connect
class Detail extends React.Component {
    constructor(props){
        super(props);
        this.state={
            img_url:"",
            brandCname:"",
            name:"",
            refPrice:"",
            tipPrice:"",
            tags:""
        }
        let {img_url,brandCname,name,refPrice,tipPrice,tags}=Url.parse(this.props.location.search,true).query;
        this.state.img_url=img_url;
        this.state.brandCname=brandCname;
        this.state.name=name;
        this.state.refPrice=refPrice;
        this.state.tipPrice=tipPrice;
        this.state.tags=tags;
    }
    render() {
        let {img_url,brandCname,name,refPrice,tipPrice,tags}=this.state;
        return (
            <div>
                <Wrapper>
                    <Link to={"/brand"}><b className="left"><i className="left-arrow1"></i><i className="left-arrow2"></i></b></Link>
                    <div>
                        <img src={img_url} alt="" />
                    </div>
                    <h4>{brandCname}</h4>
                    <p>{name}</p>
                    <p>￥{refPrice}</p>
                    <p>￥{tipPrice}</p>
                    <p>{tags}</p>
                    <Link to={"/shoppingList"}>加入购物袋</Link>
                </Wrapper>
            </div>
        )
    }
    componentDidMount(){
        let {img_url,name,refPrice,tags}=this.state;
        let brandName=name.substr(0,8);
        let desc=name.substr(9)
        let obj={
            img_url:img_url,
            brandName:brandName,
            desc:desc,
            tags:tags,
            refPrice:refPrice,
            isChecked:false,
            count:1,
        }
        this.props.handleAsyncList(obj);
        
    }
}
export default Detail