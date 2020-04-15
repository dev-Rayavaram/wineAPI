import React ,{Component} from 'react';
import axios from 'axios'

export default class AddWine extends Component{
  constructor(props){
    super(props);
    this.state={
     wine:[],
     table:{
       style:{
       width:'100%',
       height:'100%',
       border:'2px solid black',
       backgroundColor:'white',
       align:'center'
     }
    },
    label:{
        style:{
        width:'300px',
        align:'right',
        fontSize:'25px'
      }
    },
    button:{
      style:{
        default:{
          width:'70px',
          height:'30px',
          borderRadius: '25%',
          backgroundColor: 'blueviolet',
          color: 'white'
        },
        active:{
          width:'70px',
          height:'30px',
          borderRadius: '25%',
          color: 'white',
          backgroundColor: 'green'
        }
       
        }
      },
      clicked:false

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
              alert("added the product ,please refresh main page and click on Show Wines")
             }).catch(e=>{
              console.log(e)});
              this.setState({ clicked:true});


    }
  render(){
    console.log(this.state);
    let buttonStyle =this.state.button.style.default;

    if(this.state.clicked===true){
      buttonStyle =this.state.button.style.active;
    }

    return(
      <div className='body'>
      <form onSubmit={this.handleSubmit}>
        <div style={this.state.table.style}>
        <div className='row'>
          <label style={this.state.label.style}>
            Name:
            <input name='name' value={this.state.wine.name} type='text' onChange={this.handleChange}/>
          </label>
        </div>
        <div className='row'>
          <label  style={this.state.label.style}>
          Year:
            <input name='year' value={this.state.wine.year} type='text' onChange={this.handleChange}/>
          </label>
        </div>
        <div className='row'>
          <label  style={this.state.label.style}>
            Grapes:
            <input name='grapes' value={this.state.wine.Grapes} type='text' onChange={this.handleChange}/>
          </label>
        </div>
        <div className='row'>
          <label  style={this.state.label.style}>
            Country:
            <input name='country' value={this.state.wine.Country} type='text' onChange={this.handleChange}/>
          </label>
        </div>
        <div className='row'>
          <label  style={this.state.label.style}>
          Region:
            <input name='region' value={this.state.wine.Region} type='text' onChange={this.handleChange}/>
          </label>
        </div>
        <div className='row'>
          <label  style={this.state.label.style}>
          Description:
            <input name='description' value={this.state.wine.Description} type='text' onChange={this.handleChange}/>
          </label>
          </div>
          <div className='row'>
          <label  style={this.state.label.style}>
          Price:
            <input name='price' value={this.state.wine.Price} type='text' onChange={this.handleChange}/>
            <input type='submit' style={buttonStyle} value='Submit'/>
          </label>
        </div>



        </div>
            </form>

      </div>
    )
  }
  }


