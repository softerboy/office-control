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

export const createHouseHold = (formData) => {
    $.notify('Uploading', { globalPosition: 'right middle', className: 'info' }, 'info')
    return dispatch => axios.post(`${HOST_PATH}/api/upload`, formData, {
        'Content-Type': 'multipart/form-data'
    }).then(response => {
        $.notify('Successfully uploaded', { globalPosition: 'right middle', className: 'success' })
        dispatch({
            type: 'CREATE_HOUSE_HOLD_FULLFILLED',
            payload: response.data
        })
    }).catch(err => { 
        $.notify('Form contains errors', { globalPosition: 'right middle', className: 'error' })       
        dispatch({
            type: 'CREATE_HOUSE_HOLD_REJECTED',
            payload: err
        })
    })
}