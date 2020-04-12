import React,{Component} from 'react';
import axios from 'axios'
const DisplayWines=(props) =>{
  console.log("inside DisplayWines");
  if(typeof props.location.params  !== "undefined")
  {
    Array(8)
//{id: 4972, name: "CHATEAU DE SAINT COSME", year: 2009, grapes: "Grenache / Syrah", country: "France", …}

    console.log(props.location.params.data)
    return (
      <div  className='body'>
              <table>
                <tr>
                  <th>ID</th><th>Name</th><th>Year</th><th>Grapes</th><th>Country</th>
                </tr>

              {
                props.location.params.data.map((item,index)=>{return (
                <Wine key={index} value={item} />
                )}) 
      
        }


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
          <tr>
            <td>
              <button  onClick={this.getSingleWine}>{this.props.value.id}           
              </button>         
             </td><td> {this.props.value.name} </td> <td> {this.props.value.year} </td> <td>{this.props.value.grapes} </td> <td> {this.props.value.country}</td>
          </tr>
        </React.Fragment>
       )
    }
  
  }
  
}