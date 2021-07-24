import React from "react";
import { useEffect, useState } from "react";
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

const PrintGlobalDividends = ({data}) => (
    <div id="totalDividends">
        <b>Total ETH paid to holders:</b> {data.toLocaleString(undefined, {maximumFractionDigits:3})} ETH
    </div>
);

const PrintAddress = ({data}) => (
    <div>
        <b>Address: </b>
        <a href={"https://etherscan.io/address/" + data} target="_blank" rel="noreferrer">{data.length === 42 ? shortenAddress(data) : ''}</a>
    </div>
);

const PrintBalance = ({data}) => (
    <div>
        <b>GODL Balance: </b>{data}
    </div>
);

const PrintIndex = ({data}) => (
    <div>
        <b>Index: </b>{data}
    </div>
);

const PrintLastProcessedIndex = ({data}) => (
    <div>
        <b>Last processed index:</b> {data}
    </div>
);

const PrintDividends = ({data}) => (
    <div>
        <b>Withdrawable dividends:</b> {data.toLocaleString(undefined, {maximumFractionDigits:3})} ETH
    </div>
);

const PrintTotalDividends = ({data}) => (
    <div>
        <b>Total user dividends:</b> {data.toLocaleString(undefined, {maximumFractionDigits:3})} ETH
    </div>
);

const PrintClaimTime = ({data}) => (
    <div>
        <b>Last claim time:</b> {(new Date(data * 1000)).toLocaleString()}
    </div>
);

const PrintNextClaimTime = ({data}) => (
    <div>
        <b>Next claim time:</b> {(new Date(data * 1000)).toLocaleString()}
    </div>
);

const PrintIterationsUntilProcessed = ({data}) => (
    <div>
        <b>Iterations until processed:</b> {data}
    </div>);

const PrintReadyTx = ({ data }) => (
    data &&  data.map((tx, i)=>{
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

    const [selectedTab, setSelectedTab] = useTabs([
        'info',
        'transactions',
      ]);  
    const [readyTx, setReadyTx] = useState("");

    let page = 0

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

            // let getAllTx = null
            await getDividendInformation(address);           
        }
        init();
    }, []); //called only once

    const getDividendInformation = async(a, callback) => {
        if(a.substring(0,2) === "0x") {
            const accountDividendsInfo = await getAccountDividendsInfo(a);
            setAccountDividendsInfo(accountDividendsInfo);
            const addressBalance = await balanceOf(a);
            setAddressBalance(addressBalance);
            callback(accountDividendsInfo[0])
        } else {
            if(a <= 0) return;
            const accountDividendsInfo = await getAccountDividendsInfoAtIndex(a);
            setAccountDividendsInfo(accountDividendsInfo);
            const addressBalance = await balanceOf(accountDividendsInfo[0]);
            setAddressBalance(addressBalance);
            callback(accountDividendsInfo[0])
        }
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
            const eth = await getEthPrice()
            const ethPrice = eth.data.items[0].quote_rate
    
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


    // UI
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-12">
                    <a href="/" className="logo">
                        <div className="logo__img"></div>
                        <div className="logo__title">GODL Coin</div>
                    </a>
                </div>
            </div>

            <div className="row">
                <div className="offset-lg-3"></div>

                <div id="tracker-container" className="col-lg-6">
                    <div id="top">
                      <span>
                        <img id="logo" src="img/logo.png" alt="GODL Logo"></img>
                        <strong>${symbol}</strong>
                      </span>
                        <span>${currentTokenPrice}</span>
                        <span>{numberOfDividendTokenHolders} holders</span>
                    </div>

                    <PrintGlobalDividends data={ totalDividendsDistributed } />

                    <hr/>

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
                        :   readyTx ?
                            <PrintReadyTx data={readyTx} />
                        :   
                            <div className="text-center"><small>Enter you address to get transactions!</small></div>
                        }
                        
                        </TabPanel>

                        <hr/>
                        <div id="address-form">
                            <span className="heading">Search {selectedTab === 'info' ? 'Dividend Information' : 'Transactions' }</span>
                            <input
                                className={invalidAddress ? 'form__input in is-invalid' : 'form__input in'}
                                type="text"
                                placeholder="Enter your address..."
                                onChange={(e) => setInfo(e.target.value)}
                                value={info} />
                            { invalidAddress && <div className="invalid-feedback">Please provide a valid Ethereum Address!</div> }
                            <button className="form__btn btn btn--blue" onClick={onInfoPressed}>
                                Get Address Information
                            </button>
                        </div>                        
                    </div> 

                </div>
            </div>
        </div>
    );
};

export default GodlDapp;
