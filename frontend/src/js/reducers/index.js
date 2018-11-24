import { combineReducers } from 'redux'

import households from './householdReducer'
import users from './userReducer'
import tasks from './taskReducer'
import types from './typeReducer'
import navigation from './navigationReducer'

export default combineReducers({
    households,
    users,
    tasks,
    types,
    navigation
})