export default function reducer(state = 'HOME', action) {
    switch (action.type) {
        case 'CHANGE_MENU':
            return action.payload ? action.payload : state
    }
    return state
}