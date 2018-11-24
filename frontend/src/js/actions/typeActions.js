import axios from 'axios'
import { HOST_PATH } from '../constants'

export const fetchTypes = () => {
    return dispatch => {
        axios.get(`${HOST_PATH}/api/types`)
            .then(response => dispatch({
                type: 'TYPE_FETCH_FULLFILLED',
                payload: response.data
            })).catch(err => dispatch({
                type: 'TYPE_FETCH_REJECTED',
                payload: err
            }))
    }
}