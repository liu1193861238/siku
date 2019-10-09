import { connect } from "react-redux";
import { DELSHOPPING_ACTION_ASYNC,CHECKSHOPPING_ACTION_ASYNC } from "@actions/shoppingListActions"
const mapStateToProps = (state) => ({
    shoppingList:state.shopping.shoppingList
})
const mapDispatchToProps = (dispatch) => ({
    async handleAsyncDel(info) {
        let data=await dispatch(DELSHOPPING_ACTION_ASYNC(info));
        return data;
    },
    async handleAsyncChecked(info) {
        let data=await dispatch(CHECKSHOPPING_ACTION_ASYNC(info));
        return data;
    }
})
export default connect(mapStateToProps, mapDispatchToProps);