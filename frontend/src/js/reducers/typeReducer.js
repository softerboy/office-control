export default function reducer(state = {
    types: [],
    fetching: false,
    fetched: false,
    error: null
}, action) {

    switch(action.type) {
        case 'TYPE_CREATE': {
            return {...state, fetching: true}
        }
        case 'TYPE_FETCH_FULLFILLED': {
            return {...state, fetching: false, fetched: true, types: action.payload}
        }
        case 'TYPE_FETCH_REJECTED': {
            return {...state, fetching: false, fetched: false, error: action.payload}
        }
        case 'TYPE_CREATE_FULLFILLED': {
            return {types: [...state.types, action.payload]}
        }
    }

    return state
}