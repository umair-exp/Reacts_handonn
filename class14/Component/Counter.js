import React from "react";
export default class Counter extends React.Component{
    
    render(){
        return(
            <div>
                <div>count:{this.props.count}</div>
                <button onClick={this.props.incerment}>Increment</button>
                <button onClick={this.props.decrement}>Increment</button>
            </div>

        )
    }
}