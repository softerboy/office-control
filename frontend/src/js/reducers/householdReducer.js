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
        case 'CREATE_HOUSE_HOLD_FULLFILLED': {
            return {...state.households, households: [...state.households, action.payload], fetched: true, fetching: false, error: null}
        }
        case 'CREATE_HOUSE_HOLD': {
            return {...state, fetching: true, fetched: false, error: null}
        }
        case 'CREATE_HOUSE_HOLD_REJECTED': {
            return {...state, fetching: false, fetched: false, error: action.payload}
        }
    }

    return state
}