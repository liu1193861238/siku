import React from "react"
import "./index.css"
class Loadding extends React.Component {
    render() {
        return (
            <figure>
                <div className="dot white"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </figure>
        )
    }
}
export default Loadding