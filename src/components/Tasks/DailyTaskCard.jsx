import React from 'react'

const DailyTaskCard = ({
  logo,
  title,
  taskCompleted,
  setTaskCompleted,
  children,
  ...props
}) => (
  <div className="col-sm-12 col-lg-4" style={{ marginBottom: '30px',}}>
  <div
    className="cardTask"
    style={{
      position: 'relative',
      height: '100%',
      alignItems: 'center',
      flexWrap: 'wrap',
      background: taskCompleted && '#eee',
    }}
    {...props}
  >

    <div
      style={{
        flexBasis: '40%',
        minWidth: 100,
        padding: '0px',
        flexShrink: 1,
        flexGrow: 0,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <img
        className="object-contain"
        style={{ width: '100%', maxWidth: 80 }}
        src={logo && logo.default}
        alt={`${title} logo`}
      />
    </div>

    <div
      style={{ marginBottom: 40 }}
    >
      <h4>{title}</h4>
      
      {children}
    </div>

    <div
      style={{
        position: 'absolute',
        bottom: 0,
        borderTop: '2px solid rgba(165, 181, 230,0.8)',
        width: '100%',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 20,
        left: 0,
      }}
    >
      <input
        value={taskCompleted}
        onChange={(e) => setTaskCompleted(e.target.checked)}
        type="checkbox"
        id={`${title}-task-done`}
        style={{ marginRight: 10 }}
      />
      <label
        htmlFor={`${title}-task-done`}
        style={{marginBottom:'0', fontWeight:'600'}}
      >
        Task completed for today
      </label>
    </div>
  </div>
  </div>
)

export default DailyTaskCard
