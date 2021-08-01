import React from "react";
import { useEffect, useState, useRef} from "react";
import "./tracker.css";
import "./coin.css";
import {
    getSymbol,
    getTotalDividendsDistributed,
    getAccountDividendsInfo,
    getAccountDividendsInfoAtIndex,
    getNumberOfDividendTokenHolders,
    getLastProcessedIndex,
    balanceOf,
    getCurrentTokenPrice,
    getCurrentWalletConnected,
    decimals,
    fromWei,
    shortenAddress,
    isAddress,
    getTxns,
    getEthPrice,
} from "./Godl.js";
import { TabSelector } from './TabSelector';
import { CoinLoader } from './CoinLoader';
import { useTabs, TabPanel } from "react-headless-tabs"
import ProgressBar from "./Progress-bar";
import AppHeader from "../Header/AppHeader";

const PrintGlobalDividends = ({data}) => (
    <React.Fragment>
        TOTAL PAID
        <div className="text_label">{data.toLocaleString(undefined, {maximumFractionDigits:3})} ETH</div>
    </React.Fragment>
);

const PrintAddress = ({data}) => (
    <div className="tableView">
        <div className="leftRow"><b>Address: </b></div>
        { data.substring(0,2) === "0x" ? <div className="rightRow"><a href={"https://etherscan.io/address/" + data} target="_blank" rel="noreferrer">{data.length === 42 ? shortenAddress(data) : ''}</a></div>
        : 'No connection to the network.' }
    </div>
);

const PrintBalance = ({data}) => (
    <div className="tableView">
        <div className="leftRow"><b>GODL Balance: </b></div>
        <div className="rightRow">{data}</div>
    </div>
);

const PrintIndex = ({data}) => (
    <div className="tableView">
        <div className="leftRow"><b>Index: </b></div>
        <div className="rightRow">{data}</div>
    </div>
);

const PrintLastProcessedIndex = ({data}) => (
    <div className="tableView">
        <div className="leftRow"><b>Last processed index:</b></div>
        <div className="rightROw">{data}</div>
    </div>
);

const PrintDividends = ({data}) => (
    <div className="tableView">
        <div className="leftRow"><b>Withdrawable dividends:</b></div>
        <div className="rightROw">{data.toLocaleString(undefined, {maximumFractionDigits:6})} ETH</div>
    </div>
);

const PrintTotalDividends = ({data}) => (
    <div className="tableView">
        <div className="leftRow"><b>Total user dividends:</b> </div>
        <div className="rightROw">{data.toLocaleString(undefined, {maximumFractionDigits:6})} ETH</div>
    </div>
);

const PrintClaimTime = ({data}) => (
    <div className="tableView">
        <div className="leftRow"><b>Last claim time:</b></div>
        <div className="rightRow">{(new Date(data * 1000)).toLocaleString()}</div> 
    </div>
);

const PrintNextClaimTime = ({data}) => (
    <div className="tableView">
        <div className="leftRow"><b>Next claim time:</b></div>
        <div className="rightRow">{(new Date(data * 1000)).toLocaleString()}</div>
    </div>
);

const PrintIterationsUntilProcessed = ({data}) => (
    <div className="tableView">
        <div className="leftRow"><b>Iterations until processed:</b></div>
        <div className="rightRow">{data}</div>
    </div>);

const PrintReadyTx = ({ data }) => (
    data && data.map((tx, i)=>{
        return(
            <div className="card" key={i}>
                <div className="row">
                    <div className="col-4">
                        {(new Date(tx.date)).toLocaleString()}
                    </div>
                    <div className="col-4">
                        {tx.value} <small>ETH</small> <br/>
                        {tx.valueUsd} <small>USD</small>
                    </div>
                    <div className="col-4">
                        <a target="_blank" rel="noreferrer" href={"https://etherscan.io/tx/" + tx.txhashFull}>{tx.txhash}</a>
                    </div>
                </div>
            </div>
        )
    })
);

