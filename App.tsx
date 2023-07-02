import React from 'react'
import AppNavigator from 'core/navigators/AppNavigator'

// Store
import { store } from 'core/adaptors/redux/store'
import { Provider } from 'react-redux'
import { configReactotron } from 'shared/helpers/reactotron'
import reactotron from 'reactotron-react-native'

configReactotron({ host: '192.168.1.2', withLog: true })?.connect()

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}

export default App
