import React, { Component } from "react";
import "./frontpage.css";
import AOS from 'aos';
import { Link } from 'react-scroll';

AOS.init({})

class Frontpage extends Component {
  constructor() {
    super();
    this.state = {
      indexActive: 1,
      sticky: false,
    };
    
  }
    
  
  toggle(i) {
    if(this.state.indexActive === i){
      this.setState({ indexActive: 0});
    }else{
      this.setState({ indexActive: i});
    }
  }


  render() {

    return (
      <div className="wrapper">
      
      <section className="first-screen section section--no-pad-top" style={{backgroundImage: 'url(img/main_bg.png'}} id="main">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 data-aos="fade-up" data-aos-anchor="#main" data-aos-delay="200">GODL Coin <span>on the Ethereum network</span></h1>
              <p data-aos="fade-up" data-aos-anchor="#main" data-aos-delay="300">
                              An innovative protocol which rewards holders with ETH (ERC-20) tokens <u>automatically</u>
              <br/><span data-aos="fade-up" data-aos-anchor="#main" data-aos-delay="300">
               Audit By  <Link href="#docs" to="docs" spy={true} smooth={true} duration={1000}>TechRate</Link>  & <a target="_blank" rel="noreferrer" href="https://tokensniffer.com/token/0x7f509465c38b66bdecec2cfdc842e11809cc8357">TokenSniffer</a>
              </span>
              </p>

            </div>
          </div>
          
                  <div className="row">
                      <div className="col">
                          <div className="first-screen__btns-wrap" data-aos="fade-up" data-aos-anchor="#main" data-aos-delay="500">
  
                              <a href="https://app.uniswap.org/#/swap?outputCurrency=0x7f509465C38B66BDeCEC2CfDc842e11809CC8357" className="btn btn--medium btn--orange">Buy GODL</a>
  
                              <a href="https://www.dropbox.com/s/6pmqijucy721vo5/godl-whitepaper.pdf" className="btn btn--medium btn--white">Whitepaper</a>
  
                              <a href="https://www.dextools.io/app/uniswap/pair-explorer/0x4aedd28e59cdb3043e269f1d51cbdddf23be56bb" className="btn btn--medium btn--blue">Live Chart</a>

                              <a href="/#/tracker" className="btn btn--medium btn--gold">View Earnings</a>

                          </div>
                      </div>
                  </div>
  
                  <div className="row">
                      {/* <div className="col-lg-6 col-sm-6">
                          <img src="img/eth-logo.png" data-aos="fade-left" data-aos-delay="600" alt="Ethereum logo" style={{width: '100%'}} />
                      </div>
                      <div className="col-lg-6 col-sm-6">
                          <img src="img/logo.png" data-aos="fade-left" data-aos-delay="600" alt="GODL dog logo" style={{width: '100%'}}  />
                      </div> */}

                      <div className="Atom">
                        <div className="Atom-nucleus">
                          <img alt="GODL logo" src="img/logo.png" />                          
                        </div>

                        <div className="Atom-orbit Atom-orbit--left Atom-orbit--foreground">
                          <div className="Atom-electron">
                            <img alt="Polygon" src="img/matic-token-icon.svg" />                            
                          </div>
                        </div>
                        <div className="Atom-orbit Atom-orbit--right Atom-orbit--foreground">
                          <div className="Atom-electron">
                            <img alt="ethereum" src="img/eth-diamond-purple-purple.png" />
                          </div>
                        </div>
                        <div className="Atom-orbit Atom-orbit--top Atom-orbit--foreground">
                          <div className="Atom-electron">
                            <img alt="Binance"  src="img/bnb_logo.png" />
                          </div>
                        </div>
                        <div className="Atom-orbit Atom-orbit--bottom Atom-orbit--foreground">
                          <div className="Atom-electron">
                            <img alt="Shibarium" src="img/Shiba_Inu_coin_logo.png" />
                          </div>
                        </div>


                      </div>


                  </div>
  
        </div>
      </section>
    
      <section className="about section section--no-pad-bot" id="about" style={{backgroundImage: 'url(img/bg_1.jpg', backgroundPosition: 'left top'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img data-aos="fade-right" src="img/about-img-1.png" className="img-responsive" alt="" />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="section-header section-header--tire section-header--small-margin">
                <h4>About GODL</h4>
                <h2>
                  GODL Coin <span>A TIKI fork on Ethereum</span>
                </h2>
              </div>
  
              <p className="text-margin-bot">
                              GODL automatically distributes ETH to you without having to claim manually
                              from the rewards pool. Distribution happens approximately every 1 hour and rewards are
                              proportional to the percentage of tokens you own in the total supply.
              </p>
  
              <div className="video">
                <a href="https://www.youtube.com/watch?v=lANUSdHg2oc" className="video__btn popup-youtube">
                  <img src="img/play.svg" alt="" />
                </a>
                <div className="video__text">Watch video on why ETH is bullish</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="partners-logo__block" data-aos="fade-up">
                              <div className="partners-logo__item">
                                  <a href="https://coinmarketcap.com/currencies/godl/" target="_blank" rel="noreferrer">
                    <img src="img/cmc-logo.png" alt="CoinMarketCap logo" />
                  </a>
                </div>
  
                              <div className="partners-logo__item">
                                  <a href="https://app.uniswap.org/#/swap?outputCurrency=0x7f509465C38B66BDeCEC2CfDc842e11809CC8357" target="_blank" rel="noreferrer">
                                      <img src="img/uniswap-logo.png" alt="Uniswap logo" />
                                  </a>
                              </div>
  
                              <div className="partners-logo__item">
                                  <a href="https://etherscan.io/token/0x7f509465c38b66bdecec2cfdc842e11809cc8357" target="_blank" rel="noreferrer">
                                      <img src="img/etherscan-logo.png" alt="Etherscan logo" />
                                  </a>
                              </div>
  
                              <div className="partners-logo__item">
                                  <a href="https://www.coingecko.com/en/coins/godl" target="_blank" rel="noreferrer">
                                      <img src="img/coingecko-logo.png" alt="CoinGecko logo" /> 
                                  </a>
                              </div>
                          </div>
            </div>
          </div>
        </div>
      </section>
  
          <section className="section infoblock" style={{backgroundImage: 'url(img/infoblock_bg.png)'}} id="stat">
  
              <div className="container">
                  <div className="row">
                      <div className="col">
                          <div className="section-header section-header--center section-header--white section-header--medium-margin">
                              <h4>the godlen rule</h4>
                              <h2>The GODL Transaction Fees</h2>
                          </div>
  
                          <div className="infoblock__list">
                              <div className="infoblock__item" data-aos="fade-up" data-aos-delay="100">
                                  <p>
                                      Rewards Tax
                                  </p>
                                  <span style={{color: '#f3d667'}}>5%</span>
                              </div>
                              <div className="infoblock__item" data-aos="fade-up" data-aos-delay="200">
                                  <p>
                                      Liquidity Tax
                                  </p>
                                  <span style={{color: '#f9778a'}}>3%</span>
                              </div>
                              <div className="infoblock__item" data-aos="fade-up" data-aos-delay="300">
                                  <p>
                                      Minimum tokens for rewards
                                  </p>
                                  <span style={{color: '#77c0f6'}}>10k GODL</span>
                              </div>
                              <div className="infoblock__item" data-aos="fade-up" data-aos-delay="300">
                                  <p>
                                      Rewards claiming
                                  </p>
                                  <span style={{color: '#77c0f6'}}>automatic</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
  
          <section className="section services" id="services" style={{backgroundImage: 'url(img/bg_4.png)'}}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section-header section-header--center section-header--medium-margin">
                <h4>the digital godl</h4>
                <h2>Why buy GODL coin?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4" data-aos="fade-left" data-aos-delay="200">
              <div className="service-item">
                <div className="service-item__icon">
                  <img src="img/services-icon-1.svg" alt="" />
                </div>
                <div className="service-item__title">Ethereum-powered</div>
                <p>
                                  Ethereum is a proven network which powers thousands of
                                  DeFi applications. It is also more future-proof compared to
                                  BSC since no single entity controls Ethereum.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4" data-aos="fade-left" data-aos-delay="300">
              <div className="service-item">
                <div className="service-item__icon">
                  <img src="img/services-icon-2.svg" alt="" />
                </div>
                <div className="service-item__title">Automatic ETH Distribution</div>
                <p>
                                  Claiming rewards manually is time-consuming and easy to forget.
                                  The GODL protocol solves this by depositing ETH straight into your
                                  wallet without any action on your part.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4" data-aos="fade-left" data-aos-delay="400">
              <div className="service-item">
                <div className="service-item__icon">
                  <img src="img/services-icon-3.svg" alt="" />
                </div>
                <div className="service-item__title">Low Transaction Tax</div>
                <p>
                                  By lowering the transaction tax (only 8%), we encourage more market
                                  participants to trade our token which leads to a higher trading volume
                                  and therefore, more rewards.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4" data-aos="fade-left" data-aos-delay="500">
              <div className="service-item">
                <div className="service-item__icon">
                  <img src="img/services-icon-4.svg" alt="" />
                </div>
                <div className="service-item__title">Anti-Whale Dumps</div>
                <p>
                                  Each sell is capped at 0.1% of total supply to prevent whales from dumping
                                  and avoid panic selling. The contract will sell GODL in small batches
                                  to procure ETH rewards without disrupting market activity.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4" data-aos="fade-left" data-aos-delay="600">
              <div className="service-item">
                <div className="service-item__icon">
                  <img src="img/services-icon-5.svg" alt="" />
                </div>
                <div className="service-item__title">Open Source Test Cases</div>
                <p>
                                  In addition to the audit, our team has provided test cases with 95% coverage{' '}
                                  <a href="https://github.com/godlcoin/godlcoin-contract" target="_blank" rel="noreferrer">in GitHub</a>{' '}
                                  to make it convenient for third-parties to verify and reproduce the contract logic.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4" data-aos="fade-left" data-aos-delay="700">
              <div className="service-item">
                <div className="service-item__icon">
                  <img src="img/services-icon-6.svg" alt="" />
                </div>
                <div className="service-item__title">Anti-Bot</div>
                <p>
                                  We have integrated with the Fair Token Project&apos;s{' '}
                                  <a href="https://antibot.fairtokenproject.com/" target="_blank" rel="noreferrer">AntiBot library</a> to ban
                                  bot activity (such as front-running) in our token.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section className="section map" id="map" style={{ backgroundImage: 'url(img/bg_2.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section-header section-header--center section-header--medium-margin">
                <h4>Go for godl</h4>
                <h2>Road Map</h2>
              </div>
              <div className="roadmap" data-aos="fade-up">
                <div className="roadmap__item roadmap__item--past">
                  <div className="roadmap__item-title">
                                      Phase 1
                  </div>
  
                  <div className="roadmap__item-marker">
                  </div>
  
                  <div className="roadmap__item-text">
                                      <ul className="data__list">
                                          <li>Design and deploy initial website</li>
                                          <li>Focus on accelerating community growth</li>
                                          <li>Commence heavy marketing</li>
                                          <li>Presale</li>
                                          <li>Launch</li>
                                      </ul>
                  </div>
                </div>
                
                <div className="roadmap__item roadmap__item">
                  <div className="roadmap__item-title">
                                      Phase 2
                  </div>
  
                  <div className="roadmap__item-marker">
                  </div>
  
                  <div className="roadmap__item-text">
                                      <ul className="data__list">
                                          <li>CoinGecko Listing</li>
                                          <li>CoinMarketCap Listing</li>
                                          <li>2,500 Telegram Members</li>
                                          <li>Continue heavy marketing</li>
                                      </ul>
                  </div>
                </div>
  
                <div className="roadmap__item">
                  <div className="roadmap__item-title">
                                      Phase 3
                  </div>
  
                  <div className="roadmap__item-marker">
                  </div>
  
                  <div className="roadmap__item-text">
                                      <ul className="data__list">
                                          <li>Find new use cases</li>
                                          <li>Continue heavy marketing</li>
                                          <li>5,000 Telegram Members</li>
                                          <li>Plan a macro updated roadmap for international adoption</li>
                                      </ul>
                  </div>
                </div>
  
                <div className="roadmap__item">
                  <div className="roadmap__item-title">
                                      Phase 4
                  </div>
  
                  <div className="roadmap__item-marker">
                  </div>
  
                  <div className="roadmap__item-text">
                                      <ul className="data__list">
                                          <li>10,000 Telegram members</li>
                                          <li>Onboard famous and novel endorsements</li>
                                          <li>Get international marketing firms to spearhead different communities</li>
                                      </ul>
                  </div>
                </div>
  
                <div className="roadmap__item">
                  <div className="roadmap__item-title">
                                      Phase 5
                  </div>
  
                  <div className="roadmap__item-marker">
                  </div>
  
                  <div className="roadmap__item-text">
                                      Retirement.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
          <section id="docs" className="docs section" style={{backgroundImage: 'url(img/ourfiles_bg.png)' }}>
              <div className="container">
                  <div className="row">
                      <div className="col">
                          <div className="section-header section-header--white section-header--center section-header--medium-margin">
                              <h4>the godl standard</h4>
                              <h2>Documents</h2>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-6 col-md-12" data-aos="fade-left" data-aos-delay="100">
                          <a href="https://www.dropbox.com/s/6pmqijucy721vo5/godl-whitepaper.pdf" className="doc">
                              <div className="doc__name">
                                  The GODL whitepaper
                              </div>
                          </a>
                      </div>
                      <div className="col-lg-6 col-md-12" data-aos="fade-left" data-aos-delay="100">
                          <a href="https://www.dropbox.com/s/dqyqwyqd3lumdsh/godl-audit.pdf" className="doc">
                              <div className="doc__name">
                                  Contract audit findings
                              </div>
                          </a>
                      </div>
                  </div>
              </div>
          </section>
  
          <section className="section process" style={{backgroundImage: 'url(img/bg_4.png)' }} id="how_to_buy">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section-header section-header--center section-header--medium-margin">
                <h4>hodl the godl</h4>
                <h2>How to buy GODL</h2>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-sm-6 col-xl-3">
              <div className="process-item" style={{ border: '3px solid #16bf86' }} >
                <div className="process-item__icon"><img src="img/pr-icon-1.svg" alt="" /></div>
                <div className="process-item__title">Step 1:<p>Buy ETH</p></div>
                              <p>
                                  The easiest way to buy ETH this is through a centralized exchange (CEX) like{' '}
                                  <a href="https://www.binance.com/en" target="_blank" rel="noreferrer">Binance</a> or <a href="https://www.coinbase.com/" target="_blank" rel="noreferrer">Coinbase.</a>
                              </p>
                <div className="process-item__arrow" style={{ backgroundColor: '#16bf86' }}><img src="img/arrow.png" alt="" /></div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="process-item" style={{ border: '3px solid #5775cf' }} >
                <div className="process-item__icon"><img src="img/pr-icon-2.svg" alt="" /></div>
                <div className="process-item__title">Step 2:<p>Install a wallet</p></div>
                <p>
                                  The commonly used wallet is a Chrome extension called <a href="http://metamask.io" target="_blank" rel="noreferrer">Metamask</a>.
                                  DO NOT share your private keys!
                              </p>
                <div className="process-item__arrow" style={{ backgroundColor: '#5775cf' }}><img src="img/arrow.png" alt="" /></div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="process-item" style={{ border: '3px solid #f2718b' }}>
                <div className="process-item__icon"><img src="img/pr-icon-3.svg" alt="" /></div>
                <div className="process-item__title">Step 3:<p>Send ETH to wallet</p></div>
                <p>
                                  Transfer the ETH from Step 1 to your Metamask wallet. Ensure that you are sending to <strong>Ethereum ERC-20</strong> network!
                              </p>
                <div className="process-item__arrow" style={{ backgroundColor: '#f2718b' }}><img src="img/arrow.png" alt="" /></div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3" >
              <div className="process-item" style={{ border: '3px solid #ff903e' }}>
                <div className="process-item__icon"><img src="img/pr-icon-4.svg" alt="" /></div>
                <div className="process-item__title">Step 4:<p>Buy in Uniswap</p></div>
                <p>
                                  You may now swap your ETH for some GODL in <a href="https://app.uniswap.org/#/swap?outputCurrency=0x7f509465C38B66BDeCEC2CfDc842e11809CC8357" target="_blank" rel="noreferrer">Uniswap</a>.
                                  You will usually need to adjust the slippage to 5-10%.
                              </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
          <section className="section data section--no-pad-top" id="token" style={{ backgroundImage: 'url(img/bg_2.jpg)' }}>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-6">
                          <div className="section-header section-header--tire section-header--medium-margin">
                              <h4>the godlen ratio</h4>
                              <h2>Tokenomics</h2>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col">
  
                          <div className="data-progress" data-aos="fade-up">
                              <div className="data-progress__item" style={{ boxShadow: '0 0 15px #f2718b', backgroundColor: '#f2718b', width: '10%' }}>
                                  <p><span>5%</span> - <a href="https://etherscan.io/address/0x94dcbf0a400c9536343a73bf8bcbd6d8c2290f79" target="_blank" rel="noreferrer">Team</a></p>
                              </div>
                              <div className="data-progress__item" style={{ boxShadow: '0 0 15px #ff903e', backgroundColor: '#ff903e', width: '20%' }}>
                                  <p><span>13.33%</span> - <a href="https://etherscan.io/address/0x1dad736b39462dd297453b31aecf0819c1fd4558" target="_blank" rel="noreferrer">Private sale</a></p>
                              </div>
                              <div className="data-progress__item" style={{ boxShadow: '0 0 15px #16bf86', backgroundColor: '#16bf86',  width: '60%' }}>
                                  <p><span>76.67%</span> - Public sale</p>
                              </div>
                              <div className="data-progress__item" style={{ boxShadow:' 0 0 15px #e8903e',  backgroundColor: '#e8903e', width: '10%' }}>
                                  <p><span>5%</span> - <a href="https://etherscan.io/address/0xefdeca2bc174118832279ea72254fc5e2c0c5117" target="_blank" rel="noreferrer">Marketing</a> &amp; <a href="https://etherscan.io/address/0xe950617d54486a3b9e792f9018908d05c9f88ed4" target="_blank" rel="noreferrer">Partners</a></p>
                              </div>
                          </div>
  
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
  
                          <ul className="data__list">
                              <li>
                                  <b>Symbol:</b>
                                  GODL
                              </li>
                              <li>
                                  <b>Network:</b>
                                  Ethereum ERC20
                              </li>
                              <li>
                                  <b>Contract Address:</b>
                                  <a href="https://etherscan.io/token/0x7f509465c38b66bdecec2cfdc842e11809cc8357" target="_blank" rel="noreferrer">0x7f509465c38b66bdecec2cfdc842e11809cc8357</a>
                              </li>
                              <li>
                                  <b>Total supply:</b>
                                  1 billion
                              </li>
                          </ul>
  
                          <div className="data__info">
                              <div className="data__info-item">
                                  Soft cap
                                  <b style={{ color: '#16bf86' }}>75 ETH</b>
                              </div>
                              <div className="data__info-item">
                                  Hard cap
                                  <b style={{ color: '#5775cf' }}>100 ETH</b>
                              </div>
                              <div className="data__info-item">
                                  Cost of 1 GODL Token
                                  <b style={{ color: '#f2718b' }}>0.0000002666 ETH</b>
                              </div>
                          </div>
  
                          <ul className="data__list">
                              <li>
                                  <b>% of presale going to liquidity:</b>
                                  80%
                              </li>
                              <li>
                                  <b>Liquidity lock duration:</b>
                                  Every 6 months
                              </li>
                              <li>
                                  <b>Min/Max contribution limits:</b>
                                  0.01 ETH / 0.5 ETH
                              </li>
                          </ul>
  
                          <a href="https://app.uniswap.org/#/swap?outputCurrency=0x7f509465C38B66BDeCEC2CfDc842e11809CC8357" className="btn btn--blue btn--medium">Buy GODL</a>
                      </div>
                      <div className="col-lg-6">
                          <div className="data__images">
                              <div className="data__images-logo">
                                  <img src="img/logo2.png" alt="" />
                                  <p>GODL Coin</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
  
          <section className="section contact" style={{ backgroundImage: 'url(img/footer_bg.png)' }} id="faq">
              <div className="container">
                  <div className="row">
                      <div className="col">
                          <div className="section-header section-header--white section-header--center section-header--medium-margin">
                              <h4>FAQ</h4>
                              <h2>Frequently Asked Questions</h2>
                          </div>
  
                          <ul className="accordion">
                              <li>
                                  <h3 className={this.state.indexActive === 1 ? 'active' : ''} onClick={ () => this.toggle(1)} >What is the use case of GODL?</h3>
                                  <p style={{display: this.state.indexActive === 1  && 'block'}}>
                                      Nothing really other than to receive ETH rewards. We do not want to be another project that
                                      creates another crypto wallet, another charting tool, donates to charity, etc.
                                  </p>
                              </li>
                              <li>
                                  <h3 className={this.state.indexActive === 2 ? 'active' : ''} onClick={()=>this.toggle(2)}  >Is GODL a TIKI fork?</h3>
                                  <p style={{display: this.state.indexActive === 2  && 'block'}}>
                                      Yes. GODL was based on TIKI. The major differences are: 1.) GODL runs on Ethereum instead of BSC
                                      2.) GODL redistributes ETH rewards instead of BNB and 3.) some aspects of the tokenomics were changed.
                                  </p>
                              </li>
                              <li>
                                  <h3 className={this.state.indexActive === 3 ? 'active' : ''} onClick={()=>this.toggle(3)} >Why is the rewards tax lower than TIKI&apos;s?</h3>
                                  <p style={{display: this.state.indexActive === 3  && 'block'}}>
                                      TIKI&apos;s transaction fee consists of a 10% rewards tax, 5% liquidity tax, and a 3% sell tax. This means
                                      that the coin price needs to increase by 33 percentage points just for a new buyer to breakeven! This
                                      discourages a lot of buyers therefore reducing the trading volume drastically. Since the ETH rewards
                                      are generated from the transactions, it is in our best interest to keep fees low to encourage
                                      market participants to trade GODL.
                                  </p>
                              </li>
                              <li>
                                <h3 className={this.state.indexActive === 4 ? 'active' : ''} onClick={()=>this.toggle(4)} >Who is the 0x...488d wallet that keeps on selling?</h3>
                                <p style={{display: this.state.indexActive === 4  && 'block'}}>
                                                    Do not panic. This is address is commonly known as the Uniswap router. The contract is programmed to sell GODL
                                  after it accumulates past a certain threshold in order to procure the ETH rewards. Without this selling,
                                  there would be no ETH rewards and that would be sad.
                                </p>
                              </li>
                            <li>
                              <h3 className={this.state.indexActive === 5 ? 'active' : ''} onClick={()=>this.toggle(5)} >Why have I not received my ETH yet despite being eligible for rewards?</h3>
                              <p style={{display: this.state.indexActive === 5  && 'block'}}>
                                This is because the contract has not delivered your rewards yet. The contract delivers rewards to eligible holders
                                in a round-robin fashion. It works by charging an extra amount of gas for each transaction in order
                                to distribute the rewards of those next in line in the round-robin. However, as you may have deduced, this distribution
                                only works optimally if there are many transactions (i.e. high volume). If volume is low, then the contract can only
                                deliver to fewer addresses. Do not fret because your rewards will keep on accumulating until it gets delivered so
                                just be patient and HODL that GODL!
                              </p>
                              <p style={{display: this.state.indexActive === 5  && 'block'}}>
                              NOTE: Manual claiming of rewards is also possible but gas fees will be shouldered by the claimant.
                            </p>
                        </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="copyright">© 2021 - HODL the GODL</div>
            </div>
            <div className="col-lg-3 col-md-6">
              <ul className="footer-menu">
                <li className="footer-menu__item">
                  <a href="#about" className="footer-menu__link">About</a>
                </li>
                              <li className="footer-menu__item">
                                  <a href="#stat" className="footer-menu__link">Statistics</a>
                              </li>
                <li className="footer-menu__item">
                  <a href="#services" className="footer-menu__link">Features</a>
                </li>
                <li className="footer-menu__item">
                  <a href="#map" className="footer-menu__link">Road Map</a>
                </li>
                              <li className="footer-menu__item">
                                  <a href="#docs" className="footer-menu__link">Whitepaper</a>
                              </li>
                              <li className="footer-menu__item">
                                  <a href="#how_to_buy" className="footer-menu__link">How To Buy</a>
                              </li>
                <li className="footer-menu__item">
                  <a href="#token" className="footer-menu__link">Tokenomics</a>
                </li>
                <li className="footer-menu__item">
                  <a href="#faq" className="footer-menu__link">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="social-block">
                <div className="social-block__title">
                  Join our community
                </div>
                <ul className="social-list">
                  <li className="social-list__item">
                    <a href="https://twitter.com/GodlCoinETH" target="_blank" rel="noreferrer" className="social-list__link">
                      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="svg-inline--fa fa-twitter fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                    </a>
                  </li>
                  <li className="social-list__item">
                    <a href="https://t.me/GodlCoin" target="_blank" rel="noreferrer" className="social-list__link">
                      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram" className="svg-inline--fa fa-telegram fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path></svg>
                    </a>
                  </li>
                  <li className="social-list__item">
                      <a href="https://godlcoin.medium.com/" target="_blank" rel="noreferrer" className="social-list__link">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="medium-m" className="svg-inline--fa fa-medium-m fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"></path></svg>                      
                      </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
            
    )
  }
}

export default Frontpage;
