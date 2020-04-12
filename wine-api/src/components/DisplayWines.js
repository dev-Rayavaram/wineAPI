import React,{Component} from 'react';

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

class Wine extends Component{
  render(){
    return(
      <React.Fragment>
        <tr>
          <td>{this.props.value.id}  </td><td> {this.props.value.name} </td> <td> {this.props.value.year} </td> <td>{this.props.value.grapes} </td> <td> {this.props.value.country}</td>

        </tr>
      </React.Fragment>
    )
  }
  
}