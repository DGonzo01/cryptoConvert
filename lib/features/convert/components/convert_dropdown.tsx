import { View, Text } from 'react-native'
import { Dispatch, SetStateAction } from 'react'
import {
  style,
  styleSheetCreate
} from '../../../core/helpers/styles'
import { CommonTextInput } from '../../../core/ui/input/common_text_input'
import { useState } from 'react'
import { windowWidth } from '../../../core/helpers/dimensions'
import { Dropdown } from 'react-native-element-dropdown'
import {
  CryptoNames,
  IItemCrypto,
  listCrypro
} from '../const/list_crypto'

interface IConvertDropdownProps {
  editable?: boolean
  title: string
  cryptoKey: string
  setCryptoKey: Dispatch<SetStateAction<CryptoNames>>
  countCrypto: string
  setCountCryptoKey: (text: string) => void
}

export const ConvertDropdown = (
  props: IConvertDropdownProps
) => {
  const [countValue, setValue] = useState()
  const [isFocus, setIsFocus] = useState(false)

  console.log(typeof props.cryptoKey)

  const renderItem = (item: IItemCrypto) => {
    return (
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingBottom: 5
        }}>
        <item.icon width={20} height={20} />
        <Text>{item.label}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderRadius: 10,
          overflow: 'hidden'
        }}>
        <CommonTextInput
          value={props.countCrypto}
          onChangeText={props.setCountCryptoKey}
          keyboardType="numeric"
          editable={props.editable}
        />
        <View
          style={{
            width: 100,
            justifyContent: 'center',
            paddingLeft: 10,
            borderLeftWidth: 1,
            borderLeftColor: 'red'
          }}>
          <Dropdown
            data={listCrypro}
            maxHeight={300}
            labelField="label"
            //@ts-ignore
            valueField="value"
            // value={props.cryptoKey}
            renderItem={renderItem}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              props.setCryptoKey(item.label)
              setIsFocus(false)
            }}
          />
        </View>
      </View>
    </View>
  )
}

const styles = styleSheetCreate({
  container: style.view({
    flexDirection: 'column'
  }),
  title: style.text({
    marginBottom: windowWidth * 0.02
  })
})
