import React, { useEffect, useState } from 'react';
import './App.css';
import Title from './components/Title';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { getAllTasks } from './clients/TodoListServer';


declare global {
    interface Task {
        text: string,
        identifier: Number | String,
        isCompleted: Boolean,
        startTimestamp: String,
        updatedAt: String | null,
        completedAt: String | null
    }
}

function App() {

    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        getAllTasks().then((tasks) => {
            setTasks(tasks)    
        }).catch((message) => {
            console.error(message)
        })
    }, [])

    const taskCreated = () => {
        getAllTasks().then((tasks) => {
            setTasks(() => [...tasks])    
        }).catch((message) => {
            console.error(message)
        })
    }

    const taskDeleted = () => {
        getAllTasks().then((tasks) => {
            setTasks(() => [...tasks])    
        }).catch((message) => {
            console.error(message)
        })
    }

    const taskCompleted = () => {
        getAllTasks().then((tasks) => {
            setTasks(() => [...tasks])    
        }).catch((message) => {
            console.error(message)
        })
    }


    
    return (
        <div className="App">
            <Title />
            <AddTask taskCreated={taskCreated}/>
            <TaskList tasks={tasks} taskDeleted={taskDeleted} taskCompleted={taskCompleted} />
        </div>
    );
}

export default App;
