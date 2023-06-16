import React, { useEffect, useState } from 'react'
import { completeTaskById, deleteTaskById, editTaskById } from '../clients/TodoListServer'
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';


interface TaskProps {
  task: Task,
  taskDeleted: () => void
  taskCompleted: () => void
}

function Task({ task, taskDeleted, taskCompleted }: TaskProps) {

  const [text, setText] = useState(task.text)
  const [isEditing, setIsEditing] = useState(false)

  const deleteTask = () => {
    deleteTaskById(task.identifier)
      .then(() => {
        taskDeleted()
      })
      .catch((error) => {
        console.error(error)
      })

  }
  const completeTask = () => {
    completeTaskById(task.identifier)
      .then(() => {
        taskCompleted()
      })
      .catch((error) => {
        console.error(error)
      })
  }
  const saveTask = () => {
    //editTaskById(task.identifier)
    editTaskById(task.identifier, text)
      .then(() => {
        taskCompleted()
        setIsEditing(false)
      })
      .catch((error) => {
        console.error(error)
      })
  }
  const editTask = () => {
    //editTaskById(task.identifier)
    setIsEditing(true)
  }

  return isEditing ? (
    <div className='task-edit'>
      <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
      <button onClick={saveTask} className='btn-save'>Save</button>
    </div>

  ) : (
    <div className={task.isCompleted ? 'task task-completed' : 'task'}>
      <h3 onClick={completeTask} >{task.text}</h3>
      <div>
        <AiFillEdit onClick={editTask} className='icon'/>
        <FaTrash onClick={deleteTask} className='icon'/>
      </div>
    </div>
  )
}

export default Task