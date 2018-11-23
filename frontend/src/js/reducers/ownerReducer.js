export default function reducer(state={
    owners: [],
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch(action.type) {
        case 'FETCH_OWNERS': {
            return {...state, fetching: true}
        }
        case 'FETCH_OWNERS_REJECTED': {
            return {...state, fetching: false, error: action.payload}
        }
        case 'FETCH_OWNERS_FULLFILLED': {
            return {
                ...state, 
                fetched: true, 
                fetching: false, 
                owners: action.payload
            }
        }
        case 'ADD_OWNER': {
            return [...state.owners, action.payload]
        }
    }

    return state
}