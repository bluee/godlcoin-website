import React from 'react'
import DailyTaskCard from './DailyTaskCard'

const TwitterCard = ({ taskCompleted, setTaskCompleted }) => (
  <DailyTaskCard
    title="Twitter"
    logo={require('../../img/logo_twitter.svg')}
    taskCompleted={taskCompleted}
    setTaskCompleted={setTaskCompleted}
  >
    <p>
      Using the following hashtags in your tweet(s) will increase their ranking,
      get them trending and attract the attention of potential new investors.
    </p>
    <small>
      #GODLCoin #GODL1Dollar #GODLETH #GODL
    </small>

    <div className="mb-4">
      <a
        className="btn btn--medium btn--blue "
        href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.godl.app&via=GodlCoinETH&text=Godl%20is%20Hodl%21&hashtags=GODLCoin%2CGODL1Dollar%2CGODLETH%2CGODL"
        target="_blank"
        rel="noopener noreferrer"
      >
        Compose a new tweet
      </a>
    </div>
  </DailyTaskCard>
)

export default TwitterCard
