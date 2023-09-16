import React from 'react'
import Task from './Task'

interface TaskListProps {
  tasks: Task[]
  refreshTaskList: () => void
}

function TaskList({ tasks, refreshTaskList}: TaskListProps) {
  console.log(tasks)
  return (
    <div className='task-list'>
      {
        tasks.map((task, index) => (
          <Task key={index} task={task} refreshTaskList={refreshTaskList} />
        ))
      }
    </div>
  )
}

export default TaskList