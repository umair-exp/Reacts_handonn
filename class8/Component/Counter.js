import React from "react";
export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,

        }
        this.handleIncrement=this.handleIncrement.bind(this);
        this.handleDecrement=this.handleDecrement.bind(this);
    }
    componentWillUnmount(){
        console.log("Unmounting....")

    }
    componentDidMount(){
        console.log("Mounting....")
    }
    handleIncrement=()=>{
        this.setState({
            count:this.state.count+1,
        })
        
    }
    handleDecrement=()=>{
        this.setState({
            count:this.state.count-1,
        })
        
    }
    render(){
        return(
            <div>
                <div>count:{this.state.count}</div>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Increment</button>
            </div>

        )
    }
}