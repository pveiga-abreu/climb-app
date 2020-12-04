import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducer/index'

const persistConfig = {
  key: 'climb',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)

const persistor = persistStore(store)

export { store, persistor }
