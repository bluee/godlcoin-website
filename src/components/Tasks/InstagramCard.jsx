import React from 'react'
import DailyTaskCard from './DailyTaskCard'

const InstagramCard = ({ taskCompleted, setTaskCompleted }) => (
  <DailyTaskCard
    title="Instagram"
    logo={require('../../img/logo_instagram.svg')}
    taskCompleted={taskCompleted}
    setTaskCompleted={setTaskCompleted}
  >
    <p>
      Use these hashtags on your posts to increase GODL's exposure on this
      platform. For example, post your stats!
    </p>

    <small>
      #GODL #GODLCoin
    </small>

    <div className="mb-4">
      <a
        className="btn btn--medium btn--blue "
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Post on Instagram
      </a>
    </div>
  </DailyTaskCard>
)

export default InstagramCard
