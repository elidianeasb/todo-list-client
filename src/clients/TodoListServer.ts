import axios from "axios"

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
    const promise = new Promise<void>((resolve, reject) => {
        axios.post('http://localhost:8080/tasks?email=eli@gmail.com', {
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
    const promise = new Promise<void>((resolve, reject) => {
        axios.delete(`http://localhost:8080/tasks/${taskId}?email=eli@gmail.com`)
        .then((response) => resolve(response.data))        
        .catch((error) => {
            console.error(error)
            reject(error)
        })
    })
    return promise
}

export function completeTaskById(taskId: Number | String) {
    const promise = new Promise<void>((resolve, reject) => {
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
    const promise = new Promise<any>((resolve, reject) => {
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
