export default function reducer(state = {
    tasks: [],
    fetching: false,
    fetched: false,
    error: null
}, action) {

    switch(action.type) {
        case 'TASK_CREATE': {
            return {...state, fetching: true}
        }
        case 'TASK_FETCH_FULLFILLED': {
            return {...state, fetching: false, fetched: true, tasks: action.payload}
        }
        case 'TASK_FETCH_REJECTED': {
            return {...state, fetching: false, fetched: false, error: action.payload}
        }
        case 'TASK_CREATE_FULLFILLED': {
            return {tasks: [...state.tasks, action.payload]}
        }
    }

    return state
}