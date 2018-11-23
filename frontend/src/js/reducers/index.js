import { combineReducers } from 'redux'

import households from './householdReducer'
import owners from './ownerReducer'

export default combineReducers({
    households,
    owners
})