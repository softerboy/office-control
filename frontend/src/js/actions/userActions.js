import axios from 'axios'
import { HOST_PATH } from '../constants'

export const createUser = (user) => {
    return (dispatch) => {
        axios.post(`${HOST_PATH}/api/users/create`, {
            user
        }, {
                headers: { 'Content-Type': 'application/json' }
            }).then(response => dispatch({
                type: 'CREATE_USER_FULLFILLED',
                payload: response.data
            })).catch(err => dispatch({
                type: 'CREATE_USER_REJECTED',
                payload: err
            }))
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        axios.get(`${HOST_PATH}/api/users`)
            .then(response => dispatch({
                type: 'FETCH_USERS_FULLFILLED',
                payload: response.data
            })).catch(err => dispatch({
                type: 'FETCH_USERS_REJECTED',
                payload: err
            }))
    }
}