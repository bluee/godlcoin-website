import React from 'react'
import DailyTaskCard from './DailyTaskCard'

const CoinMarketCapCard = ({ taskCompleted, setTaskCompleted }) => (
  <DailyTaskCard
    title="CoinMarketCap"
    logo={require('../../img/coinmarketcap.png')}
    taskCompleted={taskCompleted}
    setTaskCompleted={setTaskCompleted}
  >
    <p>
      We are listed on CMC! 
      To help get more exposure and enhance market value:
      <br/>
      <br/>✅ Use <a href="https://keeprefreshing.com" target="_blank" rel="noopener noreferrer">keeprefreshing.com</a> and set timer to 10 seconds. Open as many tabs as you can.
      <br/>✅ Add GODL Coin to watchlist, and tell your friends to do the same.
      <br/>✅ Vote 'Good' at the bottom of the page.
    </p>

    <div className="mb-4">
      <a
        className="btn btn--medium btn--blue "
        href="https://coinmarketcap.com/currencies/godl/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Godl on CoinMarketCap
      </a>
    </div>
  </DailyTaskCard>
)

export default CoinMarketCapCard
