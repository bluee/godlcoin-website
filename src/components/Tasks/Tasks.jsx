import AppHeader from "../Header/AppHeader";
import React, { useState } from 'react'

import CoinGeckoCard from "./CoinGeckoCard";
import CoinMarketCapCard from "./CoinMarketCapCard";
import GoogleCard from "./GoogleCard";
import YouTubeCard from './YouTubeCard'
import TwitterCard from './TwitterCard'
import InstagramCard from './InstagramCard'
import "./tasks.css";


function Tasks() {
    const [completedTasks, setCompletedTasks] = useState({
      google: false,
      youtube: false,
      twitter: false,
      coingecko: false,
      instagram: false,
      coinmarketcap: false,
    })
  
    const completedTasksAmt = Object.values(completedTasks).filter(
      (completed) => !!completed
    ).length
  

    return (
      <>
        <AppHeader />
        <div className="container">

            <div className="cardTask topText">
                <h3>Tasks to boost your income</h3>
                <p>
                The tasks outlined below can significantly impact the (future) value of
                your investment.
                <br />
                As such, investors are highly encouraged to perform these tasks as often as possible.
                </p>
            
            
                {completedTasksAmt > 0 && (
                <div className="completed" style={{marginBottom: '30px'}}>
                    <div>
                    <p>
                        You have completed {completedTasksAmt} task
                        {completedTasksAmt > 1 ? 's' : ''} today!
                    </p>
                    </div>
                </div>
                )}
            </div>

            <div className="row tasks">
            <YouTubeCard
                taskCompleted={completedTasks['youtube']}
                setTaskCompleted={(completed) =>
                setCompletedTasks((prev) => ({ ...prev, youtube: completed }))
                }
            />
            <TwitterCard
                taskCompleted={completedTasks['twitter']}
                setTaskCompleted={(completed) =>
                setCompletedTasks((prev) => ({ ...prev, twitter: completed }))
                }
            />
            <InstagramCard
                taskCompleted={completedTasks['instagram']}
                setTaskCompleted={(completed) =>
                setCompletedTasks((prev) => ({ ...prev, instagram: completed }))
                }
            />                
            <CoinMarketCapCard
                taskCompleted={completedTasks['coinmarketcap']}
                setTaskCompleted={(completed) =>
                setCompletedTasks((prev) => ({
                    ...prev,
                    coinmarketcap: completed,
                }))
                }
            />
            <CoinGeckoCard
                taskCompleted={completedTasks['coingecko']}
                setTaskCompleted={(completed) =>
                    setCompletedTasks((prev) => ({
                    ...prev,
                    coingecko: completed,
                    }))
                }
                />
            <GoogleCard
                taskCompleted={completedTasks['google']}
                setTaskCompleted={(completed) =>
                setCompletedTasks((prev) => ({ ...prev, google: completed }))
                }
            />
            </div>
        </div>
      </>
    )
  }
  
export default Tasks
