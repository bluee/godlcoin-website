import React, { Component }  from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

class AppHeader extends Component {
  constructor() {
    super();
    this.state = {
    };
    
  }
    
  render(){
    return (
      <div className="row justify-content-center">
          <div className="col-12">
              <a href="/" className="logo">
                  <div className="logo__img"></div>
                  <div className="logo__title">GODL Coin</div>
              </a>
          </div>
        
          <div className="appNav">
              <NavLink activeClassName="active" className="appNavItem" to="/tracker">Earnings</NavLink>
              <NavLink activeClassName="active" className="appNavItem" to="/tasks">Tasks</NavLink>
              <span className="appNavItem" style={{color:'#cacaca'}}>Estimate <sup style={{fontSize:'8px',color:'#ffffff', background: '#ffb300', padding: '2px', borderRadius: '5px', marginLeft: '3px'}}>Soon</sup></span>
              <a target="_blank" rel="noreferrer" className="appNavItem" href="https://www.dextools.io/app/uniswap/pair-explorer/0x4aedd28e59cdb3043e269f1d51cbdddf23be56bb">Chart<sup>↗</sup></a>
          </div>
      </div>  
    )
  }

}

export default AppHeader;
