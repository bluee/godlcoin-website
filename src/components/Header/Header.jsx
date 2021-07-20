import React, { Component }  from "react";
import "./header.css";
import { Link } from 'react-scroll';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
    };
    
    this.handleScroll = this.handleScroll.bind(this);
  }

  fixedMenu(){
    let fixedMenu = this.state.fixedMenu
    this.setState({fixedMenu: !fixedMenu});
  }

  
  handleScroll(event) {
    const navbarHeight = document.getElementById('header').offsetHeight
    const st = window.scrollY;

    if (st >= navbarHeight) {
        this.setState({sticky: true});
    } else {
      this.setState({sticky: false});
    }
  }  

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }
    
  render(){
  return (
      <React.Fragment>
      <header id="header" className={this.state.sticky ? 'sticky header' : 'header'} >
        <Link href="#home" className="logo" to="root" spy={true} smooth={true} duration={1000}>          
          <div className="logo__img"></div>
          <div className="logo__title">GODL Coin</div>
        </Link>
  
        <ul className="menu">
          <li className="menu__item">
            <Link href="#about" className="menu__link" activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                About
            </Link>
          </li>
          <li className="menu__item">
              <Link href="#stat" className="menu__link" activeClass="active" to="stat" spy={true} smooth={true} duration={1000}>
                Statistics
              </Link>
          </li>
          <li className="menu__item">
            <Link href="#services" className="menu__link" activeClass="active" to="services" spy={true} smooth={true} duration={1000}>
              Features
            </Link>
          </li>
          <li className="menu__item">
            <Link href="#map" className="menu__link" activeClass="active" to="map" spy={true} smooth={true} duration={1000}>
              Road Map
            </Link>
          </li>
          <li className="menu__item">
            <Link href="#docs" className="menu__link" activeClass="active" to="docs" spy={true} smooth={true} duration={1000}>
            Whitepaper
            </Link>
          </li>
          <li className="menu__item">
            <Link href="#how_to_buy" className="menu__link" activeClass="active" to="how_to_buy" spy={true} smooth={true} duration={1000}>
              How To Buy
            </Link>
          </li>
          <li className="menu__item">
            <Link href="#token" className="menu__link" activeClass="active" to="token" spy={true} smooth={true} duration={1000}>
              Tokenomics
            </Link>
          </li>
          <li className="menu__item">
            <Link href="#faq" className="menu__link" activeClass="active" to="faq" spy={true} smooth={true} duration={1000}>
              FAQ
            </Link>
          </li>
        </ul>
  
        <div className="header__right">
          <a href="https://t.me/GodlCoin" target="_blank" rel="noreferrer" className="telegram-link">
            <img src="img/telegram-link.png" alt="Telegram logo" />
          </a>
  
             
          {/* 
          <!-- TODO: Show when ZH translation is available -->          
          <select className="select">
            <option value="zh">zh</option>
            <option value="en">en</option>
          </select>
          */}
  
          <a href="https://app.uniswap.org/#/swap?outputCurrency=0x7f509465C38B66BDeCEC2CfDc842e11809CC8357" className="btn-sign-in">Buy GODL</a>
        </div>
  
        <div className="btn-menu" onClick={()=>this.fixedMenu()}>
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
      </header>

      <div className={this.state.fixedMenu ? 'fixed-menu open' : 'fixed-menu'}>
        <div className="fixed-menu__header">
          <Link href="#home" className="logo logo--color" to="root" spy={true} smooth={true} duration={1000}>          
            <div className="logo__img"></div>
            <div className="logo__title">GODL Coin</div>
          </Link>
    

          <div className="btn-close" onClick={()=>this.fixedMenu()}>
            <svg  x="0px" y="0px" viewBox="0 0 47.971 47.971" style={{enableBackground:'new 0 0 47.971 47.971'}} width="512px" height="512px">
                <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" fill="#006DF0"/></svg>
          </div>
        </div>
    
        <div className="fixed-menu__content">
          <ul className="mob-menu">
            <li className="mob-menu__item">
              <Link onClick={()=> this.fixedMenu()} href="#about" className="mob-menu__link" activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                About
              </Link>
            </li>
            <li className="mob-menu__item">
                <Link onClick={()=> this.fixedMenu()} href="#stat" className="mob-menu__link" activeClass="active" to="stat" spy={true} smooth={true} duration={1000}>
                  Statistics
                </Link>
            </li>
            <li className="mob-menu__item">
              <Link onClick={()=> this.fixedMenu()} href="#services" className="mob-menu__link" activeClass="active" to="services" spy={true} smooth={true} duration={1000}>
                Features
              </Link>
            </li>
            <li className="mob-menu__item">
              <Link onClick={()=> this.fixedMenu()} href="#map" className="mob-menu__link" activeClass="active" to="map" spy={true} smooth={true} duration={1000}>
                Road Map
              </Link>
            </li>
            <li className="mob-menu__item">
                <Link onClick={()=> this.fixedMenu()} href="#docs" className="mob-menu__link" activeClass="active" to="docs" spy={true} smooth={true} duration={1000}>
                  Whitepaper
                </Link>
            </li>
            <li className="mob-menu__item">
                <Link onClick={()=> this.fixedMenu()} href="#how_to_buy" className="mob-menu__link" activeClass="active" to="how_to_buy" spy={true} smooth={true} duration={1000}>
                  How To Buy
                </Link>
            </li>
            <li className="mob-menu__item">
              <Link onClick={()=> this.fixedMenu()} href="#token" className="mob-menu__link" activeClass="active" to="token" spy={true} smooth={true} duration={1000}>
                Tokenomics
              </Link>
            </li>
            <li className="mob-menu__item">
              <Link onClick={()=> this.fixedMenu()} href="#faq" className="mob-menu__link" activeClass="active" to="faq" spy={true} smooth={true} duration={1000}>
                FAQ
              </Link>
            </li>
          </ul>
  
          {/* 
          <!-- TODO: Show when ZH translation is available -->          
          <select className="select">
            <option value="zh">zh</option>
            <option value="en">en</option>
          </select> 
          */}
    
          <div className="btn-wrap">
            <a href="https://app.uniswap.org/#/swap?outputCurrency=0x7f509465C38B66BDeCEC2CfDc842e11809CC8357" className="btn-sign-in">Buy GODL</a>
          </div>
        </div>
      </div>	 
    </React.Fragment>     
    )
  }

}

export default Header;
