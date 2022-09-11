import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
 
import { authReducer, otherReducer } from './reducers'
 
const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['auth']
}
 
const authPersistConfig = {
  key: 'auth',
  storage: storage,
  blacklist: ['somethingTemporary']
}
 
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  other: otherReducer,
})
 
export default persistReducer(rootPersistConfig, rootReducer)