import {connect} from "react-redux";
import {GOODS_ACTION_ASYNC} from "@actions/goodsAction"
const mapStateToProps=(state)=>({
    productList:state.goodsList.productList

})
const mapDispatchToProps=(dispatch)=>({
    async handleAsyncWeek(){
        let data=await dispatch(GOODS_ACTION_ASYNC());
        return data;
    }
})
export default connect(mapStateToProps,mapDispatchToProps);