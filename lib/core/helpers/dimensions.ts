import { Dimensions, StatusBar } from 'react-native'
import { platform } from './platfrom'

const windowDimensions = Dimensions.get('window')

export const windowWidth = windowDimensions.width
export const windowHeight =
  windowDimensions.height -
  (!platform.is.android ? StatusBar.currentHeight || 0 : 0)
