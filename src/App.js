import React, { Component } from 'react';
import NavBar from './components/navbar';
import LeftMenu from './components/leftmenu';
import  Grid  from '@material-ui/core/Grid';
import Dashboard from './components/dashboard';
import List from './components/list';
import Setings from './components/setings';
class App extends Component {

state ={
  currentComp: ''
}


  changeState=(param)=>
  { switch(param)
    {
      case 'dashboard': 
         this.setState({currentComp: <Dashboard/>});
         break;
      case "list": 
      this.setState({currentComp: <List/>});
         break;
      case "setings": 
      this.setState({currentComp: <Setings/>});
        break;

      default: 
      this.setState({currentComp: <div>no comment</div>});
    }
  };

render() {
  
      
    return (
      <div >
          <NavBar/>
                      <Grid container  spacing={16}>
                              <Grid item xs={3}>
                                 <LeftMenu changeState={this.changeState}/>
                              </Grid>

                              <Grid item xs={9}>
                                 {this.state.currentComp}
                              </Grid>
                      </Grid>
      </div>
    );
  }
}
export default App;
