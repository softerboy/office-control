export default function reducer(state = {
    users: [],
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch (action.type) {
        case 'FETCH_OWNERS': {
            return { ...state, fetching: true }
        }
        case 'FETCH_USERS_REJECTED': {
            return { ...state, fetching: false, error: action.payload }
        }
        case 'FETCH_USERS_FULLFILLED': {
            return {
                ...state,
                fetched: true,
                fetching: false,
                users: action.payload
            }
        }
        case 'CREATE_USER_FULLFILLED': {
            return { ...state, users: [...state.users, action.payload], fetched: true, fetching: false }
        }
    }

    return state
}