import React ,{Component} from 'react';
import './App.css';
import axios from 'axios'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { NavProvider } from './components/NavContext';

export default class App extends Component{
    constructor(props){
      super(props);
      this.state={
        themes:{
          light: {
            color: '#000000',
            backgroundColor: '#ffffff',
            fontSize:'25px'
          },
          dark: {
            color: '#ffffff',
            backgroundColor: '#000000',
            fontSize:'25px'

          }
      },
      wines:[],
      isLoaded:false

    }
  }
 
  async  getWines(){
    let url = 'http://myapi-profstream.herokuapp.com/api/61fcf4/wines'
    try{
      const results = await axios.get(url);
      console.log(results);
      this.setState({wines:results});
      this.setState({isLoaded:true})
    }
    catch (e){
      console.log(e);
    }
  }
  componentDidMount(){

    //  http://myapi-profstream.herokuapp.com/api/61fcf4/wines
        this.getWines();
    }
  render(){
    if(this.state.isLoaded===true){

      return (
        <div className="App">
          <NavProvider value={this.state.themes.light}>
            <div className="header">
                <Header/>
                <Navbar data={this.state.wines}></Navbar>
                {this.props.children}

              </div>
              <div className='body'>
  
              </div>
            <div className="footer">
              <Footer/>
            </div>          
  
            
          </NavProvider>
        </div>
      );

      
    }
    else{
      return (
        <div className="App">
          <NavProvider value={this.state.themes.light}>
            <div className="header">
                <Header/>
              </div>
              <div className='body'>
  
              </div>
            <div className="footer">
              <Footer/>
            </div>          
  
            
          </NavProvider>
        </div>
      );
    }
   
  }
  
}

