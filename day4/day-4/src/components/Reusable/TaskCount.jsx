import React from 'react'
import './TaskCount.css'

function TaskCount() {
  return (
    <div className='count-chart'>
      <div className="count-card">
        <div className="count">7</div>
        <div className="task-type">Assigned Tasks</div>
      </div>

      <div className="count-card">
        <div className="count">2</div>
        <div className="task-type">Accepted Tasks</div>
      </div>

      <div className="count-card">
        <div className="count">3</div>
        <div className="task-type">Completed Tasks</div>
      </div>

      <div className="count-card">
        <div className="count">1</div>
        <div className="task-type">Rejected Tasks</div>
      </div>
    </div>
  )
}

export default TaskCount
