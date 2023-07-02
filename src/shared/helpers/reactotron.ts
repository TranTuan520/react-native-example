import AsyncStorage from '@react-native-async-storage/async-storage'
import reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
export const configReactotron = ({ host = '', withLog = true }: { host: string; withLog?: Boolean }) => {
  if (__DEV__) {
    if (withLog) {
      // @ts-ignore
      console.log = reactotron.log
    }

    return reactotron
      .setAsyncStorageHandler?.(AsyncStorage)
      .configure({
        name: 'React Native Example',
        host: host,
        port: 9090,
      })
      .useReactNative()
      .use(reactotronRedux())
  }
}
