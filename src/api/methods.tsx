import axios from 'axios'
import { API_HOST } from "../utils/constant"

// HTTP/POST
export const Post = (path: string, req?: any, host: string = API_HOST) => {
    return new Promise((resolve, reject) => {
        axios.post(`${host + path}`, req)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

// HTTP/GET
export const Get = (path: string, host: string = API_HOST) => {
    return new Promise((resolve, reject) => {
        axios.get(`${host + path}`)
            .then((res: any) => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}