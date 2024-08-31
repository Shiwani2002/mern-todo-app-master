import axios from "axios"
const instance = axios.create({
    baseURL:"https://mern-todo-app-master-backend.onrender.com/api"
})
export default instance
