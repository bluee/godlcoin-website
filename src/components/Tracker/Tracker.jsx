import React from "react";
import { useEffect, useState } from "react";
import "./tracker.css";
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
} from "./Godl.js";

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

            await getDividendInformation(address);
        }
        init();
    }, []); //called only once

    const getDividendInformation = async(a) => {
        if(a.substring(0,2) === "0x") {
            const accountDividendsInfo = await getAccountDividendsInfo(a);
            setAccountDividendsInfo(accountDividendsInfo);
            const addressBalance = await balanceOf(a);
            setAddressBalance(addressBalance);
        } else {
            if(a <= 0) return;
            const accountDividendsInfo = await getAccountDividendsInfoAtIndex(a);
            setAccountDividendsInfo(accountDividendsInfo);
            const addressBalance = await balanceOf(accountDividendsInfo[0]);
            setAddressBalance(addressBalance);
        }
    }

    const onInfoPressed = async () => {
        await getDividendInformation(info,false);
    };

    // UI
    return (
        <div className="container">
            <div className="row">
                <div className="offset-lg-3"></div>

                <div className="col-lg-3">
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

                    <em className="heading">Dividend Information ➬</em>
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
                        <hr/>

                        <em className="heading">Search Dividend Information ➬</em>

                        <div id="address-form">
                            <input
                                className="form__input in "
                                type="text"
                                placeholder="Enter address here..."
                                onChange={(e) => setInfo(e.target.value)}
                                value={info} />
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
