import { combineReducers } from 'redux'
import { routeReducer as route } from 'react-router-redux'
import { reducer as form} from 'redux-form'

import auth, { LOGOUT } from './modules/auth'
import base from './modules/base'
import todo from './modules/todo'

const appReducer = combineReducers({
	auth,
	base,
	route,
	form,
	todo,
})

export default (state, action) => {
	if (action.type === LOGOUT) state = void 0
	return appReducer(state, action)
}