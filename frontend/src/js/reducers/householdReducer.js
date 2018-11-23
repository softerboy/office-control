export default function reducer(state={
    households: [],
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch(action.type) {
        case 'FETCH_HOUSEHOLDS': {
            return {...state, fetching: true}
        }
        case 'FETCH_HOUSEHOLDS_FULLFILLED': {
            return {...state, fetching: false, fetched: true, households: action.payload}
        }
        case 'FETCH_HOUSEHOLDS_REJECTED': {
            return {...state, fetching: false, fetched: false, error: action.payload}
        }
        case 'ADD_HOUSE_HOLD': {
            return [...state, action.payload]
        }
    }

    return state
}