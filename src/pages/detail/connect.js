import { connect } from "react-redux";
import { SHOPPINGLIST_ACTION_ASYNC } from "@actions/shoppingListActions"
const mapStateToProps = (state) => ({
   
})
const mapDispatchToProps = (dispatch) => ({
    async handleAsyncList(info) {
        let data=await dispatch(SHOPPINGLIST_ACTION_ASYNC(info));
        return data;
    }
})
export default connect(mapStateToProps, mapDispatchToProps);