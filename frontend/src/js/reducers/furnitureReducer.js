export default function reducer(state = {
    furnitures: [],
    fetching: false,
    fetched: false,
    error: null,
    furniture: null,
    counts: [],
    isSearch: false
}, action) {
    switch (action.type) {
        case 'FETCH_FURNITURES': {
            return { ...state, fetching: true }
        }
        case 'FETCH_FURNITURES_FULLFILLED': {
            console.log(action.payload)
            return { ...state, fetching: false, fetched: true, furnitures: action.payload, isSearch: false }
        }
        case 'FETCH_FURNITURES_REJECTED': {
            return { ...state, fetching: false, fetched: false, error: action.payload, isSearch: false }
        }
        case 'CREATE_HOUSE_HOLD_FULLFILLED': {
            const newHousehold = action.payload
            state.furnitures[newHousehold.type].items.push(newHousehold)
            return { ...state, fetched: true, fetching: false, error: null, isSearch: false }
        }
        case 'CREATE_FURNITURE': {
            return { ...state, fetching: true, fetched: false, error: null, isSearch: false }
        }
        case 'CREATE_FURNITURES_REJECTED': {
            return { ...state, fetching: false, fetched: false, error: action.payload, isSearch: false }
        }
        case 'FETCH_SINGLE_FURNITURE': {
            return { ...state, fetched: false, fetching: false, error: null, isSearch: false }
        }
        case 'FETCH_SINGLE_FURNITURE_FULLFILLED': {
            return { ...state, fetched: true, fetching: false, error: null, furniture: action.payload, isSearch: false }
        }
        case 'FETCH_SINGLE_FURNITURE_REJECTED': {
            return { ...state, fetched: false, fetching: false, error: action.payload, furniture: null, isSearch: false }
        }
        case 'SEARCH_FURNITURE': {
            return { ...state, fetched: false, fetching: true, error: null, isSearch: false }
        }
        case 'SEARCH_FURNITURE_FULLFILLED': {
            return { ...state, furnitures: action.payload, fetched: false, fetching: true, error: null, isSearch: true }
        }
        case 'SEARCH_FURNITURE_REJECTED': {
            return { ...state, fetched: false, fetching: false, error: action.payload, isSearch: false }
        }
        case 'FETCH_COUNTS': {
            return { ...state, fetched: false, fetching: true, error: null }
        }
        case 'FETCH_COUNTS_FULLFILLED': {
            return { ...state, fetched: true, fetching: false, error: null, counts: action.payload }
        }
        case 'FETCH_COUNTS_REJECTED': {
            return { ...state, fetched: true, fetching: false, error: action.payload }
        }
        case 'RESET_SEARCH': {
            return { ...state, isSearch: false }
        }
    }

    return state
}