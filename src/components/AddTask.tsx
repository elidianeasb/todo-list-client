import React, { useState } from 'react'
import { createTask } from '../clients/TodoListServer'

interface AddTaskProps {
  refreshTaskList: () => void
}

function AddTask({refreshTaskList}: AddTaskProps) {
  const [text, setText] = useState("")

  const addTask = () => {
    createTask(text).then((response) => {
      console.log(response)
      refreshTaskList()
      setText("")
    })
  }
  return (
    <div className='add-task'>
        <input value={text} type="text" onChange={(event) => setText(event.target.value)} />
        <button onClick={addTask} className='btn-add'>Add</button>
    </div>
  )
}

export default AddTask