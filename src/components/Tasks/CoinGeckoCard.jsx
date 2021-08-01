import React from 'react'
import DailyTaskCard from './DailyTaskCard'

const CoinGeckoCard = ({ taskCompleted, setTaskCompleted }) => (
  <DailyTaskCard
    title="CoinGecko"
    logo={require('../../img/logo_coingecko.png')}
    taskCompleted={taskCompleted}
    setTaskCompleted={setTaskCompleted}
  >
    <p>
      Go to GODL's CoinGecko page and click on the STAR to LIKE GODL!<br/>
      And click on the GOOD about how you feel about GODL today!
    </p>

    <div>
      <a
        className="btn btn--medium btn--blue "
        href="https://coingecko.com/en/coins/godl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Godl on CoinGecko
      </a>
    </div>
  </DailyTaskCard>
)

export default CoinGeckoCard
