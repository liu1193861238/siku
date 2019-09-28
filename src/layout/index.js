import React,{Fragment} from 'react'
import TabBar from "@common/tabBar"
export default class Layout extends React.Component{
    render(){
        let flag=this.props.meta.flag;
        // console.log(this.props)
        return(
            <Fragment>
            {this.props.children}
            {flag?<TabBar/>:''}
            </Fragment>
        )
    }
}