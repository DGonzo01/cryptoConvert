import { Platform } from 'react-native'

export const platform = {
  is: {
    ios: Platform.OS === 'ios',
    android: Platform.OS === 'android'
  },
  version: Platform.Version
}
