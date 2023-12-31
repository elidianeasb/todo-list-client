import axios from "axios"

const USER_EMAIL = "eli@gmail.com"

export function getAllTasks() {
    const promise = new Promise<Task[]>((resolve, reject) => {
        axios.get('http://localhost:8080/tasks').then((response) => {
            resolve(response.data)
        }).catch((error) => {
            console.error(error)
            reject(error)
        })
    })
    return promise
}

export function createTask(text: String) {
    const promise = new Promise<Task>((resolve, reject) => {
        axios.post(`http://localhost:8080/tasks?email=${USER_EMAIL}`, {
            "text": text
        }).then((response) => resolve(response.data))        
        .catch((error) => {
            console.error(error)
            reject(error)
        })
    })
    return promise
}

export function deleteTaskById(taskId: Number | String) {
    const promise = new Promise<Task>((resolve, reject) => {
        axios.delete(`http://localhost:8080/tasks/${taskId}?email=${USER_EMAIL}`)
        .then((response) => resolve(response.data))        
        .catch((error) => {
            console.error(error)
            reject(error)
        })
    })
    return promise
}

export function completeTaskById(taskId: Number | String) {
    const promise = new Promise<Task>((resolve, reject) => {
        axios.post(`http://localhost:8080/tasks/${taskId}/complete`)
        .then((response) => resolve(response.data))        
        .catch((error) => {
            console.error(error)
            reject(error)
        })
    })
    return promise
}

export function editTaskById(taskId: Number | String, text: String) {
    const promise = new Promise<Task>((resolve, reject) => {
        axios.put(`http://localhost:8080/tasks/${taskId}`, {
            "text": text,
            "completed": false
        })
        .then((response) => resolve(response.data))
        .catch((error) => {
            console.error(error)
            reject(error)
        })
    })
    return promise
}
