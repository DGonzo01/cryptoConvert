import { FC } from 'react'
import {
  TextInput,
  TextInputProps,
  View
} from 'react-native'
import {
  style,
  styleSheetCreate,
  styleSheetFlatten
} from '../../helpers/styles'
import { windowWidth } from '../../helpers/dimensions'
import { TextInputMask } from 'react-native-masked-text'

interface ICommonTextInputProps extends TextInputProps {}

export const CommonTextInput: FC<ICommonTextInputProps> = (
  props: ICommonTextInputProps
) => {
  return (
    <TextInputMask
      type={'money'}
      options={{
        precision: 2,
        separator: ',',
        delimiter: '.',
        unit: '',
        suffixUnit: ''
      }}
      style={styleSheetFlatten([
        styles.container,
        props.style
      ])}
      {...props}
    />
  )
}

const styles = styleSheetCreate({
  container: style.view({
    padding: windowWidth * 0.04,
    flex: 1,
    backgroundColor: 'red'
  })
})
