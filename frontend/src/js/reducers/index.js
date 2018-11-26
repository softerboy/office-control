import { combineReducers } from 'redux'

import furnitures from './furnitureReducer'
import users from './userReducer'
import tasks from './taskReducer'
import types from './typeReducer'
import navigation from './navigationReducer'

export default combineReducers({
    furnitures,
    users,
    tasks,
    types,
    navigation
})