import React, { Component } from "react";
import "./leftmenu.css";

class LeftMenu extends Component {
  
  render() {
    return (
      <div className="left-menu">

       <button onClick={()=>this.props.changeState('dashboard')}> Dashboard</button> 
       <button onClick={()=>this.props.changeState('list')}>Settings</button>
       <button onClick={()=>this.props.changeState('setings')}>list</button>  
     
       </div>
    );
  }
}

export default LeftMenu;




