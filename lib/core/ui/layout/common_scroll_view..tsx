import { ScrollView } from 'react-native'
import { ScreenContainerProps } from 'react-native-screens'

interface ICommonScrollViewProps
  extends ScreenContainerProps {}

export const CommonScrollView = (
  props: ICommonScrollViewProps
) => {
  return (
    <ScrollView
      {...props}
      keyboardShouldPersistTaps="handled"
      bounces={false}>
      {props.children}
    </ScrollView>
  )
}
