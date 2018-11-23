import { combineReducers } from 'redux'

import households from './householdReducer'
import owners from './ownerReducer'
import tasks from './taskReducer'

export default combineReducers({
    households,
    owners,
    tasks
})