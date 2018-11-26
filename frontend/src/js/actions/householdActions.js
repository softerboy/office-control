import axios from 'axios'

import { HOST_PATH } from '../constants'

export const fetchHouseHolds = () => {
    return dispatch => axios.get(`${HOST_PATH}/api/all`)
        .then(response => dispatch({
            type: 'FETCH_HOUSEHOLDS_FULLFILLED',
            payload: response.data
        })).catch(err => dispatch({
            type: 'FETCH_HOUSEHOLDS_REJECTED',
            payload: err
        }))
}

export const createHouseHold = (formData, callback) => {
    return dispatch => axios.post(`${HOST_PATH}/api/upload`, formData, {
        'Content-Type': 'multipart/form-data'
    }).then(response => {
        dispatch({
            type: 'CREATE_HOUSE_HOLD_FULLFILLED',
            payload: response.data
        })
        callback(true)
    }).catch(err => {
        dispatch({
            type: 'CREATE_HOUSE_HOLD_REJECTED',
            payload: err
        })
        callback(false)
    })
}

export const fetchSingleFurniture = slug => dispatch =>
    axios.get(`${HOST_PATH}/api/furniture/${slug}`)
        .then(response => dispatch({
            type: 'FETCH_SINGLE_FURNITURE_FULLFILLED',
            payload: response.data
        })).catch(err => dispatch({
            type: 'FETCH_SINGLE_FURNITURE_REJECTED',
            payload: err
        }))

export const search = query => dispatch =>
    axios.get(`${HOST_PATH}/api/search/${query}`)
        .then(response => dispatch({
            type: 'SEARCH_FURNITURE_FULLFILLED',
            payload: response.data
        })).catch(err => dispatch({
            type: 'SEARCH_FURNITURE_REJECTED',
            payload: err
        }))

export const counts = () => dispatch =>
    axios.get(`${HOST_PATH}/api/count`)
        .then(response => dispatch({ type: 'FETCH_COUNTS_FULLFILLED', payload: response.data }))
        .catch(err => dispatch({ type: 'FETCH_COUNTS_REJECTED', payload: err }))