const GodlDapp = () => {

    const errorMessage = "No connection to the network.";

    const [symbol, setSymbol] = useState(errorMessage);
    const [totalDividendsDistributed, setTotalDividendsDistributed] = useState(errorMessage);
    const [accountDividendsInfo, setAccountDividendsInfo] = useState(errorMessage);
    const [numberOfDividendTokenHolders, setNumberOfDividendTokenHolders] = useState(errorMessage);
    const [lastProcessedIndex, setLastProcessedIndex] = useState(errorMessage);
    const [currentTokenPrice, setCurrentTokenPrice] = useState(errorMessage);
    const [addressBalance, setAddressBalance] = useState(errorMessage);
    const [info, setInfo] = useState("");
    const [invalidAddress, setInvalidAddress] = useState(false);

    const [selectedTab, setSelectedTab] = useTabs(['info','transactions']);  
    const [readyTx, setReadyTx] = useState("");
    const [ethPrice, setEthPrice] = useState("");

    let page = 0
    let timer = useRef();

    useEffect(() => {
        async function init() {
            const {address} = await getCurrentWalletConnected();

            const symbol = await getSymbol();
            setSymbol(symbol);

            const currentTokenPrice = await getCurrentTokenPrice();
            setCurrentTokenPrice(currentTokenPrice.godl.usd);

            const lastProcessedIndex = await getLastProcessedIndex();
            setLastProcessedIndex(lastProcessedIndex);

            const totalDividendsDistributed = await getTotalDividendsDistributed();
            setTotalDividendsDistributed(totalDividendsDistributed);

            const numberOfDividendTokenHolders = await getNumberOfDividendTokenHolders();
            setNumberOfDividendTokenHolders(numberOfDividendTokenHolders);
            
            await ethPriceFuc();  

            await getDividendInformation(address);  
        }
        init();
    }, []); // Called only once

    useEffect(() => {
        if( typeof accountDividendsInfo === 'object'){
            timer.current = setInterval( async() => {
                await getDividendInformation(accountDividendsInfo[0]);  
            }, 60000);
            return () => clearInterval(timer.current);          
        }
    }, [accountDividendsInfo]);

    const getDividendInformation = async(a, callback) => {
        if(a.substring(0,2) === "0x") {
            const accountDividendsInfo = await getAccountDividendsInfo(a);
            setAccountDividendsInfo(accountDividendsInfo);
            const addressBalance = await balanceOf(a);
            setAddressBalance(addressBalance);
            if(callback){
                callback(accountDividendsInfo[0])
            }
        } else {
            if(a <= 0) return;
            const accountDividendsInfo = await getAccountDividendsInfoAtIndex(a);
            setAccountDividendsInfo(accountDividendsInfo);
            const addressBalance = await balanceOf(accountDividendsInfo[0]);
            setAddressBalance(addressBalance);
            if(callback){
                callback(accountDividendsInfo[0])
            }
        }          
    }

    const ethPriceFuc = async () => {
        const eth = await getEthPrice()
        const ethPrice = eth.data.items[0].quote_rate
        setEthPrice(ethPrice);
    }

    let allTxnsData = []
    const getAllTx = async (address) => {
        const txns = await getTxns(page, address);
        
        // TODO: Add Pagination!
        // if(txns.data.pagination.total_count){
        //     var total_pages = Math.ceil(txns.data.pagination.total_count / 10)
        //     console.log('Total Page.....', total_pages - 1)
        // }
       
        var txnsData = txns.data.items
        allTxnsData.push(...txnsData);
    
        if(txns.data.pagination.has_more){
           page++
           getAllTx(address)
        }else{
           setAllTx(allTxnsData, address)
        }
    }

    const setAllTx = async (txns, address) => {
        
        if(txns){    
            var count = 0
            var readyTx = []
 
            txns.forEach((tx, i)=>{
                if(tx.to_address !== "0x7a250d5630b4cf539739df2c5dacb4c659f2488d" ){
                    return
                }
                tx.log_events.forEach((log, x)=>{

                    if(log.sender_address !== "0x71b299887dea1ffbc04f000d3645803f5631f83a" ){
                        return
                    }
                    if(log.decoded){
                        if(log.decoded.params){
                            log.decoded.params.forEach((param, y)=>{
                                if(param.name === "to" && param.type === "address" & param.value.toLowerCase() === address.toLowerCase() ){
                                    log.decoded.params.forEach((param, z)=>{
                                        if(param.name === "weiAmount"){
                                            let value = fromWei(param.value, decimals).toLocaleString(undefined, {maximumFractionDigits:6})
                                            let valUsd = (value * ethPrice).toLocaleString(undefined, {maximumFractionDigits:2})
                                            readyTx[count] = {
                                                value: value,
                                                txhash: shortenAddress(log.tx_hash),
                                                txhashFull: log.tx_hash,
                                                date: log.block_signed_at,
                                                valueUsd: valUsd
                                            }
                                            count++
                                        }
                                    })
                                }
                            })
                        }
                    }
                })
            }) 
            setReadyTx(readyTx)
        }
    }
    

    const onInfoPressed = async () => {
        // Reset readyTx on Click
        setReadyTx("")

        // Validation for ETH Address
        if(info.substring(0,2) === "0x") {
            let validAddress = await isAddress(info)
            if(!validAddress){
                setInvalidAddress(true)
                return
            }else{
                setInvalidAddress(false)
            } 
        }else if(isNaN(info) ){
            setInvalidAddress(true)
            return
        }else{
            setInvalidAddress(false)
        }

        await getDividendInformation(info, getAllTx);          
    };
    
    let progrees
    if( parseInt(accountDividendsInfo[1]) > parseInt(accountDividendsInfo[2]) ){
        progrees = Math.abs( (accountDividendsInfo[2]/accountDividendsInfo[1])*100-100 ).toFixed(0)
    }else{
        progrees = Math.abs( (accountDividendsInfo[1]/accountDividendsInfo[2])*100 ).toFixed(0)
    }

    // UI
    return (
        <div className="container">
            <AppHeader />

            <div className="row">
                <div className="offset-lg-3"></div>

                <div id="tracker-container" className="col-lg-6">
                    <div id="top" className="card">
                      <span>
                        ${symbol}
                        <div className="text_label">${currentTokenPrice}</div>
                      </span>
                      <span>
                        TOTAL HOLDERS
                        <div className="text_label">{numberOfDividendTokenHolders}</div>
                      </span>
                      <span>
                        <PrintGlobalDividends data={ totalDividendsDistributed } />
                      </span>
                    </div>

                    <div id="address-form">
                        <input
                            className={invalidAddress ? 'form__input in is-invalid' : 'form__input in'}
                            type="text"
                            placeholder="Enter your wallet address or index..."
                            onChange={(e) => setInfo(e.target.value)}
                            value={info} />
                        { invalidAddress && <div className="invalid-feedback">Please provide a valid Ethereum Address!</div> }
                        <div className="input-group-btn">
                            <button className="form__btn btn btn--blue" onClick={onInfoPressed}>
                                <svg viewBox="0 0 12 12" fill="none" style={{height: '25px', verticalAlign: 'middle'}}><path fillRule="evenodd" clipRule="evenodd" d="M6 .666l-.94.94 3.72 3.727H.667v1.333H8.78l-3.727 3.72.947.947L11.333 6 6 .666z" fill="currentColor"></path></svg>
                            </button>
                        </div>
                    </div>                        

                    <ProgressBar completed={progrees} />
                    
                    <nav className="navTab">
                        <TabSelector
                        isActive={selectedTab === 'info'}
                        onClick={() => setSelectedTab('info')}
                        >
                            Dividend Information
                        </TabSelector>
                        <TabSelector
                        isActive={selectedTab === 'transactions'}
                        onClick={() => {
                            setSelectedTab('transactions')
                            !invalidAddress && (typeof accountDividendsInfo === 'object') && getAllTx(accountDividendsInfo[0])
                        }}
                        >
                            Transactions
                        </TabSelector>
                    </nav>
                    <div className="p-4">
                        <TabPanel hidden={selectedTab !== 'info'}>
                        <div id="dividendInformation">
                            <PrintAddress data={ accountDividendsInfo[0] } />
                            <PrintBalance data={ addressBalance } />
                            <PrintDividends data={ fromWei(accountDividendsInfo[3],decimals) } />
                            <PrintTotalDividends data={fromWei(accountDividendsInfo[4],decimals) } />
                            <PrintIndex data={accountDividendsInfo[1] } />
                            <PrintIterationsUntilProcessed data={accountDividendsInfo[2] } />
                            <PrintLastProcessedIndex data={lastProcessedIndex } />
                            <PrintClaimTime data={ accountDividendsInfo[5] } />
                            <PrintNextClaimTime data={accountDividendsInfo[6] } />
                        </div>
                        </TabPanel>

                        <TabPanel hidden={selectedTab !== 'transactions'}>
                            
                        { !invalidAddress && (typeof accountDividendsInfo === 'object') && !readyTx ? 
                            <CoinLoader /> 
                        :   readyTx && readyTx.length > 0 ?
                            <PrintReadyTx data={readyTx} />
                        :   !invalidAddress && (typeof accountDividendsInfo === 'object') ?
                            <div className="text-center"><small>You have no transactions yet!</small></div>
                        :   <div className="text-center"><small>Enter you wallet address to get transactions!</small></div>
                        }
                        
                        </TabPanel>

                    </div> 

                </div>
            </div>
        </div>
    );
};

export default GodlDapp;
