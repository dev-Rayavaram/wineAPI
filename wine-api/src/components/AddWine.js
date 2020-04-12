import React ,{Component} from 'react';
import axios from 'axios'

export default class AddWine extends Component{
  constructor(props){
    super(props);
    this.state={
     wine:[]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

    handleChange(event){
      event.preventDefault();

      let key =event.target.name;
      this.setState({ wine: {...this.state.wine, [key]: event.target.value} });
    }
     handleSubmit(event){
      event.preventDefault();

      console.log("name was submitted ",this.state);
      let body={
        "name": this.state.wine.name,
        "year": this.state.wine.year,
        "grapes": this.state.wine.grapes,
        "country": this.state.wine.country,
        "region": this.state.wine.region,
        "description": this.state.wine.description, 
        "picture": "some picture",
        "price": this.state.wine.price
    }
      let url = `http://myapi-profstream.herokuapp.com/api/61fcf4/wines`
             axios.headers={
           
                   'Access-Control-Allow-Origin': '*',
                   'Content-Type': 'application/json; charset=utf-8',
             } 
             axios.post(url,body)
             .then(res=>{
              alert(res)
             }).catch(e=>{
              console.log(e)});

    }
  render(){
    return(
      <div className='body'>
      <form onSubmit={this.handleSubmit}>
        <div className='row'>
          <label>
            Name:
            <input name='name' value={this.state.wine.name} type='text' onChange={this.handleChange}/>
          </label>
        </div>
        <div className='row'>
          <label>
          Year:
            <input name='year' value={this.state.wine.year} type='text' onChange={this.handleChange}/>
          </label>
        </div>
        <div className='row'>
          <label>
            Grapes:
            <input name='grapes' value={this.state.wine.Grapes} type='text' onChange={this.handleChange}/>
          </label>
        </div>
        <div className='row'>
          <label>
            Country:
            <input name='country' value={this.state.wine.Country} type='text' onChange={this.handleChange}/>
          </label>
        </div>
        <div className='row'>
          <label>
          Region:
            <input name='region' value={this.state.wine.Region} type='text' onChange={this.handleChange}/>
          </label>
        </div>
        <div className='row'>
          <label>
          Description:
            <input name='description' value={this.state.wine.Description} type='text' onChange={this.handleChange}/>
          </label>
          </div>
          <div className='row'>
          <label>
          Price:
            <input name='price' value={this.state.wine.Price} type='text' onChange={this.handleChange}/>
            <input type='submit' className='button' value='Submit'/>
          </label>
        </div>
        </form>

      </div>
    )
  }
  }


