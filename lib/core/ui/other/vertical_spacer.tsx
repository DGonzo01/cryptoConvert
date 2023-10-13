import { View } from 'react-native'
import { FC } from 'react'
import { windowWidth } from '../../helpers/dimensions'

const vertiacalSpacerSize = {
  small: windowWidth * 0.04,
  normal: windowWidth * 0.08,
  big: windowWidth * 0.1
}

interface IVertiacalSpacerProps {
  size: keyof typeof vertiacalSpacerSize
}

export const VertiacalSpacer: FC<IVertiacalSpacerProps> = ({
  size
}) => {
  return (
    <View style={{ height: vertiacalSpacerSize[size] }} />
  )
}
