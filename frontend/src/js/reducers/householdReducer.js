export default function reducer(state = {
    households: [],
    fetching: false,
    fetched: false,
    error: null,
    furniture: null
}, action) {
    switch (action.type) {
        case 'FETCH_HOUSEHOLDS': {
            return { ...state, fetching: true }
        }
        case 'FETCH_HOUSEHOLDS_FULLFILLED': {
            console.log(action.payload)
            return { ...state, fetching: false, fetched: true, households: action.payload }
        }
        case 'FETCH_HOUSEHOLDS_REJECTED': {
            return { ...state, fetching: false, fetched: false, error: action.payload }
        }
        case 'CREATE_HOUSE_HOLD_FULLFILLED': {
            const newHousehold = action.payload
            state.households[newHousehold.type].items.push(newHousehold)
            return { ...state, fetched: true, fetching: false, error: null }
        }
        case 'CREATE_HOUSE_HOLD': {
            return { ...state, fetching: true, fetched: false, error: null }
        }
        case 'CREATE_HOUSE_HOLD_REJECTED': {
            return { ...state, fetching: false, fetched: false, error: action.payload }
        }
        case 'FETCH_SINGLE_FURNITURE': {
            return { ...state, fetched: false, fetching: false, error: null }
        }
        case 'FETCH_SINGLE_FURNITURE_FULLFILLED': {
            return { ...state, fetched: true, fetching: false, error: null, furniture: action.payload }
        }
        case 'FETCH_SINGLE_FURNITURE_REJECTED': {
            return { ...state, fetched: false, fetching: false, error: action.payload, furniture: null }
        }
    }

    return state
}