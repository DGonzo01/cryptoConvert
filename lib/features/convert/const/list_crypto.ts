import BTC from '../../../../assets/images/bitcoin.svg'
import ETH from '../../../../assets/images/ethereum.svg'
import USDT from '../../../../assets/images/tether.svg'

export enum CryptoNames {
  BTC = 'BTC',
  ETH = 'ETH',
  USDT = 'USDT'
}

export interface IItemCrypto {
  icon: any
  label: keyof typeof CryptoNames
  id: 0 | 1 | 2
}

export const listCrypro: IItemCrypto[] = [
  {
    icon: BTC,
    label: CryptoNames.BTC,
    id: 0
  },
  {
    icon: ETH,
    label: CryptoNames.ETH,
    id: 1
  },
  {
    icon: USDT,
    label: CryptoNames.USDT,
    id: 2
  }
]
