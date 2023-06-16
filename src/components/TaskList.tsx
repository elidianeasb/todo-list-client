import React from 'react'
import Task from './Task'

interface TaskListProps {
  tasks: Task[]
  taskDeleted: () => void
  taskCompleted: () => void

}

function TaskList({ tasks, taskDeleted, taskCompleted}: TaskListProps) {
  console.log(tasks)
  return (
    <div className='task-list'>
      {
        tasks.map((task, index) => (
          <Task key={index} task={task} taskDeleted={taskDeleted} taskCompleted={taskCompleted} />
        ))
      }
    </div>
  )
}

export default TaskList