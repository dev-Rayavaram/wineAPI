import React,{Component} from 'react';
import axios from 'axios'
const DisplayWines=(props) =>{
  console.log("inside DisplayWines");
  if(typeof props.location.params  !== "undefined")
  {
    console.log(props.location.params.data)
    return (
      <div  className='body'>
              <table>
                <thead>
                  <tr><td>ID</td><td>Name</td><td>Year</td><td>Grapes</td><td>Country</td></tr>
                </thead>
                <tbody>
              {
                props.location.params.data.map((item,index)=>{return (
                <Wine key={index} value={item} />
                )})       
        }
        </tbody>
        </table>  
      </div>
  );
  }
  else{
    return (
      <div  className='body'>
      </div>
  );

  }
  
}

export default DisplayWines;
const SingleWine=(props)=>{
  return(
    <>
    console.log("inside SingleWine")
    console.log(props)
    </>
  )
}

class Wine extends Component{
  constructor(props){
    super(props);
    this.state={
      wineData:[],
      buttonClicked:false
    }
    this.getSingleWine = this.getSingleWine.bind(this);
    this.reset = this.reset.bind(this);
    this.deleteAPI = this.deleteAPI.bind(this);
  }
  reset=(e)=>{
    this.setState({buttonClicked:false})
    e.preventDefault();

  }
  componentDidUpdate(){

  }
  deleteAPI(event){
          event.preventDefault();

          console.log("DELETE was called ",this.props.value.id);
   
          let url = `http://myapi-profstream.herokuapp.com/api/61fcf4/wines/${this.props.value.id}`
          axios.headers={
         
                 'Access-Control-Allow-Origin': '*',
                 'Content-Type': 'application/json; charset=utf-8',
           } 
            axios.delete(url)
            .then(res=>{
              this.setState({buttonClicked:false})
            }).catch(e=>{
             console.log(e)});

  }

   async getSingleWine(e){
     let id=e.target.innerHTML;
     console.log("inside getSingleWine",)
     let url = `http://myapi-profstream.herokuapp.com/api/61fcf4/wines/${id}`
     try{
            axios.headers={
          
                  'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json',
            } 
            const results = await axios.get(url,{params:{ 
              'id':id
            }});
           console.log("inside get single wine info");
           console.log(results);
           this.setState({wineData:results});
           this.setState({buttonClicked:true})
     }
     catch (e){
       console.log(e);
     }
     e.preventDefault();

  }
  
  render(){
    if(this.state.buttonClicked===true){
      let localData = this.state.wineData.data;
        console.log("localData",localData)
      return(
        <React.Fragment>
            <button  onClick={this.reset}>Back</button>          

            <h2>Wine details are</h2>
            <img src= {localData.picture} width='150px' height='150px' alt={localData.id}/>
            <h3>Name: {localData.name}</h3>
            <h3>Year: {localData.year}</h3>
            <h3>Grapes: {localData.grapes}</h3>
            <h3>Country: {localData.country}</h3>
            <h3>Region: {localData.region}</h3>
            <p>Description: {localData.description}</p>
            <h3>Price: {localData.price}</h3>
            <h3>instance_id: {localData.instance_id}</h3>
            <h3>created_at: {localData.created_at}</h3>
            <h3>updated_at: {localData.updated_at}</h3>
         </React.Fragment>
       )
    
    }
    else{
      return(
        <React.Fragment>
          <tr><td><button value={this.props.value.id} onClick={this.getSingleWine}>{this.props.value.id}</button></td><td>{this.props.value.name}</td> <td>{this.props.value.year}</td> <td>{this.props.value.grapes}</td><td>{this.props.value.country}</td><td><button value={this.props.value.id} onClick={this.deleteAPI}>DELETE</button></td></tr>
          </React.Fragment>
       )
    }
  
  }
  
}