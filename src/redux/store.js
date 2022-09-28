import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import rootreducer from "./rootreducer"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['filter']
  }

const persistedReducer = persistReducer(persistConfig, rootreducer)

export const store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk)))
export const persistor = persistStore(store)
