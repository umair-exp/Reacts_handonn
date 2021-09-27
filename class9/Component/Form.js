import React from "react";
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        name:'',
        pet:'',
        marked:false,
        persons:'Person3',
    }
    this.handlenameChange=this.handlenameChange.bind(this);
    this.handlepetChange=this.handlepetChange.bind(this);
    this.handleMarked=this.handleMarked.bind(this);
    this.handleSelect=this.handleSelect.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handlenameChange=(event)=>{
      console.log(event.target.value)
      this.setState({
          name:event.target.value
      })
  }
  handlepetChange=(event)=>{
      console.log(event.target.value)
      this.setState({
          pet:event.target.value
      })
  }
  handleMarked(event){
      console.log(event.target.checked)
      this.setState({
          marked:!this.state.marked
      })
  }
  handleSelect=(event)=>{
      this.setState({
          persons:event.target.value
      })
  }
  handleSubmit(){
      console.log(this.state)
  }


  render() {
    return (
      <div>
          <input value={this.state.pet} onChange={this.handlepetChange}/>
          {this.state.pet}
          <textarea  value={this.state.name}  onChange={this.handlenameChange} />
          {this.state.name}
          <input 
          type="checkbox" 
          checked={this.state.marked} 
          onChange={this.handleMarked}/>
          <div>
              <select  onChange={this.handleSelect} value={this.state.persons}>
                  <option>Person1</option>
                  <option>Person2</option>
                  <option>Person3</option>
                  <option>Person4</option>
              </select>
              {this.state.persons}
              <button onClick={this.handleSubmit} >Submit</button>
          </div>
        
      </div>
    );
  }
}
