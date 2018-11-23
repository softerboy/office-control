import axios from 'axios'
import {HOST_PATH} from '../constants'

export const createTask = (title) => {
    return (dispatch) => {
        axios.post(`${HOST_PATH}/api/tasks/create`, {
            title,
            date: Date.now()
        }, {
            headers: {'Content-Type': 'application/json'}
        }).then(response => dispatch({
            type: 'TASK_CREATE_FULLFILLED',
            payload: response.data
        })).catch(err => dispatch({
            type: 'TASK_CREATE_REJECTED',
            payload: err
        }))
    }
}

export const fetchTasks = () => {
    return (dispatch) => {
        axios.get(`${HOST_PATH}/api/tasks/all`)
            .then(response => dispatch({
                type: 'TASK_FETCH_FULLFILLED',
                payload: response.data
            })).catch(err => dispatch({
                type: 'TASK_FETCH_REJECTED',
                payload: err
            }))
    }
}