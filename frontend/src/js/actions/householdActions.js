import axios from 'axios'

import {HOST_PATH} from '../constants'

export const fetchHouseHolds = () => {
    return function(dispatch) {
        axios.get(`${HOST_PATH}/api/all`)
            .then(response => dispatch({
                type: 'FETCH_HOUSEHOLDS_FULLFILLED',
                payload: response.data
            })).catch(err => dispatch({
                type: 'FETCH_HOUSEHOLDS_REJECTED',
                payload: err
            }))
    }
}