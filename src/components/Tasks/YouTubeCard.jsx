import React from 'react'
import DailyTaskCard from './DailyTaskCard'

const YouTubeCard = ({ taskCompleted, setTaskCompleted }) => (
  <DailyTaskCard
    title="YouTube"
    logo={require('../../img/logo_youtube.svg')}
    taskCompleted={taskCompleted}
    setTaskCompleted={setTaskCompleted}
  >
    <p>
      Searching for these terms on YouTube increases their ranking, causing more
      people to get them as suggested videos or search suggestions.
    </p>

    <div>
      <a
        className="btn btn--medium btn--blue "
        href="https://www.youtube.com/results?search_query=godl+coin"
        target="_blank"
        rel="noopener noreferrer"
      >
        Search YouTube for "Godl Coin"
      </a><br/>
      <a
        className="btn btn--medium btn--blue "
        href="https://www.youtube.com/results?search_query=godl+free+eth"
        target="_blank"
        rel="noopener noreferrer"
      >
        Search YouTube for "Godl free ETH"
      </a>
    </div>
  </DailyTaskCard>
)

export default YouTubeCard
