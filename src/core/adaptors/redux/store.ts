import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reducer from './reducers'
import { persistReducer, persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import reactotron from 'reactotron-react-native'

const persistConfig: any = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: [],
  blacklist: [],
  setTimeout: 60 * 1000,
  stateReconciler: autoMergeLevel2,
}

let enhancers = []

if (__DEV__ && reactotron && reactotron.createEnhancer) {
  enhancers.push(reactotron?.createEnhancer())
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: _ => {
    const middleware = getDefaultMiddleware({
      serializableCheck: false,
    })
    return middleware
  },
  enhancers,
})

export const persistor = persistStore(store)
