import React ,{Component} from 'react';


export default class AddWine extends Component{
  constructor(props){
    super(props);
    this.state={
      value:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

    handleChange(event){
      this.setState({value: event.target.value});
      console.log("event",event);
      event.preventDefault();
    }
    handleSubmit(event){
      alert(`name was submitted ${this.state.value}`);
      event.preventDefault();

    }
  render(){
    return(
      <div className='body'>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input id='name' value={this.state.value} type='text' onChange={this.handleChange}/>
          <input type='submit' className='button' value='Submit'/>
        </label>
      </form>

      </div>
    )
  }
  }


