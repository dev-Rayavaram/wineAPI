import React ,{Component} from 'react'
import {Route,Switch,NavLink,BrowserRouter as Router} from 'react-router-dom'
import AddWine from '../components/AddWine'
import DisplayWine from '../components/DisplayWines'
import {NavConsumer} from '../components/NavContext'

class Navbar extends Component{
  constructor(props){
    super(props);
    this.state={
      data:props.data
    }
  }
  render(){
   console.log("inside navbar ")
   console.log(this.state.data)
    return(
      <NavConsumer>
        {(context)=>{return(
          <Router>  
          <nav >
              <ul>
                <li>
                <NavLink to={{pathname:'/',params: {data:this.state.data.data }}} className='navLink' style={{backgroundColor:context.backgroundColor,color:context.color,fontSize:context.fontSize}} >Show Wines</NavLink>
              </li>
              <li>
                <NavLink to="/AddWine" className='navLink' style={{backgroundColor:context.backgroundColor,color:context.color,fontSize:context.fontSize}}>Add Product</NavLink>
              </li>
                </ul>
          </nav>
          <Switch>
              <Route exact path="/"  component={DisplayWine}>          
              </Route>
              <Route exact path="/AddWine" component={AddWine}>          
              </Route>
          </Switch>
          </Router>

        )
      }}
      </NavConsumer>
    )



  }

  
}

export default Navbar;