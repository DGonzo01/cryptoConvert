import { SafeAreaView, ScrollView } from 'react-native'
import {
  styleSheetCreate,
  style
} from '../../../core/helpers/styles'
import { ConvertDropdown } from '../components/convert_dropdown'
import { VertiacalSpacer } from '../../../core/ui/other/vertical_spacer'
import { CommonScrollView } from '../../../core/ui/layout/common_scroll_view.'
import { windowWidth } from '../../../core/helpers/dimensions'
import { useQuery } from '@tanstack/react-query'
import { getCryptoRequest } from '../requests/get_crypto_request'
import { useState } from 'react'
import { CryptoNames } from '../const/list_crypto'

export const ConvertScreen = () => {
  const [inputCode, setInputCode] = useState(
    CryptoNames.BTC
  )
  const [outputCode, seOutputCode] = useState(
    CryptoNames.ETH
  )

  const [countInputCode, setCountInputCode] =
    useState('1.0')
  const [countOutputCode, setCountOutputCode] =
    useState('1.0')

  const { isLoading, error, data } = useQuery({
    queryKey: ['toods', inputCode],
    queryFn: () => getCryptoRequest(inputCode)
  })

  return (
    <CommonScrollView>
      <SafeAreaView style={styles.container}>
        <ConvertDropdown
          cryptoKey={inputCode}
          setCryptoKey={setInputCode}
          setCountCryptoKey={setCountInputCode}
          countCrypto={countInputCode}
          title="У меня есть"
        />
        <VertiacalSpacer size="small" />
        <ConvertDropdown
          cryptoKey={outputCode}
          setCryptoKey={seOutputCode}
          countCrypto={countOutputCode}
          setCountCryptoKey={setCountOutputCode}
          title="Я получу"
          editable={false}
        />
      </SafeAreaView>
    </CommonScrollView>
  )
}

const styles = styleSheetCreate({
  container: style.view({
    flex: 1,
    margin: windowWidth * 0.04,
    paddingTop: windowWidth * 0.02
  })
})
